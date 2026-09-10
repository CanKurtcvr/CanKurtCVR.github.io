import { useEffect, useMemo, useState } from "react";
import { Play, Swords, X } from "lucide-react";
import { FlightWorld3D, IslandNPC, PetType } from "./FlightWorld3D";
import { BattleArena } from "./BattleArena";
import {
  INITIAL_CHARACTER_STATE,
  HABIT_ISLANDS,
} from "./data/worldData";
import {
  CharacterState,
  QuestStatus,
  TimeOfDay,
  WorldArea,
  HabitIsland,
  QUEST_DEFINITIONS,
  GearSlot,
  GearItem,
} from "./types";

const initialQuests: QuestStatus[] = QUEST_DEFINITIONS.map((quest) => ({
  questId: quest.id,
  questName: quest.name,
  completed: false,
  currentStreak: 0,
  tier: "Common",
}));

const realLifeQuests: Record<string, string> = {
  nexus: "Choose one priority for tomorrow and write it down in five quiet minutes.",
  spirituality: "Spend 10 minutes today in meditation, breathwork, prayer, or quiet gratitude.",
  reflection: "Take 5 minutes tonight to write what helped, what hindered, and what you will release.",
  vitality: "Complete a deliberate movement session or reach 10,000 steps today.",
  wisdom: "Read or study without your phone for at least 30 focused minutes.",
  creation: "Practice a creative skill for 30 minutes and make one small thing.",
};

const npcChallenges: Record<string, string> = {
  nexus: "Choose one priority for tomorrow and write it down before you go to sleep.",
  spirituality: "Spend 10 quiet minutes today in meditation, prayer, breathwork, or gratitude.",
  reflection: "Write down one thing that helped you today and one thing you can release.",
  vitality: "Complete a deliberate movement session or take a purposeful 20-minute walk.",
  wisdom: "Read or study for 30 focused minutes with your phone out of reach.",
  creation: "Spend 30 minutes practicing a creative skill and make one small thing.",
};

const gearLabels: Record<GearSlot, string> = {
  head: "head gear",
  chest: "chest armor",
  weapon: "weapon",
  accessory: "sacred relic",
  feet: "traveler boots",
};

const arenaBenefits: Record<GearSlot, string> = {
  head: "improves the protection from Stillness Guard",
  chest: "increases your resilience against incoming attacks",
  weapon: "adds damage to every offensive arena skill",
  accessory: "sharpens focus damage and defensive control",
  feet: "adds momentum to Focus Strike",
};

interface ChallengeGearDetails {
  item: GearItem;
  nextStage: GearItem["stages"][number] | null;
}

export function AscensionGame() {
  const [hasStarted, setHasStarted] = useState(false);
  const [petType, setPetType] = useState<PetType>(() => {
    const saved = localStorage.getItem("ascension-pet");
    return saved === "dog" || saved === "turtle" ? saved : "cat";
  });
  const [character, setCharacter] = useState<CharacterState>(() => {
    const saved = localStorage.getItem("ascension-character");
    return saved ? JSON.parse(saved) as CharacterState : {
      ...INITIAL_CHARACTER_STATE,
      equipment: { ...INITIAL_CHARACTER_STATE.equipment },
      gearInventory: [...INITIAL_CHARACTER_STATE.gearInventory],
    };
  });
  const [quests, setQuests] = useState<QuestStatus[]>(() => {
    const saved = localStorage.getItem("ascension-quests");
    return saved ? JSON.parse(saved) as QuestStatus[] : initialQuests;
  });
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("golden");
  const [selectedArea, setSelectedArea] = useState<{
    area: WorldArea;
    island: HabitIsland;
  } | null>(null);
  const [npcChallenge, setNpcChallenge] = useState<{
    npc: IslandNPC;
    text: string;
  } | null>(null);
  const [isArenaOpen, setIsArenaOpen] = useState(false);

  const islands = useMemo(() => HABIT_ISLANDS, []);

  const getChallengeGear = (questId: string): ChallengeGearDetails | null => {
    const item = Object.values(character.equipment).find((gear) => gear?.islandOrigin === questId);
    if (!item) return null;
    return {
      item,
      nextStage: item.stages[item.level] ?? null,
    };
  };

  useEffect(() => {
    localStorage.setItem("ascension-character", JSON.stringify(character));
    localStorage.setItem("ascension-quests", JSON.stringify(quests));
    localStorage.setItem("ascension-pet", petType);
  }, [character, quests, petType]);

  const ascendGear = (slot: GearSlot) => {
    setCharacter((current) => {
      const item = current.equipment[slot];
      if (!item) return current;
      const quest = quests.find((entry) => entry.questId === item.islandOrigin);
      const nextLevel = Math.min(item.level + 1, item.stages.length);
      if (nextLevel === item.level || !quest || quest.currentStreak < item.streakRequirementForNext) return current;
      const stage = item.stages[nextLevel - 1];
      const upgraded = {
        ...item,
        level: nextLevel,
        tier: stage.tier,
        name: stage.name,
        statBonus: { ...item.statBonus, amount: stage.statBoost },
        streakRequirementForNext: nextLevel < item.stages.length ? [7, 30, 90][nextLevel - 1] ?? 90 : 90,
      };
      return {
        ...current,
        activeTitle: stage.title,
        equipment: { ...current.equipment, [slot]: upgraded },
        gearInventory: current.gearInventory.map((gear) => gear.id === item.id ? upgraded : gear),
      };
    });
  };

  if (!hasStarted) {
    return (
      <div className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-[radial-gradient(circle_at_top,#173554,#07111d_65%)] p-6 text-slate-100 shadow-2xl">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">Ascension Archipelago</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">A quiet journey back to yourself</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300">
            Explore a floating world built around six everyday virtues. Visit a sanctuary, listen to its reflection,
            and turn one small idea into a real-life action. There is no timer, enemy, or score to chase.
          </p>
          <button
            type="button"
            onClick={() => setHasStarted(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            <Play className="h-4 w-4 fill-current" />
            Play Ascension
          </button>
          <div className="mx-auto mt-6 max-w-md rounded-xl border border-slate-700 bg-slate-950/40 p-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Choose your companion</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {(["cat", "dog", "turtle"] as PetType[]).map((pet) => (
                <button
                  key={pet}
                  type="button"
                  onClick={() => setPetType(pet)}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition ${
                    petType === pet
                      ? "border-amber-300 bg-amber-300/15 text-amber-100"
                      : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {pet}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">Your companion follows behind you while you walk.</p>
          </div>
          <p className="mt-4 text-xs text-slate-500">Use WASD or arrow keys to move once the world opens.</p>
        </div>
      </div>
    );
  }

  const awardXp = (amount: number) => {
    setCharacter((current) => ({
      ...current,
      xp: current.xp + amount,
    }));
  };

  const completeArea = () => {
    if (!selectedArea) return;
    setQuests((current) =>
      current.map((quest) =>
        quest.questId === selectedArea.island.questId
          ? { ...quest, completed: true, currentStreak: quest.currentStreak + 1 }
          : quest,
      ),
    );
    awardXp(25);
    setSelectedArea(null);
  };

  const completeNpcChallenge = () => {
    if (!npcChallenge) return;
    setQuests((current) =>
      current.map((quest) =>
        quest.questId === npcChallenge.npc.islandId
          ? { ...quest, completed: true, currentStreak: quest.currentStreak + 1 }
          : quest,
      ),
    );
    awardXp(25);
    setNpcChallenge(null);
  };

  return (
    <div className="relative isolate h-[min(78vh,900px)] min-h-[620px] overflow-hidden rounded-2xl border border-slate-700 bg-[#07111d] shadow-2xl [&:fullscreen]:h-screen [&:fullscreen]:min-h-0 [&:fullscreen]:w-screen [&:fullscreen]:rounded-none [&:fullscreen]:border-0">
      <FlightWorld3D
        character={character}
        quests={quests}
        petType={petType}
        timeOfDay={timeOfDay}
        onTimeOfDayChange={setTimeOfDay}
        onEnterArea={(area, island) => setSelectedArea({ area, island })}
        onAwardXP={awardXp}
        onAscendGear={ascendGear}
        onDialogueComplete={(npc) =>
          setNpcChallenge({
            npc,
            text: npcChallenges[npc.islandId] ?? "Choose one small action today and follow it through with care.",
          })
        }
      />

      <button
        type="button"
        onClick={() => setIsArenaOpen(true)}
        className="absolute right-3 top-16 z-40 inline-flex items-center gap-2 rounded-xl border border-rose-400/40 bg-slate-950/85 px-3 py-2 text-xs font-semibold text-rose-200 shadow-lg backdrop-blur transition hover:border-rose-300 hover:bg-rose-950/80"
      >
        <Swords className="h-4 w-4" />
        Battle Arena
      </button>

      {selectedArea && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-sky-300/30 bg-slate-950/95 p-6 text-slate-100 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                  {selectedArea.island.name}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedArea.area.name}</h3>
              </div>
              <button
                type="button"
                aria-label="Close sanctuary details"
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                onClick={() => setSelectedArea(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {selectedArea.area.description}
            </p>
            <div className="mt-5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Real-life quest
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-50">
                {realLifeQuests[selectedArea.island.id] ?? selectedArea.area.actionPrompt}
              </p>
            </div>
            <p className="mt-4 border-l-2 border-sky-400/60 pl-3 text-sm italic text-slate-400">
              {selectedArea.area.loreSnippet}
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-sky-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              onClick={completeArea}
            >
              I completed this quest (+25 XP)
            </button>
          </div>
        </div>
      )}

      {npcChallenge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-amber-300/40 bg-slate-950/95 p-6 text-slate-100 shadow-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Challenge from {npcChallenge.npc.name}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">Carry this idea into your day</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {npcChallenge.text}
            </p>
            {(() => {
              const gear = getChallengeGear(npcChallenge.npc.islandId);
              if (!gear) return null;
              const { item, nextStage } = gear;
              return (
                <div className="mt-4 rounded-xl border border-sky-300/30 bg-sky-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                    Gear progression
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    This challenge upgrades your <span className="font-semibold text-white">{gearLabels[item.slot]}</span>
                    {" "}({item.name}) after a <span className="font-semibold text-white">{item.streakRequirementForNext}-day streak</span>.
                  </p>
                  {nextStage ? (
                    <p className="mt-2 text-xs leading-5 text-sky-100/80">
                      Next: {nextStage.name} ({nextStage.tier}) - {arenaBenefits[item.slot]}.
                    </p>
                  ) : (
                    <p className="mt-2 text-xs leading-5 text-sky-100/80">
                      This gear is already at its final tier; continued streaks still strengthen your overall arena power.
                    </p>
                  )}
                </div>
              );
            })()}
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Complete the real-life challenge, then return and confirm it here to add one day to your streak.
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-amber-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
              onClick={completeNpcChallenge}
            >
              I completed this challenge (+1 day, +25 XP)
            </button>
            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => setNpcChallenge(null)}
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {isArenaOpen && (
        <BattleArena
          character={character}
          quests={quests}
          onAwardXP={awardXp}
          onClose={() => setIsArenaOpen(false)}
        />
      )}

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-slate-950/70 px-3 py-2 text-xs text-slate-300 backdrop-blur">
        {islands.length} sanctuaries - {character.xp} XP - {timeOfDay}
      </div>
    </div>
  );
}

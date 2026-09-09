import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { FlightWorld3D } from "./FlightWorld3D";
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
} from "./types";

const initialQuests: QuestStatus[] = QUEST_DEFINITIONS.map((quest) => ({
  questId: quest.id,
  questName: quest.name,
  completed: false,
  currentStreak: 0,
  tier: "Common",
}));

export function AscensionGame() {
  const [character, setCharacter] = useState<CharacterState>(() => ({
    ...INITIAL_CHARACTER_STATE,
    equipment: { ...INITIAL_CHARACTER_STATE.equipment },
    gearInventory: [...INITIAL_CHARACTER_STATE.gearInventory],
  }));
  const [quests, setQuests] = useState<QuestStatus[]>(initialQuests);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("golden");
  const [selectedArea, setSelectedArea] = useState<{
    area: WorldArea;
    island: HabitIsland;
  } | null>(null);

  const islands = useMemo(() => HABIT_ISLANDS, []);

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

  return (
    <div className="relative isolate h-[min(78vh,900px)] min-h-[620px] overflow-hidden rounded-2xl border border-slate-700 bg-[#07111d] shadow-2xl">
      <FlightWorld3D
        character={character}
        quests={quests}
        timeOfDay={timeOfDay}
        onTimeOfDayChange={setTimeOfDay}
        onEnterArea={(area, island) => setSelectedArea({ area, island })}
        onAwardXP={awardXp}
      />

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
            <p className="mt-4 border-l-2 border-sky-400/60 pl-3 text-sm italic text-slate-400">
              {selectedArea.area.loreSnippet}
            </p>
            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-sky-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
              onClick={completeArea}
            >
              Mark sanctuary complete (+25 XP)
            </button>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-slate-950/70 px-3 py-2 text-xs text-slate-300 backdrop-blur">
        {islands.length} sanctuaries - {character.xp} XP - {timeOfDay}
      </div>
    </div>
  );
}

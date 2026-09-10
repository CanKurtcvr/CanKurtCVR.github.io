import { useMemo, useState } from 'react';
import { HeartPulse, Shield, Swords, X, Zap } from 'lucide-react';
import { CharacterState, GearItem, QuestStatus } from './types';

interface BattleArenaProps {
  character: CharacterState;
  quests: QuestStatus[];
  onAwardXP: (amount: number) => void;
  onClose: () => void;
}

interface Boss {
  id: string;
  name: string;
  trait: string;
  description: string;
  color: string;
  attack: number;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  power: number;
  icon: typeof Swords;
  requiredSlots: GearItem['slot'][];
}

const bosses: Boss[] = [
  { id: 'procrastination', name: 'The Delay', trait: 'Procrastination', description: 'Turns every important step into a promise for tomorrow.', color: '#f59e0b', attack: 10 },
  { id: 'distraction', name: 'The Scattermind', trait: 'Distraction', description: 'Fills every quiet moment with noise and unfinished tabs.', color: '#38bdf8', attack: 12 },
  { id: 'doubt', name: 'The Inner Critic', trait: 'Self-Doubt', description: 'Whispers that imperfect action is not worth attempting.', color: '#c084fc', attack: 11 },
  { id: 'excess', name: 'The Overindulgence', trait: 'Overindulgence', description: 'Offers comfort now and quietly charges interest later.', color: '#fb7185', attack: 13 },
  { id: 'avoidance', name: 'The Fog', trait: 'Avoidance', description: 'Makes the next honest conversation feel impossibly far away.', color: '#94a3b8', attack: 9 },
];

const skills: Skill[] = [
  {
    id: 'focus-strike',
    name: 'Focus Strike',
    description: 'A precise hit powered by movement and purpose.',
    power: 26,
    icon: Swords,
    requiredSlots: ['weapon', 'feet'],
  },
  {
    id: 'stillness-guard',
    name: 'Stillness Guard',
    description: 'Reduce the next incoming attack with a calm mind.',
    power: 0,
    icon: Shield,
    requiredSlots: ['head', 'accessory'],
  },
  {
    id: 'vital-surge',
    name: 'Vital Surge',
    description: 'Convert disciplined energy into a strong counterattack.',
    power: 32,
    icon: HeartPulse,
    requiredSlots: ['chest', 'weapon'],
  },
  {
    id: 'ascendant-resolve',
    name: 'Ascendant Resolve',
    description: 'A complete set turns consistency into overwhelming momentum.',
    power: 48,
    icon: Zap,
    requiredSlots: ['head', 'chest', 'weapon', 'accessory', 'feet'],
  },
];

export function BattleArena({ character, quests, onAwardXP, onClose }: BattleArenaProps) {
  const [selectedBossId, setSelectedBossId] = useState(bosses[0].id);
  const [playerHp, setPlayerHp] = useState(100);
  const [bossHp, setBossHp] = useState(100);
  const [guarding, setGuarding] = useState(false);
  const [battleLog, setBattleLog] = useState<string[]>(['Choose a bad habit to face, then select a skill.']);
  const [result, setResult] = useState<'won' | 'lost' | null>(null);

  const boss = bosses.find((item) => item.id === selectedBossId) ?? bosses[0];
  const equipped = character.equipment;
  const equippedSlots = useMemo(
    () => new Set(Object.entries(equipped).filter(([, item]) => item !== null).map(([slot]) => slot)),
    [equipped],
  );
  const unlockedSkills = skills.filter((skill) => skill.requiredSlots.every((slot) => equippedSlots.has(slot)));
  const averageStreak = quests.length
    ? Math.round(quests.reduce((total, quest) => total + quest.currentStreak, 0) / quests.length)
    : 0;

  const resetBattle = (nextBossId = selectedBossId) => {
    setSelectedBossId(nextBossId);
    setPlayerHp(100);
    setBossHp(100);
    setGuarding(false);
    setResult(null);
    setBattleLog(['The arena is ready. Make one deliberate choice at a time.']);
  };

  const useSkill = (skill: Skill) => {
    if (result) return;

    if (skill.id === 'stillness-guard') {
      setGuarding(true);
      setBattleLog((current) => [`${skill.name} is active. The next attack will be softened.`, ...current].slice(0, 4));
    } else {
      const damage = skill.power + Math.min(12, Math.floor(averageStreak / 3));
      const nextBossHp = Math.max(0, bossHp - damage);
      setBossHp(nextBossHp);
      setBattleLog((current) => [`You used ${skill.name} for ${damage} focus damage.`, ...current].slice(0, 4));
      if (nextBossHp === 0) {
        setResult('won');
        onAwardXP(50);
        return;
      }
    }

    const incomingDamage = (guarding || skill.id === 'stillness-guard')
      ? Math.ceil(boss.attack / 2)
      : boss.attack;
    const nextPlayerHp = Math.max(0, playerHp - incomingDamage);
    setPlayerHp(nextPlayerHp);
    setGuarding(false);
    setBattleLog((current) => [`${boss.name} strikes for ${incomingDamage}.`, ...current].slice(0, 4));
    if (nextPlayerHp === 0) setResult('lost');
  };

  return (
    <div className="absolute inset-0 z-[70] overflow-y-auto bg-[#070d15]/95 p-4 text-slate-100 backdrop-blur-sm sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">The Inner Arena</p>
            <h2 className="mt-2 text-3xl font-semibold">Face the habits that hold you back</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Gear combinations unlock skills. Your streaks add force. The battle is a reminder to practice, not a test of worth.
            </p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close battle arena">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Choose a boss</p>
            <div className="space-y-2">
              {bosses.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => resetBattle(item.id)}
                  className={`w-full rounded-xl border p-3 text-left transition ${item.id === boss.id ? 'border-amber-300/70 bg-amber-400/10' : 'border-slate-700 hover:border-slate-500'}`}
                >
                  <span className="block font-semibold" style={{ color: item.color }}>{item.name}</span>
                  <span className="text-xs text-slate-400">{item.trait}</span>
                </button>
              ))}
            </div>
          </aside>

          <main className="rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-4 sm:p-6">
            <div className="rounded-2xl border p-5" style={{ borderColor: `${boss.color}66`, background: `linear-gradient(135deg, ${boss.color}18, transparent)` }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em]" style={{ color: boss.color }}>{boss.trait}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{boss.name}</h3>
                  <p className="mt-2 max-w-xl text-sm text-slate-400">{boss.description}</p>
                </div>
                <div className="rounded-full border border-slate-600 p-3">
                  <Swords className="h-6 w-6" style={{ color: boss.color }} />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <HealthBar label="You" value={playerHp} color="#34d399" />
                <HealthBar label={boss.name} value={bossHp} color={boss.color} />
              </div>
            </div>

            {result ? (
              <div className="mt-5 rounded-xl border border-amber-300/40 bg-amber-300/10 p-5 text-center">
                <h3 className="text-xl font-semibold">{result === 'won' ? 'You faced the pattern.' : 'The habit pushed back.'}</h3>
                <p className="mt-2 text-sm text-slate-400">{result === 'won' ? 'Victory earns 50 XP. Return to your real-life practice and keep the momentum.' : 'A setback is information, not identity. Reset and try another approach.'}</p>
                <button type="button" onClick={() => resetBattle()} className="mt-4 rounded-lg bg-amber-300 px-4 py-2 font-semibold text-slate-950 hover:bg-amber-200">Fight again</button>
              </div>
            ) : (
              <>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {unlockedSkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <button key={skill.id} type="button" onClick={() => useSkill(skill)} className="rounded-xl border border-sky-400/30 bg-sky-400/10 p-4 text-left transition hover:border-sky-300 hover:bg-sky-400/20">
                        <span className="flex items-center gap-2 font-semibold text-sky-200"><Icon className="h-4 w-4" />{skill.name}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-400">{skill.description}</span>
                      </button>
                    );
                  })}
                </div>
                {unlockedSkills.length === 0 && <p className="mt-4 rounded-xl border border-slate-700 p-4 text-sm text-slate-400">Equip matching gear pieces in the Gear panel to unlock arena skills.</p>}
              </>
            )}

            <div className="mt-5 rounded-xl border border-slate-800 bg-black/20 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Battle log</p>
              <div className="space-y-1 text-sm text-slate-400">{battleLog.map((entry, index) => <p key={`${entry}-${index}`}>{entry}</p>)}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function HealthBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-400"><span>{label}</span><span>{value}/100</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full transition-all" style={{ width: `${value}%`, backgroundColor: color }} /></div>
    </div>
  );
}

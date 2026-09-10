import { useState } from "react";
import { ArrowLeft, Bird, CircleDot, Gamepad2, Grid3X3, Spade, Target } from "lucide-react";
import BlackjackGame from "./games/BlackjackGame";
import PongGame from "./games/PongGame";
import SnakeGame from "./games/SnakeGame";
import WebShooterGame from "./games/WebShooterGame";
import { AscensionGame } from "./ascension/AscensionGame";
import { VanekortGame } from "./games/VanekortGame";

const games = [
  { id: "ascension", title: "Ascension Archipelago", description: "Explore, reflect, and build a steadier daily practice.", icon: Bird, tone: "from-sky-500/20 to-indigo-500/20" },
  { id: "vanekort", title: "Vanekort", description: "Turn meaningful habits into a small daily quest.", icon: Spade, tone: "from-amber-500/20 to-orange-500/20" },
  { id: "blackjack", title: "Blackjack", description: "Test your luck and judgment against the dealer.", icon: CircleDot, tone: "from-emerald-500/20 to-teal-500/20" },
  { id: "pong", title: "Pong", description: "A focused arcade duel against the machine.", icon: Target, tone: "from-cyan-500/20 to-blue-500/20" },
  { id: "snake", title: "Snake", description: "Grow carefully, move deliberately, stay alive.", icon: Grid3X3, tone: "from-lime-500/20 to-green-500/20" },
  { id: "web-shooter", title: "Superhero Hand Powers", description: "Choose Spider-Man or Wolverine, then use your camera-powered ability.", icon: Gamepad2, tone: "from-rose-500/20 to-purple-500/20" },
] as const;

export default function GamesSection() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const renderGame = () => {
    switch (selectedGame) {
      case "ascension": return <AscensionGame />;
      case "vanekort": return <VanekortGame />;
      case "blackjack": return <BlackjackGame />;
      case "pong": return <PongGame />;
      case "snake": return <SnakeGame />;
      case "web-shooter": return <WebShooterGame />;
      default: return null;
    }
  };

  if (selectedGame) {
    const game = games.find((item) => item.id === selectedGame);
    return (
      <section id="games" className="py-12">
        <div className="container mx-auto px-4">
          <button
            type="button"
            onClick={() => setSelectedGame(null)}
            className="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to games
          </button>
          <h2 className="mb-2 text-3xl font-bold text-center">{game?.title}</h2>
          <p className="mb-8 text-center text-muted-foreground">{game?.description}</p>
          {renderGame()}
        </div>
      </section>
    );
  }

  return (
    <section id="games" className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <Gamepad2 className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-bold">Choose your game</h2>
          <p className="mt-3 text-muted-foreground">
            Pick a short challenge or enter Ascension Archipelago for a slower, more reflective journey.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map(({ id, title, description, icon: Icon, tone }) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedGame(id)}
              className={`group rounded-2xl border border-border bg-gradient-to-br ${tone} p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <Icon className="mb-8 h-8 w-8 text-foreground transition group-hover:scale-110" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-primary">Play now →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

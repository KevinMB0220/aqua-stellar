import { useMemo } from "react";
import BubblesBackground from "../components/common/bubbles-background";
import GameHeader from "../components/game/game-header";
import GameMenu from "../components/game/game-menu";
import AquariumStage from "../components/game/aquarium-stage";
import useBubbles from "../hooks/use-bubbles";
import useGameUiState from "../hooks/use-game-ui-state";
import type { FishInfo } from "../types/fish-types";

// Visual-only game screen showing the aquarium dashboard without backend hooks.
const GamePage = () => {
  const bubbles = useBubbles({ initialCount: 8, maxBubbles: 18, interval: 1200 });
  const {
    isMenuOpen,
    showTips,
    wallpaperMode,
    cleaningMode,
    toggleMenu,
    toggleTips,
    toggleWallpaperMode,
    toggleCleaningMode,
    closeMenu
  } = useGameUiState();

  const fishes = useMemo<FishInfo[]>(
    () => [
      {
        id: 1,
        name: "Aurora",
        description: "A calm angel fish.",
        image: "/fish/fish1.png",
        rarity: "Common",
        habitat: "Reef",
        stats: { happiness: 82, energy: 74, hunger: 28 }
      },
      {
        id: 2,
        name: "Comet",
        description: "A curious gold fish.",
        image: "/fish/fish2.png",
        rarity: "Common",
        habitat: "Freshwater",
        stats: { happiness: 76, energy: 70, hunger: 32 }
      },
      {
        id: 3,
        name: "Vortex",
        description: "A vibrant betta.",
        image: "/fish/fish3.png",
        rarity: "Rare",
        habitat: "Lagoon",
        stats: { happiness: 88, energy: 62, hunger: 26 }
      }
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#011225] text-white">
      <div className="absolute inset-0">
        <img
          src="/backgrounds/background3.png"
          alt="deep sea"
          className="h-full w-full object-cover opacity-30"
          draggable={false}
        />
      </div>
      <BubblesBackground bubbles={bubbles} className="z-10" />

      <div className="relative z-20 flex min-h-screen flex-col">
        <GameHeader onMenuToggle={toggleMenu} />

        <main className="flex flex-1 flex-col px-4 py-8 sm:px-6">
          <AquariumStage
            fishes={fishes}
            wallpaperMode={wallpaperMode}
            cleaningMode={cleaningMode}
            showTips={showTips}
          />

          <div className="mx-auto mt-8 grid w-full max-w-6xl gap-4 rounded-[1.75rem] border border-blue-400/30 bg-blue-950/70 p-6 text-sm text-blue-100/80 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              {fishes.map(fish => (
                <div
                  key={fish.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xs uppercase tracking-widest text-blue-200/70">{fish.rarity}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{fish.name}</h3>
                  <p className="mt-2 text-xs text-blue-100/80">{fish.description}</p>
                </div>
              ))}
            </div>
            <p>
              This screen mirrors the Aqua Stark game layout, including stats, menu, and aquarium
              visualization, without connecting to contracts or backend systems.
            </p>
          </div>
        </main>

        <footer className="border-t border-blue-400/30 bg-blue-950/60 px-4 py-4 text-xs text-blue-100/70 backdrop-blur">
          Prototype build · All data shown is static and for presentation only.
        </footer>
      </div>

      <GameMenu
        isOpen={isMenuOpen}
        showTips={showTips}
        wallpaperMode={wallpaperMode}
        cleaningMode={cleaningMode}
        onClose={closeMenu}
        onToggleTips={toggleTips}
        onToggleWallpaper={toggleWallpaperMode}
        onToggleCleaning={toggleCleaningMode}
      />
    </div>
  );
};

export default GamePage;


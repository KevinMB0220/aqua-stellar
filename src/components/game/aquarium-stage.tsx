import clsx from "clsx";
import type { FishInfo } from "../../types/fish-types";

interface AquariumStageProps {
  fishes: FishInfo[];
  wallpaperMode: boolean;
  cleaningMode: boolean;
  showTips: boolean;
}

// Displays the main aquarium canvas with fish sprites and optional overlays.
const AquariumStage = ({
  fishes,
  wallpaperMode,
  cleaningMode,
  showTips
}: AquariumStageProps) => (
  <div
    className={clsx(
      "relative mx-auto mt-6 flex w-full max-w-6xl flex-1 items-center justify-center rounded-[2.5rem] border border-blue-400/30 bg-blue-950/70 p-6 shadow-[0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-xl transition-all duration-500",
      wallpaperMode &&
        "wallpaper-mode fixed inset-0 z-30 m-0 max-w-none rounded-none border-none p-0"
    )}
  >
    <div className="relative h-[520px] w-full overflow-hidden rounded-[2rem] border border-blue-400/30 bg-gradient-to-b from-[#021b3a] via-[#033460] to-[#02122c]">
      <img
        src="/backgrounds/background2.png"
        alt="Aquarium background"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        draggable={false}
      />
      <div className="light-rays absolute inset-x-0 top-0 h-32 opacity-50" />

      {fishes.map(fish => (
        <div
          key={fish.id}
          className="animate-float absolute"
          style={{
            left: `${10 + fish.id * 12}%`,
            top: `${25 + (fish.id % 3) * 18}%`
          }}
        >
          <img
            src={fish.image}
            alt={fish.name}
            className="h-28 w-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
            draggable={false}
          />
        </div>
      ))}

      {cleaningMode && (
        <div className="cursor-sponge pointer-events-none absolute inset-0 bg-white/5" />
      )}

      {showTips && (
        <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-blue-900/70 px-4 py-3 text-sm text-blue-100/80">
          Tip: Drag food into the water to watch your fish chase it!
        </div>
      )}
    </div>
  </div>
);

export default AquariumStage;


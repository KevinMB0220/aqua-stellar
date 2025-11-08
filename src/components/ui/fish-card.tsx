import clsx from "clsx";
import type { MouseEventHandler } from "react";
import type { FishInfo } from "../../types/fish-types";

interface FishCardProps {
  fish: FishInfo;
  selected: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// Displays a selectable fish card for the onboarding selection step.
const FishCard = ({ fish, selected, onClick }: FishCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={clsx(
      "group relative w-full overflow-hidden rounded-3xl border-2 border-transparent bg-blue-950/60 p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-xl",
      selected && "border-cyan-300 bg-blue-900/70 shadow-2xl"
    )}
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative z-10 flex flex-col items-center gap-4">
      <img
        src={fish.image}
        alt={fish.name}
        className="h-28 w-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
        draggable={false}
      />
      <div className="w-full text-center">
        <p className="text-xs uppercase tracking-widest text-cyan-200/70">
          {fish.rarity} • {fish.habitat}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white">{fish.name}</h3>
        <p className="mt-3 text-sm text-blue-100/80">{fish.description}</p>
      </div>
      <div className="flex w-full justify-around rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-blue-100/80">
        <span>😁 {fish.stats.happiness}%</span>
        <span>⚡ {fish.stats.energy}%</span>
        <span>🍽️ {fish.stats.hunger}%</span>
      </div>
    </div>
    {selected && (
      <div className="absolute inset-0 rounded-3xl border-4 border-cyan-300/80" />
    )}
  </button>
);

export default FishCard;


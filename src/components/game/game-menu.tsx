import clsx from "clsx";
import { Sparkles, Sun, Brush } from "lucide-react";
import PrimaryButton from "../ui/primary-button";

interface GameMenuProps {
  isOpen: boolean;
  showTips: boolean;
  wallpaperMode: boolean;
  cleaningMode: boolean;
  onClose: () => void;
  onToggleTips: () => void;
  onToggleWallpaper: () => void;
  onToggleCleaning: () => void;
}

// Renders the floating menu panel with prototype toggles.
const GameMenu = ({
  isOpen,
  showTips,
  wallpaperMode,
  cleaningMode,
  onClose,
  onToggleTips,
  onToggleWallpaper,
  onToggleCleaning
}: GameMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-end bg-black/40 backdrop-blur-sm">
      <div className="relative h-full w-full max-w-sm overflow-hidden border-l border-blue-400/40 bg-blue-950/90 p-6 text-white shadow-2xl">
        <button
          type="button"
          className="absolute right-6 top-6 text-sm text-blue-100/80 hover:text-white"
          onClick={onClose}
        >
          Close
        </button>
        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Aquarium Controls</h2>
            <p className="text-sm text-blue-100/70">
              Toggle visual helpers to preview the interactive UI states.
            </p>
          </div>
          <div className="space-y-4">
            <PrimaryButton
              variant="secondary"
              className={clsx(
                "flex w-full items-center justify-between rounded-xl px-5 py-3 text-sm",
                showTips && "ring-2 ring-cyan-300"
              )}
              onClick={onToggleTips}
            >
              <span className="flex items-center gap-2">
                <Sparkles size={18} />
                Toggle Tips Overlay
              </span>
              <span>{showTips ? "ON" : "OFF"}</span>
            </PrimaryButton>

            <PrimaryButton
              variant="secondary"
              className={clsx(
                "flex w-full items-center justify-between rounded-xl px-5 py-3 text-sm",
                wallpaperMode && "ring-2 ring-emerald-300"
              )}
              onClick={onToggleWallpaper}
            >
              <span className="flex items-center gap-2">
                <Sun size={18} />
                Wallpaper Mode
              </span>
              <span>{wallpaperMode ? "ON" : "OFF"}</span>
            </PrimaryButton>

            <PrimaryButton
              variant="secondary"
              className={clsx(
                "flex w-full items-center justify-between rounded-xl px-5 py-3 text-sm",
                cleaningMode && "ring-2 ring-amber-300"
              )}
              onClick={onToggleCleaning}
            >
              <span className="flex items-center gap-2">
                <Brush size={18} />
                Cleaning Mode
              </span>
              <span>{cleaningMode ? "ON" : "OFF"}</span>
            </PrimaryButton>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100/80">
            Wallpaper mode hides UI chrome and expands the aquarium to fill the viewport.
          </div>
        </div>
        <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
    </div>
  );
};

export default GameMenu;


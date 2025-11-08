import { useState } from "react";

// Encapsulates the local UI toggles for the static game prototype.
const useGameUiState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [wallpaperMode, setWallpaperMode] = useState(false);
  const [cleaningMode, setCleaningMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(previous => !previous);
  const toggleTips = () => setShowTips(previous => !previous);
  const toggleWallpaperMode = () => setWallpaperMode(previous => !previous);
  const toggleCleaningMode = () => setCleaningMode(previous => !previous);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isMenuOpen,
    showTips,
    wallpaperMode,
    cleaningMode,
    toggleMenu,
    toggleTips,
    toggleWallpaperMode,
    toggleCleaningMode,
    closeMenu
  };
};

export default useGameUiState;


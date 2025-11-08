import { useMemo, useState } from "react";
import type { FishInfo } from "../types/fish-types";

// Provides the static onboarding fish catalogue and selection helpers.
const useOnboardingState = () => {
  const fishCatalog = useMemo<FishInfo[]>(
    () => [
      {
        id: 1,
        name: "AngelFish",
        description: "A calm and elegant fish.",
        image: "/fish/fish1.png",
        rarity: "Common",
        habitat: "Reef",
        stats: { happiness: 82, energy: 76, hunger: 24 }
      },
      {
        id: 2,
        name: "GoldFish",
        description: "A vibrant golden fish ready to explore.",
        image: "/fish/fish2.png",
        rarity: "Common",
        habitat: "Freshwater",
        stats: { happiness: 76, energy: 68, hunger: 32 }
      },
      {
        id: 3,
        name: "Betta",
        description: "A colorful fighter bursting with personality.",
        image: "/fish/fish3.png",
        rarity: "Rare",
        habitat: "Lagoon",
        stats: { happiness: 88, energy: 64, hunger: 28 }
      },
      {
        id: 4,
        name: "NeonTetra",
        description: "A bright spark that lights every aquarium.",
        image: "/fish/fish4.png",
        rarity: "Uncommon",
        habitat: "River",
        stats: { happiness: 72, energy: 70, hunger: 30 }
      },
      {
        id: 5,
        name: "Corydoras",
        description: "A peaceful guardian of the aquarium floor.",
        image: "/fish/fish5.png",
        rarity: "Uncommon",
        habitat: "Freshwater",
        stats: { happiness: 69, energy: 74, hunger: 36 }
      },
      {
        id: 6,
        name: "Hybrid",
        description: "A mysterious mix with unpredictable traits.",
        image: "/fish/fish6.png",
        rarity: "Epic",
        habitat: "Unknown",
        stats: { happiness: 91, energy: 82, hunger: 22 }
      }
    ],
    []
  );

  const [selectedFishIds, setSelectedFishIds] = useState<number[]>([]);

  const toggleFishSelection = (fishId: number) => {
    setSelectedFishIds(previous => {
      if (previous.includes(fishId)) {
        return previous.filter(id => id !== fishId);
        }
      if (previous.length >= 2) {
        return previous;
      }
      return [...previous, fishId];
    });
  };

  const resetSelection = () => setSelectedFishIds([]);

  return {
    fishCatalog,
    selectedFishIds,
    toggleFishSelection,
    resetSelection
  };
};

export default useOnboardingState;


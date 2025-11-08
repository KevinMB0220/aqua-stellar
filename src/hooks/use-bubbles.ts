import { useEffect, useState } from "react";
import type { Bubble } from "../types/bubble-types";

interface UseBubblesOptions {
  initialCount?: number;
  maxBubbles?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  interval?: number;
}

// Generates animated bubble metadata for visual backgrounds.
const useBubbles = ({
  initialCount = 25,
  maxBubbles = 40,
  minSize = 10,
  maxSize = 40,
  minDuration = 5,
  maxDuration = 20,
  interval = 300
}: UseBubblesOptions = {}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const createBubble = (idOffset = 0): Bubble => ({
      id: Date.now() + idOffset,
      size: Math.random() * (maxSize - minSize) + minSize,
      left: Math.random() * 100,
      animationDuration: Math.random() * (maxDuration - minDuration) + minDuration
    });

    const initialBubbles = Array.from({ length: initialCount }, (_, index) =>
      createBubble(index)
    );
    setBubbles(initialBubbles);

    const intervalId = window.setInterval(() => {
      setBubbles(previousBubbles => {
        const nextBubble = createBubble();
        const trimmedBubbles =
          previousBubbles.length >= maxBubbles
            ? previousBubbles.slice(previousBubbles.length - maxBubbles + 1)
            : previousBubbles;

        return [...trimmedBubbles, nextBubble];
      });
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [
    initialCount,
    maxBubbles,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
    interval
  ]);

  return bubbles;
};

export default useBubbles;


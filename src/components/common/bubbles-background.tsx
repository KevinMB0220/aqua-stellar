import clsx from "clsx";
import type { CSSProperties } from "react";
import type { Bubble } from "../../types/bubble-types";

interface BubblesBackgroundProps {
  bubbles: Bubble[];
  className?: string;
  animationName?: string;
  customStyles?: CSSProperties;
}

// Renders animated floating bubbles for ambient underwater backgrounds.
const BubblesBackground = ({
  bubbles,
  className,
  animationName = "float-up",
  customStyles
}: BubblesBackgroundProps) => (
  <div
    className={clsx(
      "absolute inset-0 pointer-events-none overflow-hidden",
      className
    )}
    style={{
      ...customStyles,
      willChange: "transform",
      transform: "translateZ(0)"
    }}
  >
    {bubbles.map(bubble => (
      <div
        key={bubble.id}
        className="absolute rounded-full backdrop-blur-[1px]"
        style={{
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          left: `${bubble.left}%`,
          bottom: "-80px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))",
          boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.3)",
          animation: `${animationName} ${bubble.animationDuration}s linear infinite`
        }}
      />
    ))}

    <style>{`
      @keyframes ${animationName} {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateY(-150vh);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

export default BubblesBackground;


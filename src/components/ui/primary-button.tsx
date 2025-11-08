import clsx from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface PrimaryButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "primary" | "secondary" | "accent";
}

// Provides a styled button used across pages with consistent gradients.
const PrimaryButton = ({
  children,
  className,
  variant = "primary",
  ...rest
}: PrimaryButtonProps) => {
  const variants = {
    primary:
      "bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-green-300",
    secondary:
      "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 border-blue-300",
    accent:
      "bg-gradient-to-b from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 border-purple-300"
  };

  return (
    <button
      className={clsx(
        "game-button rounded-xl px-6 py-3 text-white font-semibold uppercase tracking-wide shadow-xl transition-transform duration-200 border-2",
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;


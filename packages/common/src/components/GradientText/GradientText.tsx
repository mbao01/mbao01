import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { GradientTextProps } from "./types";

const GradientText = ({
  children,
  className,
  from = "oklch(0.7 0.25 250)",
  via,
  to = "oklch(0.7 0.2 330)",
  angle = 135,
  animated = false,
  ...props
}: GradientTextProps) => {
  const gradient = via
    ? `linear-gradient(${angle}deg, ${from}, ${via}, ${to})`
    : `linear-gradient(${angle}deg, ${from}, ${to})`;

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        animated && "animate-gradient bg-[length:300%_100%]",
        className
      )}
      style={{ backgroundImage: gradient } as CSSProperties}
      {...props}
    >
      {children}
    </span>
  );
};

GradientText.displayName = "GradientText";

export { GradientText };

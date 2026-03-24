import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { GlowCardProps } from "./types";

const GlowCard = ({
  children,
  className,
  gradientFrom = "oklch(0.7 0.25 250)",
  gradientVia = "oklch(0.7 0.2 330)",
  gradientTo = "oklch(0.7 0.25 150)",
  ...props
}: GlowCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl p-px transition-shadow duration-500",
        className
      )}
      {...props}
    >
      <div
        className="absolute -inset-px rounded-xl opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-100"
        style={
          {
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          } as CSSProperties
        }
        aria-hidden="true"
      />
      <div
        className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={
          {
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          } as CSSProperties
        }
        aria-hidden="true"
      />
      <div className="relative rounded-xl bg-base-100 p-6">{children}</div>
    </div>
  );
};

GlowCard.displayName = "GlowCard";

export { GlowCard };

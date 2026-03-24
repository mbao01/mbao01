import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { BorderBeamProps } from "./types";

const BorderBeam = ({
  className,
  size = 200,
  duration = 4,
  delay = 0,
  colorFrom = "oklch(0.7 0.25 250)",
  colorTo = "oklch(0.7 0.2 330)",
  ...props
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent",
        "[mask-clip:padding-box,border-box] [mask-composite:intersect]",
        "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff)]",
        "after:absolute after:aspect-square after:animate-border-beam",
        "after:bg-[linear-gradient(var(--beam-color-from),var(--beam-color-to),transparent)]",
        "after:[offset-path:rect(0_auto_auto_0_round_var(--beam-size))]",
        className
      )}
      style={
        {
          "--beam-size": `${size}px`,
          "--beam-color-from": colorFrom,
          "--beam-color-to": colorTo,
          "--tw-duration": `${duration}s`,
          animationDelay: `${delay}s`,
        } as CSSProperties
      }
      {...props}
    />
  );
};

BorderBeam.displayName = "BorderBeam";

export { BorderBeam };

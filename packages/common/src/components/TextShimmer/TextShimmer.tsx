import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { TextShimmerProps } from "./types";

const TextShimmer = ({
  children,
  className,
  duration = 2,
  spread = 2,
  ...props
}: TextShimmerProps) => {
  return (
    <p
      className={cn(
        "animate-text-gradient bg-[length:250%_100%] bg-clip-text text-transparent",
        "bg-[linear-gradient(90deg,var(--shimmer-from,currentColor)_0%,var(--shimmer-via,oklch(0.7_0.15_250))_50%,var(--shimmer-from,currentColor)_100%)]",
        className
      )}
      style={
        {
          "--shimmer-spread": spread,
          animationDuration: `${duration}s`,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </p>
  );
};

TextShimmer.displayName = "TextShimmer";

export { TextShimmer };

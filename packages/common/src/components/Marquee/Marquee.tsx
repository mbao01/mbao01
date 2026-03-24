import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { MarqueeProps } from "./types";

const Marquee = ({
  children,
  className,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gap = 16,
  ...props
}: MarqueeProps) => {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:16px]",
        pauseOnHover && "[&:hover_>_.marquee-track]:paused",
        className
      )}
      style={{ "--gap": `${gap}px` } as CSSProperties}
      {...props}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className="marquee-track flex shrink-0 animate-marquee items-center justify-around gap-[var(--gap)]"
          style={{
            animationDirection,
            animationDuration: `${speed}s`,
          }}
          aria-hidden={i === 1 ? "true" : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

Marquee.displayName = "Marquee";

export { Marquee };

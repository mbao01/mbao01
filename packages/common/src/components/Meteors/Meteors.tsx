import { useMemo } from "react";
import { cn } from "../../utilities";
import type { MeteorsProps } from "./types";

const Meteors = ({ className, count = 20, ...props }: MeteorsProps) => {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.floor(Math.random() * 3 + 2)}s`,
      })),
    [count]
  );

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} {...props}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-base-content shadow-[0_0_0_1px_oklch(1_0_0/0.1),0_0_10px_oklch(1_0_0/0.2)]"
          style={{
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        >
          <span className="pointer-events-none absolute top-1/2 -z-10 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-base-content/80 to-transparent" />
        </span>
      ))}
    </div>
  );
};

Meteors.displayName = "Meteors";

export { Meteors };

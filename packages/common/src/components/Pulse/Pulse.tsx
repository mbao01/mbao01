import { cn } from "../../utilities";
import { getPulseClasses, getPulseDotClasses, getPulseRingClasses } from "./constants";
import type { PulseProps } from "./types";

const Pulse = ({
  variant = "success",
  size = "sm",
  animated = true,
  label,
  className,
  ...props
}: PulseProps) => {
  return (
    <span className={cn(getPulseClasses({ size }), className)} {...props}>
      <span className="relative inline-flex">
        {animated && <span className={getPulseRingClasses({ variant })} />}
        <span className={getPulseDotClasses({ variant, size })} />
      </span>
      {label && <span className="text-base-content/70">{label}</span>}
    </span>
  );
};

Pulse.displayName = "Pulse";

export { Pulse };

import type { HTMLAttributes } from "react";

export type CountdownTimerProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Target date/time to count down to */
  targetDate: Date;
  /** Label to show above the timer */
  label?: string;
  /** Callback when countdown reaches zero */
  onComplete?: () => void;
  /** Whether to show seconds */
  showSeconds?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
};

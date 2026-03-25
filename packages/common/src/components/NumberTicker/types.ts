import type { HTMLAttributes } from "react";

export type NumberTickerProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** The target number to count to */
  value: number;
  /** Duration of the animation in seconds */
  duration?: number;
  /** Decimal places to show */
  decimalPlaces?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
};

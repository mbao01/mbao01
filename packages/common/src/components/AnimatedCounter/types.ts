import type { HTMLAttributes } from "react";

export type AnimatedCounterProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** Target value to display */
  value: number;
  /** Prefix (e.g. "$") */
  prefix?: string;
  /** Suffix (e.g. "%") */
  suffix?: string;
  /** Number of decimal places */
  decimalPlaces?: number;
  /** Whether to include thousand separators */
  separator?: boolean;
};

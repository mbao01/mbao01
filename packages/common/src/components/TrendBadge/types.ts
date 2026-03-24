import type { HTMLAttributes } from "react";

export type TrendBadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** The change value (positive = up, negative = down, zero = neutral) */
  value: number;
  /** Number of decimal places to display */
  decimalPlaces?: number;
  /** Whether to show the percentage sign */
  showPercent?: boolean;
  /** Whether to show the trend arrow icon */
  showIcon?: boolean;
  /** Size variant */
  size?: "xs" | "sm" | "md" | "lg";
  /** Override automatic trend direction */
  trend?: "up" | "down" | "neutral";
};

import type { HTMLAttributes } from "react";

export type ComparisonBarSegment = {
  /** Segment label */
  label: string;
  /** Segment value */
  value: number;
  /** Color (CSS color or Tailwind class) */
  color?: string;
};

export type ComparisonBarProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Segments to display */
  segments: ComparisonBarSegment[];
  /** Whether to show labels */
  showLabels?: boolean;
  /** Whether to show values */
  showValues?: boolean;
  /** Height variant */
  size?: "xs" | "sm" | "md" | "lg";
  /** Format function for values */
  formatValue?: (value: number) => string;
};

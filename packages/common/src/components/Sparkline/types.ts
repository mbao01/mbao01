import type { HTMLAttributes } from "react";

export type SparklineProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Array of numeric data points */
  data: number[];
  /** Width of the sparkline in pixels */
  width?: number;
  /** Height of the sparkline in pixels */
  height?: number;
  /** Stroke color (CSS color value) */
  color?: string;
  /** Whether to show a filled area under the line */
  filled?: boolean;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Whether to animate the line drawing */
  animated?: boolean;
};

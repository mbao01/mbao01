import type { HTMLAttributes } from "react";

export type MiniBarChartProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Array of numeric values */
  data: number[];
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Bar color */
  color?: string;
  /** Whether to highlight the last bar */
  highlightLast?: boolean;
  /** Gap between bars in pixels */
  gap?: number;
};

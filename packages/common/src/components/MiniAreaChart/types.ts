import type { HTMLAttributes } from "react";

export type MiniAreaChartProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  /** Gradient opacity at the bottom */
  gradientOpacity?: number;
  strokeWidth?: number;
};

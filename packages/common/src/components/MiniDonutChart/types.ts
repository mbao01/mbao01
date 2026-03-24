import type { HTMLAttributes, ReactNode } from "react";

export type DonutSegment = {
  value: number;
  color?: string;
  label?: string;
};

export type MiniDonutChartProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  segments: DonutSegment[];
  /** Size in pixels */
  size?: number;
  /** Ring thickness as percentage of radius (0-1) */
  thickness?: number;
  /** Center label */
  label?: ReactNode;
};

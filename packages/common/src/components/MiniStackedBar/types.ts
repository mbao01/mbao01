import type { HTMLAttributes } from "react";

export type StackedSegment = {
  value: number;
  color?: string;
  label?: string;
};

export type MiniStackedBarProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  segments: StackedSegment[];
  /** Height in pixels */
  height?: number;
  /** Whether to show percentage labels below */
  showLabels?: boolean;
};

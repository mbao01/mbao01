import type { HTMLAttributes } from "react";

export type HeatmapDataPoint = {
  date: string; // ISO date string (YYYY-MM-DD)
  value: number;
};

export type CalendarHeatmapProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Data points with date and value */
  data: HeatmapDataPoint[];
  /** Start date (defaults to 1 year ago) */
  startDate?: Date;
  /** End date (defaults to today) */
  endDate?: Date;
  /** Color scale — array of 5 colors from low to high */
  colors?: [string, string, string, string, string];
  /** Cell size in pixels */
  cellSize?: number;
  /** Gap between cells in pixels */
  cellGap?: number;
  /** Whether to show month labels */
  showMonthLabels?: boolean;
  /** Whether to show day-of-week labels */
  showDayLabels?: boolean;
  /** Tooltip formatter */
  formatTooltip?: (date: string, value: number) => string;
};

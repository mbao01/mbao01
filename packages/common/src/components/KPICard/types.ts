import type { HTMLAttributes, ReactNode } from "react";

export type KPICardProps = HTMLAttributes<HTMLDivElement> & {
  /** Card title/label */
  title: string;
  /** Primary value to display */
  value: ReactNode;
  /** Trend change percentage */
  change?: number;
  /** Description text below value */
  description?: string;
  /** Inline chart element (e.g. Sparkline, MiniBarChart, MiniAreaChart, MiniDonutChart, MiniStackedBar) */
  chart?: ReactNode;
  /** Icon to show in the card */
  icon?: ReactNode;
  /** Loading state */
  loading?: boolean;
};

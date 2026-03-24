import type { HTMLAttributes, ReactNode } from "react";

export type StatCardProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  /** Icon element rendered in the lifted badge */
  icon?: ReactNode;
  /** Stat label / title */
  title: ReactNode;
  /** Main stat value */
  value: ReactNode;
  /** Description text below the value */
  description?: ReactNode;
  /** Trend value (e.g. "+9.8%") — colored green if positive, red if negative */
  trend?: string;
  /** Description shown next to the trend */
  trendLabel?: string;
};

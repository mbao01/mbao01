import type { HTMLAttributes, ReactNode } from "react";

export type ActivityItem = {
  /** Unique identifier */
  id: string;
  /** Icon or avatar to show */
  icon?: ReactNode;
  /** Main content/description */
  content: ReactNode;
  /** Timestamp or relative time label */
  timestamp?: string;
  /** Optional metadata (e.g. amount, status) */
  meta?: ReactNode;
};

export type ActivityFeedProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** List of activity items to display */
  items: ActivityItem[];
  /** Maximum number of items to show */
  maxItems?: number;
  /** Whether to show the connecting line between items */
  showLine?: boolean;
};

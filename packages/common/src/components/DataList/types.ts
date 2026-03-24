import type { HTMLAttributes, ReactNode } from "react";

export type DataListItem = {
  label: ReactNode;
  value: ReactNode;
};

export type DataListProps = Omit<HTMLAttributes<HTMLDListElement>, "children"> & {
  /** Key-value items to display */
  items: DataListItem[];
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Whether to show dividers between items */
  dividers?: boolean;
  /** Whether to show items in a horizontal layout */
  horizontal?: boolean;
};

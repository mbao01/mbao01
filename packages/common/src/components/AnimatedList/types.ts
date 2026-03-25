import type { HTMLAttributes, ReactNode } from "react";

export type AnimatedListItem = {
  id: string;
  content: ReactNode;
};

export type AnimatedListProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Items to display */
  items: AnimatedListItem[];
  /** Maximum visible items */
  maxItems?: number;
  /** Delay between each item appearing (ms) */
  staggerDelay?: number;
};

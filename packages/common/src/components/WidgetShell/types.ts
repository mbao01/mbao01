import type { HTMLAttributes, ReactNode } from "react";

export type WidgetShellState = "loading" | "error" | "empty" | "ready";

export type WidgetShellProps = HTMLAttributes<HTMLDivElement> & {
  /** Current state of the widget */
  state?: WidgetShellState;
  /** Widget title */
  title?: ReactNode;
  /** Widget description */
  description?: ReactNode;
  /** Content to show when state is "ready" */
  children: ReactNode;
  /** Custom content for error state */
  errorContent?: ReactNode;
  /** Custom content for empty state */
  emptyContent?: ReactNode;
  /** Number of skeleton lines to show in loading state */
  skeletonLines?: number;
  /** Callback when retry is clicked in error state */
  onRetry?: () => void;
};

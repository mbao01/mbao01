import type { HTMLAttributes, ReactNode } from "react";

export type WidgetShellProps = HTMLAttributes<HTMLDivElement> & {
  /** Widget title */
  title?: ReactNode;
  /** Widget description */
  description?: ReactNode;
  /** Content rendered in the top-right of the header (e.g. actions, icons, badges) */
  action?: ReactNode;
  /** Content to show when state is "ready" */
  children: ReactNode;
  /** Custom content for error state */
  errorContent?: ReactNode;
  /** Custom content for empty state */
  emptyContent?: ReactNode;
  /** Callback when retry is clicked in error state */
  onRetry?: () => void;
};

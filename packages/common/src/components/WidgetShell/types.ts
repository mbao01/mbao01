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
};

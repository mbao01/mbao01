import type { HTMLAttributes } from "react";

export type GreetingProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** User's name */
  name: string;
  /** Optional subtitle/context line */
  subtitle?: string;
  /** Custom greeting override (bypasses time-based greeting) */
  greeting?: string;
};

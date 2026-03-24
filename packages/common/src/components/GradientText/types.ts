import type { HTMLAttributes, ReactNode } from "react";

export type GradientTextProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  /** Gradient start color */
  from?: string;
  /** Gradient middle color */
  via?: string;
  /** Gradient end color */
  to?: string;
  /** Gradient direction in degrees */
  angle?: number;
  /** Whether to animate the gradient */
  animated?: boolean;
};

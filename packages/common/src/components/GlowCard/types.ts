import type { HTMLAttributes, ReactNode } from "react";

export type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Gradient colors for the glow border */
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
};

import type { HTMLAttributes } from "react";

export type PulseProps = HTMLAttributes<HTMLSpanElement> & {
  /** Color variant */
  variant?: "success" | "error" | "warning" | "info" | "primary" | "secondary" | "accent" | "neutral";
  /** Size variant */
  size?: "xs" | "sm" | "md" | "lg";
  /** Whether to animate */
  animated?: boolean;
  /** Optional label text */
  label?: string;
};

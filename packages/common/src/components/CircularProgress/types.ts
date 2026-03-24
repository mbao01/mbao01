import type { HTMLAttributes, ReactNode } from "react";

export type CircularProgressProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /** Progress value from 0 to 100 */
  value: number;
  /** Size of the circle (CSS value) */
  size?: string;
  /** Thickness of the progress ring (CSS value) */
  thickness?: string;
  /** Color variant */
  variant?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "neutral";
  /** Whether to show the value label */
  showLabel?: boolean;
  /** Custom label to display instead of percentage */
  label?: ReactNode;
  /** Size preset */
  preset?: "xs" | "sm" | "md" | "lg" | "xl";
};

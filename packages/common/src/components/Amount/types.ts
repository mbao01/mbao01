import type { HTMLAttributes } from "react";

export type AmountProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** The numeric value to format */
  value: number;
  /** Currency code (e.g. "USD", "EUR", "GBP"). If provided, formats as currency */
  currency?: string;
  /** Locale for formatting (default: "en-US") */
  locale?: string;
  /** Notation style */
  notation?: "standard" | "compact" | "scientific" | "engineering";
  /** Minimum fraction digits */
  minimumFractionDigits?: number;
  /** Maximum fraction digits */
  maximumFractionDigits?: number;
  /** Whether to show sign for positive values */
  signDisplay?: "auto" | "never" | "always" | "exceptZero";
  /** Whether to apply trend coloring (green for positive, red for negative) */
  colored?: boolean;
};

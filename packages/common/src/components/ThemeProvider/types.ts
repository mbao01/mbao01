import type { ReactNode } from "react";

export type BrandConfig = {
  /** Brand identifier used as data-brand attribute value */
  name?: string;

  /** Custom CSS properties to apply as design tokens */
  tokens?: Record<string, string>;
};

export type ThemeProviderProps = {
  children: ReactNode;

  /** Brand configuration for whitelabeling */
  brand?: BrandConfig;

  /** Additional class names */
  className?: string;
};

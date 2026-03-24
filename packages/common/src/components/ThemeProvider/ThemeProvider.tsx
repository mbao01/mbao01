import type { CSSProperties } from "react";
import { cn } from "../../utilities";
import type { ThemeProviderProps } from "./types";

const ThemeProvider = ({ children, brand, className }: ThemeProviderProps) => {
  const style = brand?.tokens
    ? (Object.fromEntries(
        Object.entries(brand.tokens).map(([key, value]) => [
          key.startsWith("--") ? key : `--ds-${key}`,
          value,
        ])
      ) as CSSProperties)
    : undefined;

  return (
    <div
      data-brand={brand?.name}
      style={style}
      className={cn("contents", className)}
    >
      {children}
    </div>
  );
};

ThemeProvider.displayName = "ThemeProvider";

export { ThemeProvider };

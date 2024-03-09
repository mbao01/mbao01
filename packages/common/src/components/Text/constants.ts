import { cva } from "../../libs";

export const getTextClasses = cva("", {
  variants: {
    variant: {
      info: "text-info",
      error: "text-error",
      success: "text-success",
      warning: "text-warning",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      neutral: "text-neutral",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
  },
});

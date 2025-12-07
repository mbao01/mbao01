import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getTextClasses = cva("", {
  variants: createVariants({
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
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  }),
});

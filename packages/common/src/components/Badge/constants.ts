import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getBadgeClasses = cva("badge", {
  variants: createVariants({
    variant: {
      accent: "badge-accent",
      error: "badge-error",
      ghost: "badge-ghost",
      info: "badge-info",
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      success: "badge-success",
      warning: "badge-warning",
    },
    soft: {
      true: "badge-soft",
    },
    outline: {
      true: "badge-outline",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
    },
    rounded: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  }),
  defaultVariants: {
    variant: "ghost",
  },
});

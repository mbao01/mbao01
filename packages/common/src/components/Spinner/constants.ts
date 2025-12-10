import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getSpinnerClasses = cva("animate-spin", {
  variants: createVariants({
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    variant: {
      default: "text-base-content",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
      ghost: "text-base-content/50",
    },
  }),
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

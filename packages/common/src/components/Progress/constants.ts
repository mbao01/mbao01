import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getProgressClasses = cva("relative h-2 w-full overflow-hidden rounded-full", {
  variants: createVariants({
    variant: {
      accent: "bg-accent/20",
      default: "bg-base-content/20",
      error: "bg-error/20",
      ghost: "bg-ghost/20",
      info: "bg-info/20",
      neutral: "bg-neutral/20",
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
    },
  }),
  defaultVariants: {
    variant: "default",
  },
});

export const getProgressIndicatorClasses = cva("h-full w-full flex-1 transition-all", {
  variants: createVariants({
    variant: {
      accent: "bg-accent",
      default: "bg-base-content",
      error: "bg-error",
      ghost: "bg-ghost",
      info: "bg-info",
      neutral: "bg-neutral",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
    },
  }),
  defaultVariants: {
    variant: "default",
  },
});

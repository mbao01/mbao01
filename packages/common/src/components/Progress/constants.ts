import { cva } from "../../libs";

export const getProgressClasses = cva("relative h-2 w-full overflow-hidden rounded-full", {
  variants: {
    variant: {
      accent: "bg-accent/20",
      base: "bg-base-content/20",
      error: "bg-error/20",
      ghost: "bg-ghost/20",
      info: "bg-info/20",
      link: "bg-link/20",
      neutral: "bg-neutral/20",
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export const getProgressIndicatorClasses = cva("h-full w-full flex-1 transition-all", {
  variants: {
    variant: {
      accent: "bg-accent",
      base: "bg-base-content",
      error: "bg-error",
      ghost: "bg-ghost",
      info: "bg-info",
      link: "bg-link",
      neutral: "bg-neutral",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getBlockquoteClasses = cva("border-l-4 pl-4 italic", {
  variants: createVariants({
    variant: {
      default: "border-base-content/20 text-base-content/80",
      primary: "border-primary text-primary/80",
      secondary: "border-secondary text-secondary/80",
      accent: "border-accent text-accent/80",
      error: "border-error text-error/80",
      success: "border-success text-success/80",
      warning: "border-warning text-warning/80",
      ghost: "border-none text-base-content/80",
      info: "border-info text-info/80",
      neutral: "border-neutral text-neutral/80",
    },
  }),
  defaultVariants: {
    variant: "default",
  },
});

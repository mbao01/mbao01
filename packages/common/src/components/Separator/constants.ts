import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getSeparatorClasses = cva("shrink-0 bg-base-300", {
  variants: createVariants({
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
    variant: {
      accent: "bg-accent/20",
      default: "bg-base-content/10",
      error: "bg-error/20",
      ghost: "bg-ghost",
      info: "bg-info/20",
      neutral: "bg-neutral/20",
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
    },
    size: {
      xs: "h-[1px]",
      sm: "h-[2px]",
      md: "h-[3px]",
      lg: "h-[4px]",
    },
  }),
});

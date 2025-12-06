import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getStepperClasses = cva("steps w-full", {
  variants: createVariants({
    orientation: {
      horizontal: "steps-horizontal",
      vertical: "steps-vertical",
    },
  }),
  defaultVariants: {
    orientation: "horizontal",
  },
});

export const getStepClasses = cva("step", {
  variants: createVariants({
    variant: {
      primary: "step-primary",
      secondary: "step-secondary",
      accent: "step-accent",
      info: "step-info",
      success: "step-success",
      warning: "step-warning",
      error: "step-error",
      neutral: "step-neutral",
    },
  }),
});

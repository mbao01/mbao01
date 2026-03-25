import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getCircularProgressClasses = cva(
  "radial-progress transition-all duration-500",
  {
    variants: createVariants({
      variant: {
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        info: "text-info",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
        neutral: "text-neutral",
      },
      preset: {
        xs: "[--size:2rem] [--thickness:2px] text-xs",
        sm: "[--size:3rem] [--thickness:3px] text-xs",
        md: "[--size:5rem] [--thickness:4px] text-sm",
        lg: "[--size:7rem] [--thickness:5px] text-base",
        xl: "[--size:9rem] [--thickness:6px] text-lg",
      },
    }),
    defaultVariants: {
      preset: "md",
    },
  }
);

export const getCircularProgressLabelClasses = cva("font-semibold tabular-nums");

import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getPulseClasses = cva("inline-flex items-center gap-1.5", {
  variants: createVariants({
    size: {
      xs: "text-[10px]",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  }),
  defaultVariants: { size: "sm" },
});

export const getPulseDotClasses = cva("relative inline-flex rounded-full", {
  variants: createVariants({
    variant: {
      success: "bg-success",
      error: "bg-error",
      warning: "bg-warning",
      info: "bg-info",
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      neutral: "bg-neutral",
    },
    size: {
      xs: "size-1.5",
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3",
    },
  }),
  defaultVariants: { variant: "success", size: "sm" },
});

export const getPulseRingClasses = cva(
  "absolute inset-0 rounded-full animate-ping opacity-75",
  {
    variants: createVariants({
      variant: {
        success: "bg-success",
        error: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        neutral: "bg-neutral",
      },
    }),
    defaultVariants: { variant: "success" },
  }
);

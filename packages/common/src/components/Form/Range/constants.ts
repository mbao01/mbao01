import { cva } from "../../../libs";

export const getRangeClasses = cva("range", {
  variants: {
    variant: {
      primary: "range-primary",
      secondary: "range-secondary",
      accent: "range-accent",
      success: "range-success",
      warning: "range-warning",
      info: "range-info",
      error: "range-error",
      neutral: "range-neutral",
    },
    disabled: {
      true: "cursor-not-allowed opacity-80",
    },
    wide: {
      true: "w-full",
    },
    size: {
      xs: "range-xs",
      sm: "range-sm",
      md: "range-md",
      lg: "range-lg",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

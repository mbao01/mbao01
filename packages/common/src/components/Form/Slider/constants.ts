import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getSliderRootClasses = cva(
  "relative flex touch-none select-none items-center min-w-24",
  {
    variants: createVariants({
      disabled: {
        true: "cursor-not-allowed opacity-80",
      },
      wide: {
        true: "w-full",
      },
    }),
  }
);

export const getSliderTrackClasses = cva("relative h-2 w-full grow overflow-hidden rounded-full", {
  variants: createVariants({
    variant: {
      primary: "bg-neutral-content",
      secondary: "bg-neutral-content",
      accent: "bg-neutral-content",
      success: "bg-neutral-content",
      warning: "bg-neutral-content",
      info: "bg-neutral-content",
      error: "bg-neutral-content",
      neutral: "bg-base-200",
    },
    size: {
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    },
  }),
  defaultVariants: {
    variant: "neutral",
  },
});

export const getSliderClasses = cva("absolute h-full", {
  variants: createVariants({
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      success: "bg-success",
      warning: "bg-warning",
      info: "bg-info",
      error: "bg-error",
      neutral: "bg-base-content",
    },
  }),
  defaultVariants: {
    variant: "neutral",
  },
});

export const getSliderThumbClasses = cva(
  "block h-5 w-5 rounded-full border-2 ring-offset-neutral transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: createVariants({
      variant: {
        primary: "border-primary bg-base-100",
        secondary: "border-secondary bg-base-100",
        accent: "border-accent bg-base-100",
        success: "border-success bg-base-100",
        warning: "border-warning bg-base-100",
        info: "border-info bg-base-100",
        error: "border-error bg-base-100",
        neutral: "border-neutral-content bg-neutral",
      },
      size: {
        xs: "h-4 w-4",
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-7 w-7",
      },
    }),
    defaultVariants: {
      variant: "neutral",
    },
  }
);

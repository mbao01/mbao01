import { cva } from "class-variance-authority";

export const getTooltipContentClasses = cva(
  "bg-base-200 text-base-content z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        neutral: "bg-neutral text-neutral-content",
        info: "bg-info text-info-content",
        success: "bg-success text-success-content",
        warning: "bg-warning text-warning-content",
        error: "bg-error text-error-content",
      },
    },
  }
);

export const getTooltipArrowClasses = cva("fill-base-200", {
  variants: {
    variant: {
      primary: "fill-primary",
      secondary: "fill-secondary",
      accent: "fill-accent",
      neutral: "fill-neutral",
      info: "fill-info",
      success: "fill-success",
      warning: "fill-warning",
      error: "fill-error",
    },
  },
});

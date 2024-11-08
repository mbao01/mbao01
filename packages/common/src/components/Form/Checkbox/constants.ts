import { cva } from "../../../libs";

export const getCheckboxClasses = cva(
  "peer flex items-center justify-center h-6 w-6 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-base-content disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-content",
        secondary:
          "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-content",
        accent:
          "border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-content",
        success:
          "border-success data-[state=checked]:bg-success data-[state=checked]:text-success-content",
        warning:
          "border-warning data-[state=checked]:bg-warning data-[state=checked]:text-warning-content",
        info: "border-info data-[state=checked]:bg-info data-[state=checked]:text-info-content",
        error: "border-error data-[state=checked]:bg-error data-[state=checked]:text-error-content",
      },
      size: {
        xs: "h-4 w-4",
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
      rounded: {
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
  }
);

export const getCheckboxIndicatorClasses = cva("flex items-center justify-center text-current");

export const getCheckboxIconClasses = cva("h-4 w-4", {
  variants: {
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3.5 w-3.5",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
});

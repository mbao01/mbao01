import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getTrendBadgeClasses = cva(
  "inline-flex items-center gap-1 font-medium tabular-nums transition-colors duration-200",
  {
    variants: createVariants({
      trend: {
        up: "text-success",
        down: "text-error",
        neutral: "text-base-content/60",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    }),
    defaultVariants: {
      size: "sm",
    },
  }
);

export const getTrendIconClasses = cva("", {
  variants: createVariants({
    size: {
      xs: "size-3",
      sm: "size-3.5",
      md: "size-4",
      lg: "size-5",
    },
  }),
  defaultVariants: {
    size: "sm",
  },
});

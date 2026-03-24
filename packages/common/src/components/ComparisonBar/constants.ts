import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getComparisonBarTrackClasses = cva(
  "flex w-full overflow-hidden rounded-full bg-base-200",
  {
    variants: createVariants({
      size: {
        xs: "h-1.5",
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
      },
    }),
    defaultVariants: {
      size: "md",
    },
  }
);

export const getComparisonBarSegmentClasses = cva(
  "transition-all duration-500 ease-out first:rounded-l-full last:rounded-r-full"
);

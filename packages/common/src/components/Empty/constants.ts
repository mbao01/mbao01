import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getEmptyClasses = cva(
  "flex flex-col items-center justify-center text-center p-8 rounded-lg border-2 border-dashed border-base-content/20 bg-base-100/50",
  {
    variants: createVariants({
      size: {
        sm: "p-4 min-h-sm",
        md: "p-8 min-h-md",
        lg: "p-12 min-h-lg",
        xl: "p-12 min-h-xl",
      },
    }),
    compoundVariants: [
      {
        size: undefined,
        className: "p-8 h-full w-full",
      },
    ],
  }
);

export const getEmptyImageClasses = cva(
  "flex items-center justify-center w-20 h-20 rounded-full bg-base-200 mb-4 text-base-content/50"
);

export const getEmptyTitleClasses = cva("text-xl font-semibold mb-2");

export const getEmptyDescriptionClasses = cva("text-base-content/60 max-w-sm mb-6");

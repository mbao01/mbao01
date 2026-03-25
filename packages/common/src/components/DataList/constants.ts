import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getDataListClasses = cva("", {
  variants: createVariants({
    horizontal: {
      true: "flex flex-wrap gap-x-6 gap-y-2",
      false: "flex flex-col",
    },
  }),
  defaultVariants: {
    horizontal: false,
  },
});

export const getDataListItemClasses = cva(
  "flex justify-between gap-4 transition-colors duration-150",
  {
    variants: createVariants({
      size: {
        sm: "py-1.5 text-xs",
        md: "py-2.5 text-sm",
        lg: "py-3 text-base",
      },
      dividers: {
        true: "border-b border-base-200 last:border-0",
      },
      horizontal: {
        true: "flex-col gap-0.5",
      },
    }),
    defaultVariants: {
      size: "md",
      dividers: true,
    },
  }
);

export const getDataListLabelClasses = cva("text-base-content/60 shrink-0");

export const getDataListValueClasses = cva("font-medium text-right tabular-nums", {
  variants: createVariants({
    horizontal: {
      true: "text-left",
    },
  }),
});

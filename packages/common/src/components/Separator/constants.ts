import { cva } from "class-variance-authority";

export const getSeparatorClasses = cva("shrink-0 bg-base-300", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
});

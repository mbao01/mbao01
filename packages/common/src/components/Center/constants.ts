import { cva } from "../../libs";

export const getCenterClasses = cva("", {
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex",
    },
    axis: {
      horizontal: "justify-center",
      vertical: "items-center",
      both: "justify-center items-center",
    },
  },
  defaultVariants: {
    inline: false,
    axis: "both",
  },
});

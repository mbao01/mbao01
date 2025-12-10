import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getCenterClasses = cva("", {
  variants: createVariants({
    inline: {
      true: "inline-flex",
      false: "flex",
    },
    axis: {
      horizontal: "justify-center",
      vertical: "items-center",
      both: "justify-center items-center",
    },
  }),
  defaultVariants: {
    inline: false,
    axis: "both",
  },
});

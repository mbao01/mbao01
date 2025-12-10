import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getParagraphClasses = cva("", {
  variants: createVariants({
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  }),
  defaultVariants: {
    leading: "normal",
  },
});

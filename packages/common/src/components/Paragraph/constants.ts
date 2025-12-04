import { cva } from "../../libs";

export const getParagraphClasses = cva("", {
  variants: {
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    leading: "normal",
  },
});

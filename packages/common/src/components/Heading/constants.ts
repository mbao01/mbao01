import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getHeadingClasses = cva("", {
  variants: createVariants({
    level: {
      1: "text-5xl",
      2: "text-4xl",
      3: "text-3xl",
      4: "text-2xl",
      5: "text-xl",
      6: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  }),
  defaultVariants: {
    weight: "bold",
  },
});

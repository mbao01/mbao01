import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getAspectRatioClasses = cva("relative w-full overflow-hidden", {
  variants: createVariants({
    ratio: {
      "16/9": "aspect-video",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
      "21/9": "aspect-[21/9]",
      auto: "aspect-auto",
    },
  }),
  defaultVariants: {
    ratio: "16/9",
  },
});

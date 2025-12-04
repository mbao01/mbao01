import { cva } from "../../libs";

export const getAspectRatioClasses = cva("relative w-full overflow-hidden", {
  variants: {
    ratio: {
      "16/9": "aspect-video",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
      "21/9": "aspect-[21/9]",
      auto: "aspect-auto",
    },
  },
  defaultVariants: {
    ratio: "16/9",
  },
});

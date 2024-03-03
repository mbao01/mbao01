import { cva } from "../../libs";

export const getCardClasses = cva("card", {
  variants: {
    bordered: {
      true: "card-bordered",
    },
    compact: {
      true: "card-compact",
      false: "card-normal",
    },
    horizontal: {
      true: "card-side",
    },
    overlay: {
      true: "image-full",
    },
  },
  defaultVariants: {
    compact: false,
  },
});

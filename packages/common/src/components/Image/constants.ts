import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getImageClasses = cva("block max-w-full h-auto", {
  variants: createVariants({
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  }),
  defaultVariants: {
    fit: "cover",
    radius: "none",
  },
});

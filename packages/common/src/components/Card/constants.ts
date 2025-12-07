import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getCardClasses = cva("card", {
  variants: createVariants({
    border: {
      solid: "card-border",
      dash: "card-dash",
    },
    size: {
      xs: "card-xs",
      sm: "card-sm",
      md: "card-md",
      lg: "card-lg",
      xl: "card-xl",
    },
    horizontal: {
      true: "card-side",
    },
    overlay: {
      true: "image-full",
    },
  }),
});

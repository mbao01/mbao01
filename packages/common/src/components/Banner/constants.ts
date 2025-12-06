import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getBannerClasses = cva("alert alert-vertical sm:alert-horizontal", {
  variants: createVariants({
    variant: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    border: {
      solid: "alert-outline",
      dashed: "alert-dash",
      none: "alert-soft",
    },
  }),
});

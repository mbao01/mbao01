import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getAnchorClasses = cva("link transition-all", {
  variants: createVariants({
    variant: {
      accent: "link-accent",
      error: "link-error",
      info: "link-info",
      default: "text-base-content",
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      success: "link-success",
      warning: "link-warning",
    },
    hover: {
      true: "link-hover",
    },
    underline: {
      false: "no-underline",
    },
  }),
});

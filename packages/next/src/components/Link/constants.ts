import { cva } from "@mbao01/common/libs";
import { createVariants } from "@mbao01/common/utilities";

export const getLinkClasses = cva("link transition-all", {
  variants: createVariants({
    variant: {
      accent: "link-accent",
      default: "link-default",
      error: "link-error",
      info: "link-info",
      link: "link-link",
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

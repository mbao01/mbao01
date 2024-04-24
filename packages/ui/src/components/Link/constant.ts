import { cva } from "@mbao01/common/libs";

export const getLinkClasses = cva("link transition-all", {
  variants: {
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
  },
});

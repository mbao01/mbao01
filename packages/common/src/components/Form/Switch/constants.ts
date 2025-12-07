import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getSwitchClasses = cva("toggle", {
  variants: createVariants({
    variant: {
      primary: "toggle-primary",
      secondary: "toggle-secondary",
      accent: "toggle-accent",
      success: "toggle-success",
      warning: "toggle-warning",
      info: "toggle-info",
      error: "toggle-error",
    },
    size: {
      xs: "toggle-xs",
      sm: "toggle-sm",
      md: "toggle-md",
      lg: "toggle-lg",
    },
  }),
});

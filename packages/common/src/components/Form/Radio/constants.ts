import { cva } from "../../../libs";

export const getRadioClasses = cva("radio", {
  variants: {
    variant: {
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      success: "radio-success",
      warning: "radio-warning",
      info: "radio-info",
      error: "radio-error",
    },
    size: {
      xs: "radio-xs",
      sm: "radio-sm",
      md: "radio-md",
      lg: "radio-lg",
    },
  },
});

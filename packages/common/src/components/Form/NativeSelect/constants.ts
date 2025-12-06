import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getNativeSelectClasses = cva("select", {
  variants: createVariants({
    nativeOptions: {
      true: "appearance-none",
    },
    size: {
      xs: "select-xs",
      sm: "select-sm",
      md: "select-md",
      lg: "select-lg",
      xl: "select-xl",
    },
    wide: {
      true: "w-full",
    },
    outline: {
      true: "select-bordered",
    },
    variant: {
      default: "",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
      ghost: "select-ghost",
      neutral: "select-neutral",
    },
  }),
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getStatusClasses = cva("status", {
  variants: createVariants({
    variant: {
      accent: "status-accent",
      default: "",
      error: "status-error",
      ghost: "",
      info: "status-info",
      neutral: "status-neutral",
      primary: "status-primary",
      secondary: "status-secondary",
      success: "status-success",
      warning: "status-warning",
    },
    size: {
      xs: "status-xs",
      sm: "status-sm",
      md: "status-md",
      lg: "status-lg",
      xl: "status-xl",
    },
    animate: {
      bounce: "animate-bounce",
      ping: "animate-ping",
      pulse: "animate-pulse",
      spin: "animate-spin",
    },
  }),
});

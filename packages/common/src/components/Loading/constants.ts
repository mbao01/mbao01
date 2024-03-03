import { cva } from "../../helpers";

export const getLoadingClasses = cva("loading", {
  variants: {
    variant: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    color: {
      primary: "loading-primary",
      secondary: "loading-secondary",
      accent: "loading-accent",
      neutral: "loading-neutral",
      info: "loading-info",
      success: "loading-success",
      warning: "loading-warning",
      error: "loading-error",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
    },
  },
});

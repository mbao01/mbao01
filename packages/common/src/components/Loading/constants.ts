import { cva } from "../../libs";

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
    intent: {
      default: "text-base-content",
      primary: "text-primary-content",
      secondary: "text-secondary-content",
      accent: "text-accent-content",
      neutral: "text-neutral-content",
      info: "text-info-content",
      success: "text-success-content",
      warning: "text-warning-content",
      error: "text-error-content",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
    },
  },
});

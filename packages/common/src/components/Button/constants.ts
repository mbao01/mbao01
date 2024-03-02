import { cva } from "class-variance-authority";

export const getButtonClasses = cva("btn", {
  variants: {
    variant: {
      accent: "btn-accent",
      default: "btn-default",
      error: "btn-error",
      ghost: "btn-ghost",
      info: "btn-info",
      link: "btn-link",
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      warning: "btn-warning",
    },
    outline: {
      true: "btn-outline",
    },
    wide: {
      true: "btn-wide",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    isLoading: {
      true: "relative overflow-hidden",
    },
  },
  compoundVariants: [
    {
      size: undefined,
      className: "min-h-fit h-10",
    },
  ],
});

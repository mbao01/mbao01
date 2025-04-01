import { cva } from "../../libs";

export const getButtonClasses = cva("btn disabled:text-opacity-50", {
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
    rounded: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
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
    {
      rounded: undefined,
      className: "rounded-md",
    },
    {
      variant: undefined,
      outline: true,
      className: "border-neutral-content",
    },
  ],
});

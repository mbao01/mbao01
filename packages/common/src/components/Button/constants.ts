import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getButtonClasses = cva("btn", {
  variants: createVariants({
    variant: {
      accent: "btn-accent",
      default: "btn-default",
      error: "btn-error",
      ghost: "btn-ghost",
      info: "btn-info",
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      warning: "btn-warning",
    },
    outline: {
      true: "btn-outline",
    },
    link: {
      true: "btn-link",
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
    disabled: {
      true: "",
    },
  }),
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
      disabled: true,
      isLoading: true,
      className: "text-transparent",
    },
    {
      variant: undefined,
      outline: true,
      className: "border-base-content/20",
    },
  ],
});

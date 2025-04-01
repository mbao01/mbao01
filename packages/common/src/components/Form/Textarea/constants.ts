import { cva } from "../../../libs";

export const getTextareaClasses = cva("textarea rounded-md transition-all duration-100", {
  variants: {
    variant: {
      default: "bg-transparent",
      accent: "textarea-accent",
      error: "textarea-error",
      ghost: "textarea-ghost",
      info: "textarea-info",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      success: "textarea-success",
      warning: "textarea-warning",
    },
    outline: {
      false: "textarea-ghost",
    },
    wide: {
      true: "w-full",
    },
    size: {
      xs: "textarea-xs",
      sm: "textarea-sm",
      md: "textarea-md",
      lg: "textarea-lg",
    },
  },
  compoundVariants: [
    {
      size: undefined,
      className: "min-h-fit h-10",
    },
    {
      outline: undefined,
      className: "textarea-ghost",
    },
    {
      variant: undefined,
      outline: true,
      className: "border-neutral-content",
    },
    {
      variant: "default",
      outline: true,
      className: "border-base-content",
    },
  ],
});

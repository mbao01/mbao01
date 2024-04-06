import { cva } from "../../../libs";

export const getTextareaClasses = cva(
  "textarea rounded-md transition-all duration-100",
  {
    variants: {
      variant: {
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
        true: "textarea-bordered",
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
    ],
  }
);

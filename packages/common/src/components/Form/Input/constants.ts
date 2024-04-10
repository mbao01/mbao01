import { cva } from "../../../libs";

export const getInputClasses = cva(
  "input rounded-md transition-all duration-100",
  {
    variants: {
      variant: {
        accent: "input-accent",
        error: "input-error",
        ghost: "input-ghost",
        info: "input-info",
        primary: "input-primary",
        secondary: "input-secondary",
        success: "input-success",
        warning: "input-warning",
      },
      outline: {
        true: "input-bordered",
      },
      wide: {
        true: "w-full",
      },
      size: {
        xs: "input-xs",
        sm: "input-sm",
        md: "input-md",
        lg: "input-lg",
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

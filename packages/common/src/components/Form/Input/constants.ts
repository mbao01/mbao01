import { cva } from "../../../libs";

export const getInputClasses = cva("input rounded-md transition-all duration-100", {
  variants: {
    variant: {
      default: "bg-transparent",
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
    type: {
      ["file" as string]:
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:h-full",
    },
  },
  compoundVariants: [
    {
      size: undefined,
      className: "min-h-fit h-10",
    },
    {
      variant: "default",
      outline: true,
      className: "border-base-content",
    },
  ],
});

export const getFloatingLabelClasses = cva("floating-label");

export const getInputLabelClasses = cva("", {
  variants: {
    floating: {
      true: "",
      false: "label",
    },
  },
  compoundVariants: [
    {
      floating: undefined,
      className: "label",
    },
  ],
});

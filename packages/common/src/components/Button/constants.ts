import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getButtonClasses = cva(
  "btn transition-all duration-200 ease-out active:scale-[0.97]",
  {
    variants: createVariants({
      variant: {
        accent: "btn-accent shadow-sm hover:shadow-md hover:shadow-accent/20",
        default: "btn-default shadow-sm hover:shadow-md",
        error: "btn-error shadow-sm hover:shadow-md hover:shadow-error/20",
        ghost: "btn-ghost hover:bg-base-200/80",
        info: "btn-info shadow-sm hover:shadow-md hover:shadow-info/20",
        neutral: "btn-neutral shadow-sm hover:shadow-md hover:shadow-neutral/20",
        primary: "btn-primary shadow-sm hover:shadow-md hover:shadow-primary/25",
        secondary: "btn-secondary shadow-sm hover:shadow-md hover:shadow-secondary/20",
        success: "btn-success shadow-sm hover:shadow-md hover:shadow-success/20",
        warning: "btn-warning shadow-sm hover:shadow-md hover:shadow-warning/20",
      },
      outline: {
        true: "btn-outline",
      },
      link: {
        true: "btn-link !shadow-none active:scale-100",
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
  }
);

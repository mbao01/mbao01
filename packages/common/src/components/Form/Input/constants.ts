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

export const getInputCommonClasses = cva(
  `border border-base-content/20 shadow-2xs shadow-base-content/20 h-10 flex items-center justify-between w-fit px-2 rounded-md transition-all gap-1
  [&:has(input:focus)]:duration-100 [&:has(input:focus)]:outline [&:has(input:focus)]:outline-2 [&:has(input:focus)]:outline-offset-2
  [&:has(input:focus-within)]:duration-100 [&:has(input:focus-within)]:outline [&:has(input:focus-within)]:outline-2 [&:has(input:focus-within)]:outline-offset-2
   `,
  {
    variants: {
      variant: {
        default:
          "[&:has(input:focus)]:border-[currentColor] [&:has(input:focus-within)]:border-[currentColor] [&:has(input:focus)]:outline-ghost [&:has(input:focus-within)]:outline-ghost",
        accent:
          "border border-accent shadow-accent [&:has(input:focus)]:outline-accent [&:has(input:focus-within)]:outline-accent",
        error:
          "border border-error shadow-error [&:has(input:focus)]:outline-error [&:has(input:focus-within)]:outline-error",
        ghost:
          "border-0 shadow-none [&:has(input:focus)]:outline-ghost [&:has(input:focus-within)]:outline-ghost",
        info: "border border-info shadow-info [&:has(input:focus)]:outline-info [&:has(input:focus-within)]:outline-info",
        primary:
          "border border-primary shadow-primary [&:has(input:focus)]:outline-primary [&:has(input:focus-within)]:outline-primary",
        secondary:
          "border border-secondary shadow-secondary [&:has(input:focus)]:outline-secondary [&:has(input:focus-within)]:outline-secondary",
        success:
          "border border-success shadow-success [&:has(input:focus)]:outline-success [&:has(input:focus-within)]:outline-success",
        warning:
          "border border-warning shadow-warning [&:has(input:focus)]:outline-warning [&:has(input:focus-within)]:outline-warning",
      },
      outline: {
        true: "border",
      },
      disabled: {
        true: "border border-base-200 shadow-none bg-base-200",
      },
      wide: {
        true: "w-full",
      },
      size: {
        xs: "h-6 leading-relaxed text-xs px-2",
        sm: "h-8 leading-8 text-sm px-2",
        md: "h-12 leading-loose text-sm px-2",
        lg: "h-16 leading-loose text-lg px-3",
      },
    },
    compoundVariants: [
      {
        size: undefined,
        className: "min-h-fit h-10 text-sm",
      },
      {
        variant: undefined,
        outline: true,
        className: "border-base-content/20",
      },
      {
        variant: undefined,
        className:
          "[&:has(input:focus)]:border-base-content [&:has(input:focus-within)]:border-base-content",
      },
    ],
  }
);

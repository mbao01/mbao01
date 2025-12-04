import { cva } from "../../libs";

export const getContainerClasses = cva("", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
    center: {
      true: "mx-auto",
    },
    padding: {
      true: "px-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: {
    size: "xl",
    center: true,
    padding: true,
  },
});

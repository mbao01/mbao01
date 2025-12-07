import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getContainerClasses = cva("", {
  variants: createVariants({
    size: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
    center: {
      true: "mx-auto",
    },
    padding: {
      true: "px-4 sm:px-6 lg:px-8",
    },
  }),
  defaultVariants: {
    size: "xl",
    center: true,
    padding: true,
  },
  compoundVariants: [
    {
      size: undefined,
      className: "max-w-full",
    },
  ],
});

import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getHeaderClasses = cva(
  "navbar bg-base-100 border-b border-base-200 sticky top-0 z-30 w-full",
  {
    variants: createVariants({
      position: {
        static: "static",
        sticky: "sticky top-0",
        fixed: "fixed top-0 left-0 right-0",
      },
    }),
    defaultVariants: {
      position: "sticky",
    },
  }
);

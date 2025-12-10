import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getStackClasses = cva("stack", {
  variants: createVariants({
    direction: {
      start: "stack-start",
      end: "stack-end",
      top: "stack-top",
      bottom: "stack-bottom",
    },
  }),
});

import { cva } from "../../libs";

export const getStackClasses = cva("stack", {
  variants: {
    direction: {
      start: "stack-start",
      end: "stack-end",
      top: "stack-top",
      bottom: "stack-bottom",
    },
  },
});

import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getDroppableClasses = cva("relative", {
  variants: createVariants({
    isDragging: {
      true: "",
    },
    isOver: {
      true: "",
    },
    isEmpty: {
      true: "",
    },
  }),
});

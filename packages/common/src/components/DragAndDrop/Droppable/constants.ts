import { cva } from "../../../libs";

export const getDroppableClasses = cva("relative", {
  variants: {
    isDragging: {
      true: "",
    },
    isOver: {
      true: "",
    },
    isEmpty: {
      true: "",
    },
  },
});

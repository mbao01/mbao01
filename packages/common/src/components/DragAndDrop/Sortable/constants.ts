import { cva } from "../../../libs";

export const getSortableClasses = cva("", {
  variants: {
    isDragging: {
      true: "",
    },
    isSorting: {
      true: "",
    },
  },
});

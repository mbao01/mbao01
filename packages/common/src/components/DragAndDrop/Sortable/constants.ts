import { cva } from "../../../libs";
import { createVariants } from "../../../utilities";

export const getSortableClasses = cva("", {
  variants: createVariants({
    isDragging: {
      true: "",
    },
    isSorting: {
      true: "",
    },
  }),
});

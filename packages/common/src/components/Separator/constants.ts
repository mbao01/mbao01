import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getSeparatorClasses = cva("shrink-0 bg-base-300", {
  variants: createVariants({
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  }),
});

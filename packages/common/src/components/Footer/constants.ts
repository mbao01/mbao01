import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getFooterClasses = cva("footer p-10 bg-base-200 text-base-content", {
  variants: createVariants({
    center: {
      true: "footer-center",
    },
  }),
});

export const getFooterTitleClasses = cva("footer-title");

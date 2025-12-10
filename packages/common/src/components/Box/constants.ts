import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getBoxClasses = cva("", {
  variants: createVariants({
    display: {
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
      flex: "flex",
      "inline-flex": "inline-flex",
      grid: "grid",
      "inline-grid": "inline-grid",
      hidden: "hidden",
    },
    position: {
      static: "static",
      fixed: "fixed",
      absolute: "absolute",
      relative: "relative",
      sticky: "sticky",
    },
    overflow: {
      auto: "overflow-auto",
      hidden: "overflow-hidden",
      visible: "overflow-visible",
      scroll: "overflow-scroll",
      "x-auto": "overflow-x-auto",
      "y-auto": "overflow-y-auto",
      "x-hidden": "overflow-x-hidden",
      "y-hidden": "overflow-y-hidden",
    },
  }),
});

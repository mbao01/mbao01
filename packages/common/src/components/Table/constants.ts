import { cva } from "../../libs";

export const getTableClasses = cva("table", {
  variants: {
    caption: {
      top: "caption-top",
      bottom: "caption-bottom",
    },
    zebra: {
      true: "table-zebra",
    },
    pinRow: {
      true: "table-pin-rows",
    },
    pinColumn: {
      true: "table-pin-cols",
    },
    size: {
      xs: "table-xs",
      sm: "table-sm",
      md: "table-md",
      lg: "table-lg",
    },
  },
});

export const getTableHeaderClasses = cva("[&_tr]:border-b");

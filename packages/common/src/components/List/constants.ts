import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const getListClasses = cva("list");

export const getListItemClasses = cva("list-row");

export const getListColumnClasses = cva("", {
  variants: createVariants({
    flex: {
      grow: "list-col-grow",
      wrap: "list-col-grow",
    },
  }),
});

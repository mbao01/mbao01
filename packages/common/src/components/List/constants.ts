import { cva } from "../../libs";

export const getListClasses = cva("list");

export const getListItemClasses = cva("list-row");

export const getListColumnClasses = cva("", {
  variants: {
    flex: {
      grow: "list-col-grow",
      wrap: "list-col-grow",
    },
  },
});

import React from "react";
import { type VariantProps } from "../../libs";
import { getListClasses, getListColumnClasses, getListItemClasses } from "./constants";

export type ListProps = React.HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof getListClasses>;

export type ListItemProps = React.HTMLAttributes<HTMLLIElement> &
  VariantProps<typeof getListItemClasses>;

export type ListColumnProps = React.HTMLAttributes<HTMLLIElement> &
  VariantProps<typeof getListColumnClasses>;

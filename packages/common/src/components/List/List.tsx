import { Slot } from "@radix-ui/react-slot";
import type { ListColumnProps, ListItemProps, ListProps } from "./types";
import { cn } from "../../utilities";
import { getListClasses, getListColumnClasses, getListItemClasses } from "./constants";

const List = ({ className, children, ...props }: ListProps) => (
  <ul className={cn(getListClasses(), className)} {...props}>
    {children}
  </ul>
);

const ListItem = ({ className, children, ...props }: ListItemProps) => (
  <li className={cn(getListItemClasses(), className)} {...props}>
    {children}
  </li>
);

const ListColumn = ({ flex, className, children, ...props }: ListColumnProps) => {
  const SlotChild = ["string", "number", "boolean", "undefined"].includes(typeof children) ? (
    <span>{children}</span>
  ) : (
    children
  );

  return (
    <Slot className={cn(getListColumnClasses({ flex }), className)} {...props}>
      {SlotChild}
    </Slot>
  );
};

List.Item = ListItem;
List.Column = ListColumn;

export { List };

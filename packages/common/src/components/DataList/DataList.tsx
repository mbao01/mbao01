import { cn } from "../../utilities";
import {
  getDataListClasses,
  getDataListItemClasses,
  getDataListLabelClasses,
  getDataListValueClasses,
} from "./constants";
import type { DataListProps } from "./types";

const DataList = ({
  items,
  className,
  size = "md",
  dividers = true,
  horizontal = false,
  ...props
}: DataListProps) => {
  return (
    <dl className={cn(getDataListClasses({ horizontal }), className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className={getDataListItemClasses({ size, dividers, horizontal })}>
          <dt className={getDataListLabelClasses()}>{item.label}</dt>
          <dd className={getDataListValueClasses({ horizontal })}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

DataList.displayName = "DataList";

export { DataList };

import { type VariantProps } from "../../libs";
import { getGridClasses, getGridItemClasses } from "./constants";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getGridClasses>;

export type GridItemProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getGridItemClasses>;

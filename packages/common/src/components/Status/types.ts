import { type VariantProps } from "../../libs";
import { getStatusClasses } from "./constants";

export type StatusProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> &
  VariantProps<typeof getStatusClasses>;

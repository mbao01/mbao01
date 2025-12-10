import { type VariantProps } from "../../libs";
import { getEmptyClasses } from "./constants";

export type EmptyProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getEmptyClasses>;

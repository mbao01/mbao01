import { type VariantProps } from "../../libs";
import { getLoadingClasses } from "./constants";

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getLoadingClasses>;

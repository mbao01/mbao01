import { type VariantProps } from "../../helpers";
import { getLoadingClasses } from "./constants";

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getLoadingClasses>;

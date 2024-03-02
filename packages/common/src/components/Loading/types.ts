import { type VariantProps } from "class-variance-authority";
import { getLoadingClasses } from "./constants";

export type LoadingProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getLoadingClasses>;

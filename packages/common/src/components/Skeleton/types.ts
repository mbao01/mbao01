import { type VariantProps } from "../../libs";
import { getSkeletonClasses } from "./constants";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getSkeletonClasses>;

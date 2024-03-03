import { VariantProps } from "../../helpers";
import { getSkeletonClasses } from "./constants";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getSkeletonClasses>;

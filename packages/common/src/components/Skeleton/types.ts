import { VariantProps } from "class-variance-authority";
import { getSkeletonClasses } from "./constants";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getSkeletonClasses>;

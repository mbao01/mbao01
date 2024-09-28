import { cn } from "../../utilities";
import { getSkeletonClasses } from "./constants";
import { type SkeletonProps } from "./types";

export const Skeleton = ({ round, width, height, variant, className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(getSkeletonClasses({ width, height, round, variant }), className)}
      {...props}
    />
  );
};

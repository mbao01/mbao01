import { type SkeletonProps } from "./types";
import { getSkeletonClasses } from "./constants";
import { cn } from "../../helpers";

export const Skeleton = ({
  round,
  width,
  height,
  variant,
  className,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        getSkeletonClasses({ width, height, round, variant }),
        className
      )}
      {...props}
    />
  );
};

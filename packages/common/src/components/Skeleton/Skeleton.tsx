import c from "clsx";
import { type SkeletonProps } from "./types";
import { getSkeletonSize } from "./constants";

export const Skeleton = ({
  className,
  round,
  width,
  height,
  ...props
}: SkeletonProps) => {
  return (
    <div
      {...props}
      className={c(
        "skeleton",
        getSkeletonSize({ width, height }),
        {
          "rounded-md": !round,
          "rounded-full": round,
        },
        className
      )}
    />
  );
};

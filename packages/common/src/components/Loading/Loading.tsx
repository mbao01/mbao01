import { getLoadingClasses } from "./constants";
import { type LoadingProps } from "./types";
import { cn } from "../../utilities";

export const Loading = ({
  size,
  color,
  variant,
  className,
  ...props
}: LoadingProps) => {
  return (
    <span
      className={cn(getLoadingClasses({ color, size, variant }), className)}
      {...props}
    />
  );
};

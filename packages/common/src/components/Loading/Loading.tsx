import { cn } from "../../utilities";
import { getLoadingClasses } from "./constants";
import { type LoadingProps } from "./types";

export const Loading = ({ size, intent, variant, className, ...props }: LoadingProps) => {
  return (
    <span className={cn(getLoadingClasses({ intent, size, variant }), className)} {...props} />
  );
};

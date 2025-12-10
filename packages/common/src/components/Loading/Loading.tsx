import { cn } from "../../utilities";
import { getLoadingClasses } from "./constants";
import { type LoadingProps } from "./types";

export const Loading = ({ size, variant, type, className, ...props }: LoadingProps) => {
  return <span className={cn(getLoadingClasses({ size, variant, type }), className)} {...props} />;
};

import type { StatusProps } from "./types";
import { cn } from "../../utilities";
import { getStatusClasses } from "./constants";

export const Status = ({ animate, variant, size, className, ...props }: StatusProps) => (
  <span className={cn(getStatusClasses({ animate, variant, size }), className)} {...props} />
);

import type { StackProps } from "./types";
import { cn } from "../../utilities";
import { getStackClasses } from "./constants";

export const Stack = ({ className, children, direction, ...props }: StackProps) => {
  return (
    <div className={cn(getStackClasses({ direction }), className)} {...props}>
      {children}
    </div>
  );
};

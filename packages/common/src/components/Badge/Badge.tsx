import { cn } from "../../utilities";
import { getBadgeClasses } from "./constants";
import { type BadgeProps } from "./types";

export const Badge = ({ size, outline, rounded, variant, className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(getBadgeClasses({ size, variant, outline, rounded }), className)}
      {...props}
    />
  );
};

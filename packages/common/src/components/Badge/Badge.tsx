import { cn } from "../../utilities";
import { getBadgeClasses } from "./constants";
import { type BadgeProps } from "./types";

export const Badge = ({
  size,
  outline,
  rounded,
  variant,
  soft,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(getBadgeClasses({ size, variant, outline, rounded, soft }), className)}
      {...props}
    />
  );
};

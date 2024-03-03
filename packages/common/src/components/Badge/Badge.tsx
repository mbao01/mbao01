import { cn } from "../../utilities";
import { getBadgeClasses } from "./constants";
import { type BadgeProps } from "./types";

export const Badge = ({
  size,
  outline,
  variant,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(getBadgeClasses({ size, variant, outline }), className)}
      {...props}
    />
  );
};

import c from "clsx";
import { getBadgeClasses } from "./constants";
import { type BadgeProps } from "./types";
import "../../tailwind.css"; // replace with the name of your tailwind css file

export const Badge = ({
  size,
  outline,
  variant = "ghost",
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      {...props}
      className={c(
        getBadgeClasses({ size, variant }),
        {
          "badge-outline": outline,
          "text-base-200": !["ghost", "neutral"].includes(variant),
        },
        className
      )}
    >
      {children}
    </span>
  );
};

import c from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { getLinkClasses } from "./constant";
import { type LinkProps } from "./types";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const Link = ({
  href,
  hover,
  target,
  variant,
  children,
  className,
  ...props
}: LinkProps) => {
  return (
    <RouterLink
      {...props}
      to={href}
      className={c(getLinkClasses({ hover, variant }), className)}
    >
      {children}
      {target === "_blank" && (
        <ArrowUpRightIcon
          name="external"
          className="ml-[2px] inline h-4 w-4 align-middle"
        />
      )}
    </RouterLink>
  );
};

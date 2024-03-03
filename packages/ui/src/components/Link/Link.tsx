import { Link as RouterLink } from "react-router-dom";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { cn } from "@mbao01/common/helpers";
import { type LinkProps } from "./types";
import { getLinkClasses } from "./constant";

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
      to={href}
      target={target}
      className={cn(getLinkClasses({ hover, variant }), className)}
      {...props}
    >
      {children}
      {target === "_blank" && (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      )}
    </RouterLink>
  );
};

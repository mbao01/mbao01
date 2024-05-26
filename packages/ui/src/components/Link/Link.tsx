import { Link as RouterLink } from "react-router-dom";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Anchor } from "@mbao01/common";
import { cn } from "@mbao01/common/utilities";
import { type LinkProps } from "./types";
import { getLinkClasses } from "./constant";

export const Link = ({
  href,
  hover,
  target,
  variant,
  children,
  className,
  underline = false,
  isExternal,
  isInternal = true,
  ...props
}: LinkProps) => {
  if (!isInternal)
    return (
      <Anchor
        href={href as string}
        target={target}
        hover={hover}
        variant={variant}
        className={className}
        underline={underline}
        isExternal={isExternal}
        {...props}
      >
        {children}
      </Anchor>
    );

  return (
    <RouterLink
      to={href}
      target={target}
      className={cn(getLinkClasses({ hover, variant, underline }), className)}
      {...props}
      {...(isExternal && { rel: "noopener noreferrer" })}
    >
      {children}
      {isExternal ? (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      ) : null}
    </RouterLink>
  );
};

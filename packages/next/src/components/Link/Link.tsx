import NextLink from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Anchor } from "@mbao01/common";
import { cn } from "@mbao01/common/utilities";
import { type LinkProps } from "./types";
import { getLinkClasses } from "./constant";

export const Link = <T,>({
  href,
  hover,
  target,
  variant,
  children,
  className,
  underline = false,
  isExternal = false,
  isInternal = true,
  ...props
}: LinkProps<T>) => {
  if (isInternal === false) {
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
  }

  return (
    <NextLink
      href={href as Omit<LinkProps<T>["href"], string>}
      target={target}
      className={cn(getLinkClasses({ hover, variant, underline }), className)}
      {...props}
      {...(isExternal && { rel: "noopener noreferrer" })}
    >
      {children}
      {isExternal ? (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      ) : null}
    </NextLink>
  );
};

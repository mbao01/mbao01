import NextLink from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
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
  ...props
}: LinkProps<T>) => {
  const isExternal = target === "_blank";
  return (
    <NextLink
      href={href}
      target={target}
      className={cn(getLinkClasses({ hover, variant, underline }), className)}
      {...props}
      {...(isExternal && { rel: "noopener noreferrer" })}
    >
      {children}
      {isExternal && (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      )}
    </NextLink>
  );
};

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
  ...props
}: LinkProps<T>) => {
  return (
    <NextLink
      href={href}
      target={target}
      className={cn(getLinkClasses({ hover, variant }), className)}
      {...props}
    >
      {children}
      {target === "_blank" && (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      )}
    </NextLink>
  );
};

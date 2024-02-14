import c from "clsx";
import NextLink from "next/link";
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
    <NextLink
      {...props}
      href={href}
      className={c(getLinkClasses({ hover, variant }), className)}
    >
      {children}
      {target === "_blank" && (
        <ArrowUpRightIcon
          name="external"
          className="ml-[2px] inline h-4 w-4 align-middle"
        />
      )}
    </NextLink>
  );
};

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { cn } from "../../utilities";
import { getAnchorClasses } from "./constant";
import { type AnchorProps } from "./types";

export const Anchor = ({
  href,
  hover,
  variant,
  children,
  className,
  underline = false,
  isExternal = false,
  ...props
}: AnchorProps) => {
  return (
    <a
      href={href}
      className={cn(getAnchorClasses({ hover, variant, underline }), className)}
      {...props}
      {...(isExternal && { rel: "noopener noreferrer" })}
    >
      {children}
      {isExternal ? <ExternalLinkIcon name="external" className="ml-[2px] inline" /> : null}
    </a>
  );
};

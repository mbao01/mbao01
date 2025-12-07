import { ExternalLinkIcon } from "lucide-react";
import { cn } from "../../utilities";
import { getAnchorClasses } from "./constants";
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
      {isExternal ? <ExternalLinkIcon name="external" className="ml-[2px] inline w-4 h-4" /> : null}
    </a>
  );
};

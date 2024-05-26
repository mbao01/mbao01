import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { type AnchorProps } from "./types";
import { getAnchorClasses } from "./constant";
import { cn } from "../../utilities";

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
      {isExternal ? (
        <ExternalLinkIcon name="external" className="ml-[2px] inline" />
      ) : null}
    </a>
  );
};

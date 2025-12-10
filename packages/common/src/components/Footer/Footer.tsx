import React from "react";
import { cn } from "../../utilities";
import { getFooterClasses, getFooterTitleClasses } from "./constants";
import { type FooterProps, type FooterTitleProps } from "./types";

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, center, children, ...props }, ref) => {
    return (
      <footer ref={ref} className={cn(getFooterClasses({ center }), className)} {...props}>
        {children}
      </footer>
    );
  }
);
Footer.displayName = "Footer";

export const FooterTitle = React.forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(getFooterTitleClasses(), className)} {...props}>
        {children}
      </span>
    );
  }
);
FooterTitle.displayName = "FooterTitle";

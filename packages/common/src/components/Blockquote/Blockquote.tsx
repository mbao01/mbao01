import React from "react";
import { cn } from "../../utilities";
import { getBlockquoteClasses } from "./constants";
import { type BlockquoteProps } from "./types";

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, variant, cite, children, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        cite={cite}
        className={cn(getBlockquoteClasses({ variant }), className)}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = "Blockquote";

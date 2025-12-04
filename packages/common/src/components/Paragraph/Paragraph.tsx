import React from "react";
import { cn } from "../../utilities";
import { Text } from "../Text";
import { getParagraphClasses } from "./constants";
import { type ParagraphProps } from "./types";

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, leading, children, ...props }, ref) => {
    return (
      <Text as="p" ref={ref} className={cn(getParagraphClasses({ leading }), className)} {...props}>
        {children}
      </Text>
    );
  }
);

Paragraph.displayName = "Paragraph";

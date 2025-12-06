import React from "react";
import { cn } from "../../utilities";
import { getHeadingClasses } from "./constants";
import { type HeadingProps } from "./types";

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, weight, as, children, ...props }, ref) => {
    // Determine the element from 'as' prop or 'level' prop, default to h2
    const Component = (as ?? (level ? `h${level}` : "h2")) as React.ElementType;

    return (
      <Component
        ref={ref}
        className={cn(getHeadingClasses({ level, weight }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

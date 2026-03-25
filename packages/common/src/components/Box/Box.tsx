import React from "react";
import { cn } from "../../utilities";
import { getBoxClasses } from "./constants";
import { type BoxProps } from "./types";

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    { className, style, display, position, overflow, rounded, padding, shadow, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          getBoxClasses({ style, display, position, overflow, rounded, padding, shadow }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

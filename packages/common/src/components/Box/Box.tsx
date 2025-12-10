import React from "react";
import { cn } from "../../utilities";
import { getBoxClasses } from "./constants";
import { type BoxProps } from "./types";

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, display, position, overflow, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(getBoxClasses({ display, position, overflow }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

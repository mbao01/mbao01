import React from "react";
import { cn } from "../../utilities";
import { getFlexClasses } from "./constants";
import { type FlexProps } from "./types";

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction, align, justify, wrap, gap, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(getFlexClasses({ direction, align, justify, wrap, gap }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

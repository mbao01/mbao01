import React from "react";
import { cn } from "../../utilities";
import { getCenterClasses } from "./constants";
import { type CenterProps } from "./types";

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, inline, axis, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getCenterClasses({ inline, axis }), className)} {...props}>
        {children}
      </div>
    );
  }
);

Center.displayName = "Center";

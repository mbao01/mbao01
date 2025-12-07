import React from "react";
import { cn } from "../../utilities";
import { getSpacerClasses } from "./constants";
import { type SpacerProps } from "./types";

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, axis, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(getSpacerClasses({ axis, gap }), className)}
        {...props}
      />
    );
  }
);

Spacer.displayName = "Spacer";

import React from "react";
import { cn } from "../../utilities";
import { getSpacerClasses } from "./constants";
import { type SpacerProps } from "./types";

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, axis, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(getSpacerClasses({ axis, size }), className)}
        {...props}
      />
    );
  }
);

Spacer.displayName = "Spacer";

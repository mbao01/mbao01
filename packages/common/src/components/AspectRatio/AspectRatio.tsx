import React from "react";
import { cn } from "../../utilities";
import { getAspectRatioClasses } from "./constants";
import { type AspectRatioProps } from "./types";

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio, value, style, children, ...props }, ref) => {
    const computedStyle = value ? { aspectRatio: `${value}` } : {};

    return (
      <div
        ref={ref}
        className={cn(getAspectRatioClasses({ ratio: value ? undefined : ratio }), className)}
        style={{ ...computedStyle, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";

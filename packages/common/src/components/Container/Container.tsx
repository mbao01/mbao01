import React from "react";
import { cn } from "../../utilities";
import { getContainerClasses } from "./constants";
import { type ContainerProps } from "./types";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, center, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(getContainerClasses({ size, center, padding }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

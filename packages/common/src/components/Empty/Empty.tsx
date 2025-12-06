import React from "react";
import { cn } from "../../utilities";
import {
  getEmptyClasses,
  getEmptyDescriptionClasses,
  getEmptyImageClasses,
  getEmptyTitleClasses,
} from "./constants";
import { type EmptyProps } from "./types";

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getEmptyClasses({ size }), className)} {...props}>
        {children}
      </div>
    );
  }
);
Empty.displayName = "Empty";

export const EmptyImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getEmptyImageClasses(), className)} {...props}>
        {children}
      </div>
    );
  }
);
EmptyImage.displayName = "EmptyImage";

export const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn(getEmptyTitleClasses(), className)} {...props}>
      {children}
    </h3>
  );
});
EmptyTitle.displayName = "EmptyTitle";

export const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn(getEmptyDescriptionClasses(), className)} {...props}>
      {children}
    </p>
  );
});
EmptyDescription.displayName = "EmptyDescription";

export const EmptyActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
        {children}
      </div>
    );
  }
);
EmptyActions.displayName = "EmptyActions";

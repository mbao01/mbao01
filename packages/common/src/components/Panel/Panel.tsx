import React from "react";
import { cn } from "../../utilities";
import {
  getPanelClasses,
  getPanelContentClasses,
  getPanelFooterClasses,
  getPanelHeaderClasses,
} from "./constants";
import {
  type PanelContentProps,
  type PanelFooterProps,
  type PanelHeaderProps,
  type PanelProps,
} from "./types";

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, width, collapsed, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getPanelClasses({ width, collapsed }), className)} {...props}>
        {children}
      </div>
    );
  }
);
Panel.displayName = "Panel";

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getPanelHeaderClasses(), className)} {...props}>
        {children}
      </div>
    );
  }
);
PanelHeader.displayName = "PanelHeader";

export const PanelContent = React.forwardRef<HTMLDivElement, PanelContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getPanelContentClasses(), className)} {...props}>
        {children}
      </div>
    );
  }
);
PanelContent.displayName = "PanelContent";

export const PanelFooter = React.forwardRef<HTMLDivElement, PanelFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(getPanelFooterClasses(), className)} {...props}>
        {children}
      </div>
    );
  }
);
PanelFooter.displayName = "PanelFooter";

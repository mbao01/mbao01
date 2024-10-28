import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import type {
  SidebarGroupActionProps,
  SidebarGroupContentProps,
  SidebarGroupLabelProps,
  SidebarGroupProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getSidebarGroupActionClasses,
  getSidebarGroupClasses,
  getSidebarGroupContentClasses,
  getSidebarGroupLabelClasses,
} from "./constants";

const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => {
  return (
    <div data-sidebar="group" className={cn(getSidebarGroupClasses(), className)} {...props} />
  );
};
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = forwardRef<HTMLDivElement, SidebarGroupLabelProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(getSidebarGroupLabelClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = forwardRef<HTMLButtonElement, SidebarGroupActionProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(getSidebarGroupActionClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = forwardRef<HTMLDivElement, SidebarGroupContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn(getSidebarGroupContentClasses(), className)}
      {...props}
    />
  )
);
SidebarGroupContent.displayName = "SidebarGroupContent";

SidebarGroup.Action = SidebarGroupAction;
SidebarGroup.Content = SidebarGroupContent;
SidebarGroup.Label = SidebarGroupLabel;

export { SidebarGroup };

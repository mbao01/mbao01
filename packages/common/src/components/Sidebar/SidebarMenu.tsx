"use client";

import type { CSSProperties } from "react";
import { forwardRef, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";
import type {
  SidebarMenuActionProps,
  SidebarMenuBadgeProps,
  SidebarMenuButtonProps,
  SidebarMenuItemProps,
  SidebarMenuProps,
  SidebarMenuSkeletonProps,
  SidebarMenuSubButtonProps,
  SidebarMenuSubItemProps,
  SidebarMenuSubProps,
} from "./types";
import { cn } from "../../utilities";
import { Skeleton } from "../Skeleton";
import { Tooltip } from "../Tooltip";
import {
  getSidebarMenuActionClasses,
  getSidebarMenuBadgeClasses,
  getSidebarMenuButtonClasses,
  getSidebarMenuClasses,
  getSidebarMenuItemClasses,
  getSidebarMenuSkeletonClasses,
  getSidebarMenuSubClasses,
  getSidebarMenuSubItemClasses,
} from "./constants";
import { useSidebar } from "./hooks";

const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => (
  <ul data-sidebar="menu" className={cn(getSidebarMenuClasses(), className)} {...props} />
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn(getSidebarMenuItemClasses(), className)}
      {...props}
    />
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(getSidebarMenuButtonClasses({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = forwardRef<HTMLButtonElement, SidebarMenuActionProps>(
  ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-action"
        className={cn(getSidebarMenuActionClasses({ showOnHover }), className)}
        {...props}
      />
    );
  }
);
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = forwardRef<HTMLDivElement, SidebarMenuBadgeProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(getSidebarMenuBadgeClasses(), className)}
      {...props}
    />
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = forwardRef<HTMLDivElement, SidebarMenuSkeletonProps>(
  ({ className, showIcon = false, ...props }, ref) => {
    // Random width between 50 to 90%.
    const width = useMemo(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);

    return (
      <div
        ref={ref}
        data-sidebar="menu-skeleton"
        className={cn(getSidebarMenuSkeletonClasses(), className)}
        {...props}
      >
        {showIcon && (
          <Skeleton width={4} height={4} className="rounded-md" data-sidebar="menu-skeleton-icon" />
        )}
        <Skeleton
          className="h-4 flex-1 max-w-[--skeleton-width]"
          data-sidebar="menu-skeleton-text"
          style={
            {
              "--skeleton-width": width,
            } as CSSProperties
          }
        />
      </div>
    );
  }
);
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = forwardRef<HTMLUListElement, SidebarMenuSubProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(getSidebarMenuSubClasses(), className)}
      {...props}
    />
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = forwardRef<HTMLLIElement, SidebarMenuSubItemProps>(
  ({ ...props }, ref) => <li ref={ref} {...props} />
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = forwardRef<HTMLAnchorElement, SidebarMenuSubButtonProps>(
  ({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-sub-button"
        data-size={size}
        data-active={isActive}
        className={cn(getSidebarMenuSubItemClasses({ size }), className)}
        {...props}
      />
    );
  }
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

SidebarMenu.Item = SidebarMenuItem;
SidebarMenu.Button = SidebarMenuButton;
SidebarMenu.Action = SidebarMenuAction;
SidebarMenu.Badge = SidebarMenuBadge;
SidebarMenu.Skeleton = SidebarMenuSkeleton;
SidebarMenu.Sub = SidebarMenuSub;
SidebarMenu.SubItem = SidebarMenuSubItem;
SidebarMenu.SubButton = SidebarMenuSubButton;

export { SidebarMenu };

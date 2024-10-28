import type { TooltipProviderProps } from "@radix-ui/react-tooltip";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "../../libs";
import type { TooltipContentProps } from "../Tooltip/types";
import { getSidebarMenuButtonClasses } from "./constants";

export type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

export type SidebarProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    side: "left" | "right";
    variant: "sidebar" | "floating" | "inset";
    collapsible: "offcanvas" | "icon" | "none";
  }>;

export type SidebarProviderProps = HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  tooltipProvider?: TooltipProviderProps;
};

export type SidebarGroupProps = HTMLAttributes<HTMLDivElement>;

export type SidebarGroupLabelProps = HTMLAttributes<HTMLDivElement> & Partial<{ asChild: boolean }>;

export type SidebarGroupActionProps = HTMLAttributes<HTMLButtonElement> &
  Partial<{ asChild: boolean }>;

export type SidebarGroupContentProps = HTMLAttributes<HTMLDivElement>;

export type SidebarMenuProps = HTMLAttributes<HTMLUListElement>;

export type SidebarMenuItemProps = HTMLAttributes<HTMLLIElement>;

export type SidebarMenuButtonProps = HTMLAttributes<HTMLButtonElement> &
  Partial<{
    asChild: boolean;
    isActive: boolean;
    tooltip: string | TooltipContentProps;
  }> &
  VariantProps<typeof getSidebarMenuButtonClasses>;

export type SidebarMenuActionProps = HTMLAttributes<HTMLButtonElement> &
  Partial<{
    asChild: boolean;
    showOnHover: boolean;
  }>;

export type SidebarMenuBadgeProps = HTMLAttributes<HTMLDivElement>;

export type SidebarMenuSkeletonProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    showIcon: boolean;
  }>;

export type SidebarMenuSubProps = HTMLAttributes<HTMLUListElement>;

export type SidebarMenuSubItemProps = HTMLAttributes<HTMLLIElement>;

export type SidebarMenuSubButtonProps = HTMLAttributes<HTMLAnchorElement> &
  Partial<{
    asChild: boolean;
    size: "sm" | "md";
    isActive: boolean;
  }>;

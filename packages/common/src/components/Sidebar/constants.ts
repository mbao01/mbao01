import { cva } from "../../libs";
import { createVariants } from "../../utilities";

export const SIDEBAR_COOKIE_NAME = "sidebar:state";

export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export const SIDEBAR_WIDTH = "16rem";

export const SIDEBAR_WIDTH_MOBILE = "18rem";

export const SIDEBAR_WIDTH_ICON = "3rem";

export const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export const getSidebarClasses = cva([], {
  variants: createVariants({
    collapsible: {
      none: "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
    },
  }),
});

export const getSidebarMobileClasses = cva([], {
  variants: createVariants({
    isMobile: {
      true: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      false:
        "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
    },
  }),
});

export const getSidebarOuterClasses = cva("group peer hidden md:block text-sidebar-foreground");

export const getSidebarInnerClasses = cva(
  "duration-200 fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] ease-linear md:flex",
  {
    variants: createVariants({
      side: {
        left: "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]",
        right: "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
      },
      type: {
        floating:
          "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]",
        inset:
          "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]",
        sidebar:
          "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
      },
    }),
  }
);

export const getSidebarGapClasses = cva(
  [
    "duration-200 relative h-svh w-(--sidebar-width) bg-transparent transition-[width] ease-linear",
    "group-data-[collapsible=offcanvas]:w-0",
    "group-data-[side=right]:rotate-180",
  ],
  {
    variants: createVariants({
      type: {
        floating:
          "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]",
        inset: "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]",
        sidebar: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
      },
    }),
    compoundVariants: [
      {
        type: null,
        className: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
      },
    ],
  }
);

export const getSidebarTriggerClasses = cva("h-7 w-7 p-0");

export const getSidebarRailClasses = cva([
  "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
  "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
  "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
  "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
  "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
  "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
]);

export const getSidebarInsetClasses = cva([
  "relative flex min-h-svh flex-1 flex-col bg-background",
  "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
]);

// TODO
export const getSidebarInputClasses = cva(
  "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
);

export const getSidebarHeaderClasses = cva("flex flex-col gap-2 p-2");

export const getSidebarFooterClasses = cva("flex flex-col gap-2 p-2");

export const getSidebarSeparatorClasses = cva("mx-2 w-auto bg-sidebar-border");

export const getSidebarContentClasses = cva(
  "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
);

export const getSidebarProviderClasses = cva(
  "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar"
);

export const getSidebarGroupClasses = cva("relative flex w-full min-w-0 flex-col p-2");

export const getSidebarGroupLabelClasses = cva([
  "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-hidden ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&]:**:data-[sidebar-icon]:size-4 [&]:**:data-[sidebar-icon]:shrink-0",
  "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
]);

export const getSidebarGroupActionClasses = cva([
  "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&]:**:data-[sidebar-icon]:size-4 [&]:**:data-[sidebar-icon]:shrink-0",
  // Increases the hit area of the button on mobile.
  "after:absolute after:-inset-2 md:after:hidden",
  "group-data-[collapsible=icon]:hidden",
]);

export const getSidebarGroupContentClasses = cva("w-full text-sm");

export const getSidebarMenuClasses = cva("flex w-full min-w-0 flex-col gap-1");

export const getSidebarMenuItemClasses = cva("group/menu-item relative");

export const getSidebarMenuButtonClasses = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&]:**:data-[sidebar-icon]:size-4 [&]:**:data-[sidebar-icon]:shrink-0",
  {
    variants: createVariants({
      outline: {
        true: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      variant: {
        default: "",
      },
      size: {
        sm: "h-7 text-xs",
        md: "h-8 text-sm",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    }),
    defaultVariants: {
      outline: false,
      size: "md",
    },
    compoundVariants: [
      {
        outline: false,
        className: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      },
    ],
  }
);

export const getSidebarMenuActionClasses = cva(
  [
    "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&]:**:data-[sidebar-icon]:size-4 [&]:**:data-[sidebar-icon]:shrink-0",
    // Increases the hit area of the button on mobile.
    "after:absolute after:-inset-2 md:after:hidden",
    "peer-data-[size=sm]/menu-button:top-1",
    "peer-data-[size=default]/menu-button:top-1.5",
    "peer-data-[size=lg]/menu-button:top-2.5",
    "group-data-[collapsible=icon]:hidden",
  ],
  {
    variants: createVariants({
      showOnHover: {
        true: "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      },
    }),
  }
);

export const getSidebarMenuBadgeClasses = cva([
  "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
  "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
  "peer-data-[size=sm]/menu-button:top-1",
  "peer-data-[size=default]/menu-button:top-1.5",
  "peer-data-[size=lg]/menu-button:top-2.5",
  "group-data-[collapsible=icon]:hidden",
]);

export const getSidebarMenuSkeletonClasses = cva("rounded-md h-8 flex gap-2 px-2 items-center");

export const getSidebarMenuSubClasses = cva([
  "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
  "group-data-[collapsible=icon]:hidden",
]);

export const getSidebarMenuSubItemClasses = cva(
  [
    "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&]:**:data-[sidebar-icon]:size-4 [&]:**:data-[sidebar-icon]:shrink-0",
    "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
    "group-data-[collapsible=icon]:hidden",
  ],
  {
    variants: createVariants({
      size: {
        sm: "text-xs",
        md: "text-sm",
      },
    }),
  }
);

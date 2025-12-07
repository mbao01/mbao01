"use client";

import type { ComponentProps, CSSProperties, ElementRef, HTMLAttributes, MouseEvent } from "react";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { PanelLeftIcon } from "lucide-react";
import type { ButtonProps } from "../Button/types";
import type { InputProps } from "../Form/Input/types";
import type { SeparatorProps } from "../Separator/types";
import type { SidebarContextProps, SidebarProps, SidebarProviderProps } from "./types";
import { useIsMobile } from "../../hooks";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { Input } from "../Form";
import { Separator } from "../Separator";
import { Tooltip } from "../Tooltip";
import {
  getSidebarClasses,
  getSidebarContentClasses,
  getSidebarFooterClasses,
  getSidebarGapClasses,
  getSidebarHeaderClasses,
  getSidebarInnerClasses,
  getSidebarInputClasses,
  getSidebarInsetClasses,
  getSidebarMobileClasses,
  getSidebarOuterClasses,
  getSidebarProviderClasses,
  getSidebarRailClasses,
  getSidebarSeparatorClasses,
  getSidebarTriggerClasses,
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_WIDTH_MOBILE,
} from "./constants";
import { useSidebar } from "./hooks";
import { SidebarContext } from "./SidebarContext";

const Sidebar = ({
  side = "left",
  type = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: SidebarProps) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div className={cn(getSidebarClasses({ collapsible }), className)} {...props}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Dialog open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <Dialog.Content
          side={side}
          type="sheet"
          data-mobile="true"
          data-sidebar="sidebar"
          className={cn(getSidebarMobileClasses({ isMobile }), className)}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </Dialog.Content>
      </Dialog>
    );
  }

  return (
    <div
      data-side={side}
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={type}
      className={getSidebarOuterClasses()}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div className={getSidebarGapClasses({ type })} />
      <div className={getSidebarInnerClasses({ side, type })} {...props}>
        <div
          data-sidebar="sidebar"
          className={cn(getSidebarMobileClasses({ isMobile }), className)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
Sidebar.displayName = "Sidebar";

const SidebarTrigger = forwardRef<ElementRef<typeof Button>, ButtonProps>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        variant="ghost"
        data-sidebar="trigger"
        className={cn(getSidebarTriggerClasses(), className)}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeftIcon className="w-4 h-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(getSidebarRailClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = forwardRef<HTMLDivElement, ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return <main ref={ref} className={cn(getSidebarInsetClasses(), className)} {...props} />;
  }
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(getSidebarInputClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn(getSidebarHeaderClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn(getSidebarFooterClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = ({ className, ...props }: SeparatorProps) => {
  return (
    <Separator
      data-sidebar="separator"
      className={cn(getSidebarSeparatorClasses(), className)}
      {...props}
    />
  );
};
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(getSidebarContentClasses(), className)}
        {...props}
      />
    );
  }
);
SidebarContent.displayName = "SidebarContent";

const SidebarProvider = forwardRef<HTMLDivElement, SidebarProviderProps>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      tooltipProvider,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        if (setOpenProp) {
          return setOpenProp?.(typeof value === "function" ? value(open) : value);
        }

        _setOpen(value);

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <Tooltip.Provider delayDuration={0} {...tooltipProvider}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as CSSProperties
            }
            className={cn(getSidebarProviderClasses(), className)}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </Tooltip.Provider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;
Sidebar.Header = SidebarHeader;
Sidebar.Input = SidebarInput;
Sidebar.Inset = SidebarInset;
Sidebar.Provider = SidebarProvider;
Sidebar.Rail = SidebarRail;
Sidebar.Separator = SidebarSeparator;
Sidebar.Trigger = SidebarTrigger;

export { Sidebar };

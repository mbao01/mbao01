"use client";

import { forwardRef } from "react";
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import type {
  MenubarCheckboxItemProps,
  MenubarContentProps,
  MenubarItemProps,
  MenubarLabelProps,
  MenubarProps,
  MenubarRadioItemProps,
  MenubarSeparatorProps,
  MenubarShortcutProps,
  MenubarSubContentProps,
  MenubarSubTriggerProps,
  MenubarTriggerProps,
} from "./types";
import { cn } from "../../../utilities";
import {
  getMenubarCheckboxItemClasses,
  getMenubarClasses,
  getMenubarContentClasses,
  getMenubarItemClasses,
  getMenubarLabelClasses,
  getMenubarRadioItemClasses,
  getMenubarSeparatorClasses,
  getMenubarShortcutClasses,
  getMenubarSubContentClasses,
  getMenubarSubTriggerClasses,
  getMenubarTriggerClasses,
} from "./constants";

const Menubar = ({ className, ...props }: MenubarProps) => (
  <MenubarPrimitive.Root className={cn(getMenubarClasses(), className)} {...props} />
);
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ className, variant, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(getMenubarTriggerClasses({ variant }), className)}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(({ className, inset, variant, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(getMenubarSubTriggerClasses({ inset, variant }), className)}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(getMenubarSubContentClasses(), className)}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(getMenubarContentClasses(), className)}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = forwardRef<React.ElementRef<typeof MenubarPrimitive.Item>, MenubarItemProps>(
  ({ className, inset, variant, ...props }, ref) => (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn(getMenubarItemClasses({ inset, variant }), className)}
      {...props}
    />
  )
);
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemProps
>(({ className, children, variant, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(getMenubarCheckboxItemClasses({ variant }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemProps
>(({ className, children, variant, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(getMenubarRadioItemClasses({ variant }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <DotFilledIcon className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = forwardRef<React.ElementRef<typeof MenubarPrimitive.Label>, MenubarLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(getMenubarLabelClasses({ inset }), className)}
      {...props}
    />
  )
);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorProps
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(getMenubarSeparatorClasses(), className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => {
  return <span className={cn(getMenubarShortcutClasses(), className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

Menubar.Menu = MenubarPrimitive.Menu;
Menubar.Group = MenubarPrimitive.Group;
Menubar.Portal = MenubarPrimitive.Portal;
Menubar.Sub = MenubarPrimitive.Sub;
Menubar.RadioGroup = MenubarPrimitive.RadioGroup;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Item = MenubarItem;
Menubar.Separator = MenubarSeparator;
Menubar.Label = MenubarLabel;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioItem = MenubarRadioItem;
Menubar.SubContent = MenubarSubContent;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.Shortcut = MenubarShortcut;

export { Menubar };

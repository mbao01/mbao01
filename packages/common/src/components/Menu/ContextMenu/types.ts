import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { type VariantProps } from "../../../libs";
import {
  getMenubarCheckboxItemClasses,
  getMenubarContentClasses,
  getMenubarItemClasses,
  getMenubarLabelClasses,
  getMenubarRadioItemClasses,
  getMenubarSeparatorClasses,
  getMenubarShortcutClasses,
  getMenubarSubContentClasses,
  getMenubarSubTriggerClasses,
} from "../Menubar/constants";

export type ContextMenuProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Root
>;

export type ContextMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubTrigger
> &
  VariantProps<typeof getMenubarSubTriggerClasses>;

export type ContextMenuContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> &
  VariantProps<typeof getMenubarContentClasses>;

export type ContextMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> &
  VariantProps<typeof getMenubarSubContentClasses>;

export type ContextMenuItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> &
  VariantProps<typeof getMenubarItemClasses>;

export type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof getMenubarCheckboxItemClasses>;

export type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
> &
  VariantProps<typeof getMenubarRadioItemClasses>;

export type ContextMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Label
> &
  VariantProps<typeof getMenubarLabelClasses>;

export type ContextMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Separator
> &
  VariantProps<typeof getMenubarSeparatorClasses>;

export type ContextMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getMenubarShortcutClasses>;

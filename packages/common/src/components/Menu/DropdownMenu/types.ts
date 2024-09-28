import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
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

export type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>;

export type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> &
  VariantProps<typeof getMenubarSubTriggerClasses>;

export type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
> &
  VariantProps<typeof getMenubarContentClasses>;

export type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
> &
  VariantProps<typeof getMenubarSubContentClasses>;

export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> &
  VariantProps<typeof getMenubarItemClasses>;

export type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
> &
  VariantProps<typeof getMenubarCheckboxItemClasses>;

export type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
> &
  VariantProps<typeof getMenubarRadioItemClasses>;

export type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> &
  VariantProps<typeof getMenubarLabelClasses>;

export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
> &
  VariantProps<typeof getMenubarSeparatorClasses>;

export type DropdownMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getMenubarShortcutClasses>;

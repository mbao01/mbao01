import * as MenubarPrimitive from "@radix-ui/react-menubar";
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
  getMenubarTriggerClasses,
} from "./constants";

export type MenubarProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>;

export type MenubarTriggerProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> &
  VariantProps<typeof getMenubarTriggerClasses>;

export type MenubarSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubTrigger
> &
  VariantProps<typeof getMenubarSubTriggerClasses>;

export type MenubarContentProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> &
  VariantProps<typeof getMenubarContentClasses>;

export type MenubarSubContentProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> &
  VariantProps<typeof getMenubarSubContentClasses>;

export type MenubarItemProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> &
  VariantProps<typeof getMenubarItemClasses>;

export type MenubarCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.CheckboxItem
> &
  VariantProps<typeof getMenubarCheckboxItemClasses>;

export type MenubarRadioItemProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.RadioItem
> &
  VariantProps<typeof getMenubarRadioItemClasses>;

export type MenubarLabelProps = React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> &
  VariantProps<typeof getMenubarLabelClasses>;

export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Separator
> &
  VariantProps<typeof getMenubarSeparatorClasses>;

export type MenubarShortcutProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getMenubarShortcutClasses>;

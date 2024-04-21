import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { type VariantProps } from "../../../libs";
import {
  getNavigationMenuClasses,
  getNavigationMenuContentClasses,
  getNavigationMenuIndicatorClasses,
  getNavigationMenuListClasses,
  getNavigationMenuTriggerClasses,
  getNavigationMenuViewportClasses,
} from "./constants";

export type NavigationMenuProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> &
  VariantProps<typeof getNavigationMenuClasses>;

export type NavigationMenuListProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
> &
  VariantProps<typeof getNavigationMenuListClasses>;

export type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
> &
  VariantProps<typeof getNavigationMenuTriggerClasses>;

export type NavigationMenuContentProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
> &
  VariantProps<typeof getNavigationMenuContentClasses>;

export type NavigationMenuViewportProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
> &
  VariantProps<typeof getNavigationMenuViewportClasses>;

export type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Indicator
> &
  VariantProps<typeof getNavigationMenuIndicatorClasses>;

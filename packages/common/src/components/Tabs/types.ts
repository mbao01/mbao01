import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "../../libs";
import {
  getTabsContentClasses,
  getTabsListClasses,
  getTabsTriggerClasses,
} from "./constants";

export type TabsProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Root
>;

export type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> &
  VariantProps<typeof getTabsListClasses>;

export type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> &
  VariantProps<typeof getTabsTriggerClasses>;

export type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
> &
  VariantProps<typeof getTabsContentClasses>;

"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from "./types";
import { cn } from "../../utilities";
import { getTabsContentClasses, getTabsListClasses, getTabsTriggerClasses } from "./constants";

const Tabs = (props: TabsProps) => <TabsPrimitive.Root {...props} />;

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn(getTabsListClasses(), className)} {...props} />
  )
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(getTabsTriggerClasses(), className)} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(getTabsContentClasses(), className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export { Tabs };

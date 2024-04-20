"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { type CollapsibleProps } from "@radix-ui/react-accordion";

const Collapsible = (props: CollapsibleProps) => (
  <CollapsiblePrimitive.Root {...props} />
);

Collapsible.Trigger = CollapsiblePrimitive.CollapsibleTrigger;
Collapsible.Content = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible };

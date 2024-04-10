"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { getPopoverContentClasses } from "./constants";
import { cn } from "../../utilities";
import { PopoverContentProps, PopoverProps } from "./types";

const Popover = (props: PopoverProps) => <PopoverPrimitive.Root {...props} />;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(getPopoverContentClasses(), className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

Popover.Content = PopoverContent;
Popover.Trigger = PopoverPrimitive.Trigger;

export { Popover };

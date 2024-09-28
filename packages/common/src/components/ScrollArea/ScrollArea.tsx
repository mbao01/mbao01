"use client";

import { forwardRef } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type { ScrollAreaProps, ScrollbarProps } from "./types";
import { cn } from "../../utilities";
import {
  getScrollAreaClasses,
  getScrollAreaScrollbarClasses,
  getScrollAreaThumbClasses,
  getScrollAreaViewportClasses,
} from "./constants";

const ScrollArea = ({ className, children, scrollbar, ...props }: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root className={cn(getScrollAreaClasses(), className)} {...props}>
    <ScrollAreaPrimitive.Viewport className={cn(getScrollAreaViewportClasses())}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <Scrollbar {...scrollbar} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const Scrollbar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollbarProps
>(({ className, variant, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(getScrollAreaScrollbarClasses({ orientation }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={cn(getScrollAreaThumbClasses({ variant }))} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
Scrollbar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, Scrollbar };

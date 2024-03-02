import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { TooltipArrowProps, TooltipContentProps } from "./types";
import { getTooltipArrowClasses, getTooltipContentClasses } from "./constants";
import { cn } from "../../helpers";

const Tooltip = (props: TooltipPrimitive.TooltipProps) => (
  <TooltipPrimitive.Root {...props} />
);

const TooltipArrow = ({ className, variant, ...props }: TooltipArrowProps) => (
  <TooltipPrimitive.Arrow
    className={cn(getTooltipArrowClasses({ variant }), className)}
    {...props}
  />
);

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, variant, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    className={cn(getTooltipContentClasses({ variant }), className)}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

Tooltip.Content = TooltipContent;
Tooltip.Arrow = TooltipArrow;
Tooltip.Portal = TooltipPrimitive.Portal;
Tooltip.Provider = TooltipPrimitive.Provider;
Tooltip.Trigger = TooltipPrimitive.Trigger;

export { Tooltip };

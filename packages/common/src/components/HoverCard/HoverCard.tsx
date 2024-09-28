"use client";

import { forwardRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../../utilities";
import { getHoverCardContentClasses } from "./constants";
import { HoverCardProps } from "./types";

const HoverCard = (props: HoverCardProps) => <HoverCardPrimitive.Root {...props} />;

const HoverCardContent = forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(getHoverCardContentClasses(), className)}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

HoverCard.Content = HoverCardContent;
HoverCard.Trigger = HoverCardPrimitive.Trigger;

export { HoverCard };

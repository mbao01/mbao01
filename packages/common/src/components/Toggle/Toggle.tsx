"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "../../utilities";
import { getButtonClasses } from "../Button/constants";
import { getToggleClasses } from "./constants";
import { type ToggleProps } from "./types";

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, variant = "default", size, wide, outline, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        getButtonClasses({ size, wide, outline }),
        getToggleClasses({ variant, outline }),
        className
      )}
      {...props}
    />
  )
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };

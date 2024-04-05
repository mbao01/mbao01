"use client";

import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type ProgressProps } from "./types";
import { cn } from "../../utilities";
import { getProgressClasses, getProgressIndicatorClasses } from "./constants";

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, variant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    max={max}
    value={value}
    className={cn(getProgressClasses({ variant }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(getProgressIndicatorClasses({ variant }))}
      style={{
        transform: `translateX(-${
          (100 * (max - Math.max(Math.min(value ?? 0, max), 0))) / max
        }%)`,
      }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

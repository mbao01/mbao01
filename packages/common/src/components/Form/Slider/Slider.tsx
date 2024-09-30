"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../../utilities";
import {
  getSliderClasses,
  getSliderRootClasses,
  getSliderThumbClasses,
  getSliderTrackClasses,
} from "./constants";
import { type SliderProps } from "./types";

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    {
      className,
      size,
      variant,
      wide,
      disabled,
      name,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...props
    },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      name={name}
      disabled={disabled}
      className={cn(getSliderRootClasses({ wide, disabled }), className)}
      data-testid={name ? `${name}-slider-root` : null}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(getSliderTrackClasses({ size, variant }))}
        data-testid={name ? `${name}-slider-track` : null}
      >
        <SliderPrimitive.Range
          className={cn(getSliderClasses({ variant }))}
          data-testid={name ? `${name}-slider-range` : null}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cn(getSliderThumbClasses({ size, variant }))}
        data-testid={name ? `${name}-slider-thumb` : null}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      />
    </SliderPrimitive.Root>
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

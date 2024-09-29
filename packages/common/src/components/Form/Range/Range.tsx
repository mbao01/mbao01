import * as React from "react";
import { cn } from "../../../utilities";
import { getRangeClasses } from "./constants";
import { type RangeProps } from "./types";

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ className, size, variant, wide, disabled, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      disabled={disabled}
      className={cn(getRangeClasses({ size, variant, wide, disabled }), className)}
      {...props}
    />
  )
);
Range.displayName = "Range";

export { Range };

import * as React from "react";
import { type RangeProps } from "./types";
import { getRangeClasses } from "./constants";
import { cn } from "../../../utilities";

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ className, size, variant, wide, disabled, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      disabled={disabled}
      className={cn(
        getRangeClasses({ size, variant, wide, disabled }),
        className
      )}
      {...props}
    />
  )
);
Range.displayName = "Range";

export { Range };

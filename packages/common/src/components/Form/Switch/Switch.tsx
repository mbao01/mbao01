import * as React from "react";
import { cn } from "../../../utilities";
import { getSwitchClasses } from "./constants";
import { type SwitchProps } from "./types";

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size, variant, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={cn(getSwitchClasses({ size, variant }), className)}
      {...props}
    />
  )
);
Switch.displayName = "Switch";

export { Switch };

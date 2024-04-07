import * as React from "react";

import { type SwitchProps } from "./types";
import { getSwitchClasses } from "./constants";
import { cn } from "../../../utilities";

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

import * as React from "react";
import { type CheckboxProps } from "./types";
import { getCheckboxClasses } from "./constants";
import { cn } from "../../../utilities";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, variant, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      role="checkbox"
      className={cn(getCheckboxClasses({ size, variant }), className)}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

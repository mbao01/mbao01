import * as React from "react";
import { cn } from "../../../utilities";
import { getCheckboxClasses } from "./constants";
import { type CheckboxProps } from "./types";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, variant, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={cn(getCheckboxClasses({ size, variant }), className)}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };

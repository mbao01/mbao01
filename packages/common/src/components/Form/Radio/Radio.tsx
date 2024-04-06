import * as React from "react";
import { type CheckboxProps } from "./types";
import { getRadioClasses } from "./constants";
import { cn } from "../../../utilities";

const Radio = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, variant, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      className={cn(getRadioClasses({ size, variant }), className)}
      {...props}
    />
  )
);
Radio.displayName = "Radio";

export { Radio };

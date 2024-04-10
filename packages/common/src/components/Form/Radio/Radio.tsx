import * as React from "react";
import { type RadioProps } from "./types";
import { getRadioClasses } from "./constants";
import { cn } from "../../../utilities";

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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

import * as React from "react";
import { cn } from "../../../utilities";
import { getRadioClasses } from "./constants";
import { type RadioProps } from "./types";

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

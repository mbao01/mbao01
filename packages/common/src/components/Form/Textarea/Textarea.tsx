import * as React from "react";
import { type TextareaProps } from "./types";
import { cn } from "../../../utilities";
import { getTextareaClasses } from "./constants";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, variant, wide, outline, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          getTextareaClasses({ size, wide, variant, outline }),
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

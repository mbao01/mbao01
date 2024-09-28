import * as React from "react";
import { cn } from "../../../utilities";
import { getTextareaClasses } from "./constants";
import { type TextareaProps } from "./types";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size, variant, wide, outline, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(getTextareaClasses({ size, wide, variant, outline }), className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

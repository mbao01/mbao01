import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { TextareaLabelProps, TextareaProps } from "./types";
import { cn } from "../../../utilities";
import { getFloatingLabelClasses, getTextareaClasses } from "./constants";

const TextareaLabel = ({ children, ...props }: TextareaLabelProps) => {
  const SlotChild = ["string", "number", "boolean", "undefined"].includes(typeof children) ? (
    <span>{children}</span>
  ) : (
    children
  );

  return <Slot {...props}>{SlotChild}</Slot>;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, size, variant, wide, outline, className, ...props }, ref) => {
    if (label) {
      return (
        <label htmlFor={id} className={getFloatingLabelClasses()}>
          <TextareaLabel>{label}</TextareaLabel>
          <textarea
            id={id}
            ref={ref}
            className={cn(getTextareaClasses({ size, wide, variant, outline }), className)}
            {...props}
          />
        </label>
      );
    }

    return (
      <textarea
        id={id}
        ref={ref}
        className={cn(getTextareaClasses({ size, wide, variant, outline }), className)}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

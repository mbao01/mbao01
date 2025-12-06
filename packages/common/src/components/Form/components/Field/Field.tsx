import React, { useId } from "react";
import { cn } from "../../../../utilities";
import {
  getFieldClasses,
  getFieldDescriptionClasses,
  getFieldErrorClasses,
  getFieldLabelClasses,
} from "./constants";
import { FieldContext } from "./FieldContext";
import { useField } from "./hooks";
import {
  type FieldDescriptionProps,
  type FieldErrorProps,
  type FieldLabelProps,
  type FieldProps,
} from "./types";

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, children, ...props }, ref) => {
    const id = useId();
    const inputId = `${id}-input`;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    return (
      <FieldContext.Provider value={{ id, inputId, descriptionId, errorId }}>
        <div ref={ref} className={cn(getFieldClasses(), className)} {...props}>
          {children}
        </div>
      </FieldContext.Provider>
    );
  }
);
Field.displayName = "Field";

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, required, children, htmlFor, ...props }, ref) => {
    const { inputId } = useField();
    return (
      <label
        ref={ref}
        htmlFor={htmlFor ?? inputId}
        className={cn(getFieldLabelClasses({ required }), className)}
        {...props}
      >
        <span className="label-text">{children}</span>
      </label>
    );
  }
);
FieldLabel.displayName = "FieldLabel";

export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    const { descriptionId } = useField();
    return (
      <p
        ref={ref}
        id={descriptionId}
        className={cn(getFieldDescriptionClasses(), className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FieldDescription.displayName = "FieldDescription";

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, children, ...props }, ref) => {
    const { errorId } = useField();
    if (!children) return null;
    return (
      <p ref={ref} id={errorId} className={cn(getFieldErrorClasses(), className)} {...props}>
        {children}
      </p>
    );
  }
);
FieldError.displayName = "FieldError";

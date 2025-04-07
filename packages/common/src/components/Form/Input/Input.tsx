import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { InputLabelProps, InputProps } from "./types";
import { cn } from "../../../utilities";
import { getFloatingLabelClasses, getInputClasses, getInputLabelClasses } from "./constants";

const InputLabel = ({ floating, children, ...props }: InputLabelProps) => {
  const SlotChild = ["string", "number", "boolean", "undefined"].includes(typeof children) ? (
    <span>{children}</span>
  ) : (
    children
  );

  return (
    <Slot className={cn(getInputLabelClasses({ floating }))} {...props}>
      {SlotChild}
    </Slot>
  );
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      size,
      label,
      labelPosition = "start",
      variant,
      wide,
      outline,
      className,
      type,
      ...props
    }: InputProps,
    ref
  ) => {
    if (Boolean(label)) {
      if (labelPosition === "floating") {
        return (
          <label htmlFor={id} className={getFloatingLabelClasses()}>
            <InputLabel floating>{label}</InputLabel>
            <input
              id={id}
              ref={ref}
              type={type}
              className={cn(getInputClasses({ type, size, wide, variant, outline }), className)}
              {...props}
            />
          </label>
        );
      }

      return (
        <label
          htmlFor={id}
          className={cn(getInputClasses({ type, size, wide, variant, outline }), className)}
        >
          {labelPosition === "start" && <InputLabel>{label}</InputLabel>}
          <input id={id} ref={ref} type={type} {...props} />
          {labelPosition === "end" && <InputLabel>{label}</InputLabel>}
        </label>
      );
    }

    return (
      <input
        id={id}
        ref={ref}
        type={type}
        className={cn(getInputClasses({ type, size, wide, variant, outline }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

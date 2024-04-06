import React from "react";
import { type InputProps } from "./types";
import { cn } from "../../../utilities";
import { getInputClasses } from "./constants";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type, size, variant, wide, outline, className, ...props }: InputProps,
    ref
  ) => (
    <input
      id={id}
      ref={ref}
      type={type}
      className={cn(
        getInputClasses({ size, wide, variant, outline }),
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

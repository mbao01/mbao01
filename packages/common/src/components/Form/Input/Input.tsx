import React from "react";
import { type InputProps } from "./types";
import { cn } from "../../../utilities";
import { getInputClasses } from "./constants";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { size, variant, wide, outline, className, type, ...props }: InputProps,
    ref
  ) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        getInputClasses({ type, size, wide, variant, outline }),
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

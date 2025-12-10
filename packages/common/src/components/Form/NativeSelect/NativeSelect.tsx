import React from "react";
import { cn } from "../../../utilities";
import { getNativeSelectClasses } from "./constants";
import { type NativeSelectProps } from "./types";

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, size, variant, outline, wide, nativeOptions, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          getNativeSelectClasses({ size, variant, outline, wide, nativeOptions }),
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

NativeSelect.displayName = "NativeSelect";

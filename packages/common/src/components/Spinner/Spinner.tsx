import React from "react";
import { Loader2Icon } from "lucide-react";
import { cn } from "../../utilities";
import { getSpinnerClasses } from "./constants";
import { type SpinnerProps } from "./types";

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(getSpinnerClasses({ size, variant }), className)}
        {...props}
      >
        <Loader2Icon className="h-full w-full" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

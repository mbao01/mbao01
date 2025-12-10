import React from "react";
import { cn } from "../../utilities";
import { getStepClasses, getStepperClasses } from "./constants";
import { type StepperProps, type StepProps } from "./types";

export const Stepper = React.forwardRef<HTMLUListElement, StepperProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn(getStepperClasses({ orientation }), className)} {...props}>
        {children}
      </ul>
    );
  }
);
Stepper.displayName = "Stepper";

export const Step = React.forwardRef<HTMLLIElement, StepProps>(
  ({ className, variant, active, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(getStepClasses({ variant: active ? "primary" : variant }), className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);
Step.displayName = "Step";

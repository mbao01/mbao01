import type { ElementRef } from "react";
import { forwardRef, useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cn } from "../../../utilities";
import {
  getCheckboxClasses,
  getCheckboxIconClasses,
  getCheckboxIndicatorClasses,
} from "./constants";
import { type CheckboxProps } from "./types";

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, size, rounded, variant, defaultChecked, ...props }, ref) => {
    const [checked, setChecked] = useState<CheckboxPrimitive.CheckedState | undefined>(
      defaultChecked
    );

    return (
      <CheckboxPrimitive.Root
        ref={ref}
        checked={checked}
        onCheckedChange={setChecked}
        className={cn(getCheckboxClasses({ size, rounded, variant }), className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn(getCheckboxIndicatorClasses())}>
          {checked === "indeterminate" && (
            <MinusIcon className={cn(getCheckboxIconClasses({ size }))} />
          )}
          {checked === true && <CheckIcon className={cn(getCheckboxIconClasses({ size }))} />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

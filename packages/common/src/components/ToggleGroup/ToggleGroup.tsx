"use client";

import { createContext, forwardRef, useContext } from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import type {
  ToggleGroupContextType,
  ToggleGroupItemProps,
  ToggleGroupProps,
} from "./types";
import { cn } from "../../utilities";
import { getToggleClasses } from "../Toggle/constants";
import { getToggleGroupClasses } from "./constants";
import { getButtonClasses } from "../Button/constants";

const ToggleGroupContext = createContext<ToggleGroupContextType>({
  variant: "default",
});

const ToggleGroup = ({
  className,
  variant,
  children,
  ...props
}: ToggleGroupProps) => (
  <ToggleGroupPrimitive.Root
    className={cn(getToggleGroupClasses(), className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
);

const ToggleGroupItem = forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, wide, outline, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        getButtonClasses({ size, wide, outline }),
        getToggleClasses({
          variant: context.variant ?? variant,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

ToggleGroup.Item = ToggleGroupItem;

export { ToggleGroup };

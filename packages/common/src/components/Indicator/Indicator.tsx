import { Slot } from "@radix-ui/react-slot";
import type { As, IndicatorItemProps, IndicatorProps } from "./types";
import { cn } from "../../utilities";
import {
  getIndicatorClasses,
  getIndicatorItemClasses,
  getIndicatorPositionClasses,
} from "./constants";

const Indicator = <T extends As>({
  as,
  position,
  className,
  children,
  ...props
}: IndicatorProps<T>) => {
  const SlotChild = as;

  return (
    <Slot
      className={cn(getIndicatorClasses(), getIndicatorPositionClasses({ position }), className)}
      {...props}
    >
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

const IndicatorItem = <T extends As>({
  as,
  className,
  children,
  ...props
}: IndicatorItemProps<T>) => {
  const SlotChild = as;

  return (
    <Slot className={cn(getIndicatorItemClasses(), className)} {...props}>
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

Indicator.Item = IndicatorItem;

export { Indicator };

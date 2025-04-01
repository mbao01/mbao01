import { Slot } from "@radix-ui/react-slot";
import type { As, FieldsetLabelProps, FieldsetLegendProps, FieldsetProps } from "./types";
import { cn } from "../../../../utilities";
import { Label } from "../Label";
import { getFieldsetClasses, getFieldsetLabelClasses, getFieldsetLegendClasses } from "./constants";

const Fieldset = ({ children, className, ...props }: FieldsetProps) => {
  return (
    <fieldset className={cn(getFieldsetClasses(), className)} {...props}>
      {children}
    </fieldset>
  );
};

const FieldsetLabel = <T extends As>({
  as,
  children,
  className,
  ...props
}: FieldsetLabelProps<T>) => {
  const SlotChild = !as || as === "label" ? Label : as;

  return (
    <Slot className={cn(getFieldsetLabelClasses(), className)} {...props}>
      {/* slot merges it's prop into it's immediate child */}
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

const FieldsetLegend = ({ children, className, ...props }: FieldsetLegendProps) => {
  return (
    <legend className={cn(getFieldsetLegendClasses(), className)} {...props}>
      {children}
    </legend>
  );
};

Fieldset.Label = FieldsetLabel;
Fieldset.Legend = FieldsetLegend;

export { Fieldset };

import { Slot } from "@radix-ui/react-slot";
import type { As, FormControlProps } from "./types";
import { cn } from "../../../../utilities";
import { Label } from "../Label";
import { getFormControlClasses } from "./constants";

export const FormControl = <T extends As>({
  as,
  children,
  className,
  ...props
}: FormControlProps<T>) => {
  const SlotChild = !as || as === "label" ? Label : as;

  return (
    <Slot className={cn(getFormControlClasses(), className)} {...props}>
      {/* slot merges it's prop into it's immediate child */}
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

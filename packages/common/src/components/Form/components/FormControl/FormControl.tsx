import { Slot } from "@radix-ui/react-slot";
import type { As, FormControlProps } from "./types";
import { getFormControlClasses } from "./constants";
import { cn } from "../../../../utilities";

export const FormControl = <T extends As>({
  as,
  children,
  className,
  ...props
}: FormControlProps<T>) => {
  const SlotChild = as ?? "label";

  return (
    <Slot className={cn(getFormControlClasses(), className)} {...props}>
      {/* slot merges it's prop into it's immediate child */}
      <SlotChild>{children}</SlotChild>
    </Slot>
  );
};

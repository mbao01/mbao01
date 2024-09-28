import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { As, TextProps } from "./types";
import { cn } from "../../utilities";
import { getTextClasses } from "./constants";

export const Text = <T extends As>({
  as,
  size,
  variant,
  children,
  className,
  ...props
}: TextProps<T>) => {
  const Comp = as ? Slot : "span";
  const SlotChild = as ? as : React.Fragment;

  return (
    <Comp className={cn(getTextClasses({ size, variant }), className)} {...props}>
      {/* slot merges it's prop into it's immediate child */}
      <SlotChild>{children}</SlotChild>
    </Comp>
  );
};

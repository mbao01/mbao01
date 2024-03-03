import React from "react";
import { type TextProps } from "./types";
import { getTextClasses } from "./constants";
import { cn } from "../../utilities";
import { Slot } from "@radix-ui/react-slot";

export const Text = ({
  as,
  size,
  variant,
  children,
  className,
  ...props
}: TextProps) => {
  const Comp = as ? Slot : "span";
  const SlotChild = as ? as : React.Fragment;

  return (
    <Comp
      className={cn(getTextClasses({ size, variant }), className)}
      {...props}
    >
      {/* slot merges it's prop into it's immediate child */}
      <SlotChild>{children}</SlotChild>
    </Comp>
  );
};

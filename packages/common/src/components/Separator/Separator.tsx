"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type SeparatorProps } from "./types";
import { getSeparatorClasses } from "./constants";
import { cn } from "../../utilities";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    decorative={decorative}
    orientation={orientation}
    className={cn(getSeparatorClasses({ orientation }), className)}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

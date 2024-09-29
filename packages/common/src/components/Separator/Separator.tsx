"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../utilities";
import { getSeparatorClasses } from "./constants";
import { type SeparatorProps } from "./types";

export const Separator = ({
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

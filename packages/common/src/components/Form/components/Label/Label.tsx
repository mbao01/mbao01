import * as LabelPrimitive from "@radix-ui/react-label";
import type { LabelProps } from "./types";
import { cn } from "../../../../utilities";
import { getLabelClasses } from "./constants";

export const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root className={cn(getLabelClasses(), className)} {...props} />
);
Label.displayName = LabelPrimitive.Root.displayName;

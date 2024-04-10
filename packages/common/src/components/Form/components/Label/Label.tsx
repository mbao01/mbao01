import * as LabelPrimitive from "@radix-ui/react-label";
import type { LabelProps, LabelTextProps } from "./types";
import { cn } from "../../../../utilities";
import { getLabelClasses } from "./constants";

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={cn(getLabelClasses(), className)}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

const LabelText = ({ className, ...props }: LabelTextProps) => (
  <span className={cn("label-text", className)} {...props}>
    Pick the best fantasy franchise
  </span>
);

Label.Text = LabelText;

export { Label };

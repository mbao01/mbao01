import * as LabelPrimitive from "@radix-ui/react-label";
import type { LabelProps, LabelTextProps } from "./types";
import { Text } from "../../../Text";
import { cn } from "../../../../utilities";
import { getLabelClasses } from "./constants";

const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={cn(getLabelClasses(), className)}
    {...props}
  />
);
Label.displayName = LabelPrimitive.Root.displayName;

const LabelText = ({ className, children, ...props }: LabelTextProps) => (
  <Text as="span" className={cn("label-text", className)} {...props}>
    {children}
  </Text>
);

Label.Text = LabelText;

export { Label };

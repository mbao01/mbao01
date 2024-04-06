import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "../../../../libs";
import { getLabelClasses } from "./constants";

export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> &
  VariantProps<typeof getLabelClasses>;

export type LabelTextProps = React.HTMLAttributes<HTMLSpanElement>;

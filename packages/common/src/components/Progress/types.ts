import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type VariantProps } from "../../libs";
import { getProgressClasses } from "./constants";

export type ProgressProps = Omit<
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  "asChild"
> &
  VariantProps<typeof getProgressClasses>;

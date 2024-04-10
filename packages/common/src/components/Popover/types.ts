import * as PopoverPrimitive from "@radix-ui/react-popover";
import { type VariantProps } from "../../libs";
import { getPopoverContentClasses } from "./constants";

export type PopoverProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
>;

export type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> &
  VariantProps<typeof getPopoverContentClasses>;

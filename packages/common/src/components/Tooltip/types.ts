import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { type VariantProps } from "../../libs";
import { getTooltipArrowClasses, getTooltipContentClasses } from "./constants";

export type TooltipArrowProps = React.HTMLAttributes<
  React.ElementRef<typeof TooltipPrimitive.Arrow>
> &
  TooltipPrimitive.TooltipArrowProps &
  VariantProps<typeof getTooltipArrowClasses>;

export type TooltipContentProps = React.HTMLAttributes<
  React.ElementRef<typeof TooltipPrimitive.Content>
> &
  TooltipPrimitive.TooltipContentProps &
  VariantProps<typeof getTooltipContentClasses>;

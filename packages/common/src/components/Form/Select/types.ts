import * as SelectPrimitive from "@radix-ui/react-select";
import { type VariantProps } from "../../../libs";
import {
  getSelectContentClasses,
  getSelectTriggerClasses,
  getSelectValueClasses,
} from "./constants";

export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof getSelectTriggerClasses>;

export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
  VariantProps<typeof getSelectTriggerClasses>;

export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
  VariantProps<typeof getSelectContentClasses>;

export type SelectValueProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value> &
  VariantProps<typeof getSelectValueClasses>;

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { BaseToggleProps } from "../Toggle/types";

export type ToggleGroupProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  Pick<BaseToggleProps, "variant">;

export type ToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  BaseToggleProps;

export type ToggleGroupContextType = Pick<BaseToggleProps, "variant">;

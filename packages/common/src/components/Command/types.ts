import { Command as CommandPrimitive } from "cmdk";
import { type DialogProps } from "../Dialog/types";
import { type VariantProps } from "../../libs";
import { getCommandClasses, getCommandInputClasses } from "./constants";

export type CommandProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
> &
  VariantProps<typeof getCommandClasses>;

export type CommandInputProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
> &
  VariantProps<typeof getCommandInputClasses>;

export type CommandDialogProps = DialogProps;

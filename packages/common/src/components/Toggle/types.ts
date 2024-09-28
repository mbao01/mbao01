import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "../../libs";
import { getButtonClasses } from "../Button/constants";
import { getToggleClasses } from "./constants";

export type BaseToggleProps = Omit<VariantProps<typeof getButtonClasses>, "variant" | "isLoading"> &
  VariantProps<typeof getToggleClasses>;

export type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  BaseToggleProps;

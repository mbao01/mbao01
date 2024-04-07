import { type VariantProps } from "../../../libs";
import { type InputProps } from "../Input/types";
import { getSwitchClasses } from "./constants";

export type SwitchProps = Omit<InputProps, "type" | "size"> &
  VariantProps<typeof getSwitchClasses>;

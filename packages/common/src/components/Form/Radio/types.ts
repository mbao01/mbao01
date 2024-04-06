import { type VariantProps } from "../../../libs";
import { type InputProps } from "../Input/types";
import { getRadioClasses } from "./constants";

export type CheckboxProps = Omit<InputProps, "type" | "size"> &
  VariantProps<typeof getRadioClasses>;

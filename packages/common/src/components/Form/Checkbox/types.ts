import { type VariantProps } from "../../../libs";
import { type InputProps } from "../Input/types";
import { getCheckboxClasses } from "./constants";

export type CheckboxProps = Omit<InputProps, "type" | "size"> &
  VariantProps<typeof getCheckboxClasses>;

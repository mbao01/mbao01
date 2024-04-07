import { type VariantProps } from "../../../libs";
import { getCheckboxClasses } from "./constants";

export type CheckboxProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "size" | "ref" | "type"
> &
  VariantProps<typeof getCheckboxClasses>;

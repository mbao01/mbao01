import { type VariantProps } from "../../../libs";
import { getSwitchClasses } from "./constants";

export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "ref" | "type"
> &
  VariantProps<typeof getSwitchClasses>;

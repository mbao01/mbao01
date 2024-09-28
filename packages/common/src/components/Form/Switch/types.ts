import { type VariantProps } from "../../../libs";
import { getSwitchClasses } from "./constants";

export type SwitchProps = Omit<React.HTMLProps<HTMLInputElement>, "size" | "ref" | "type"> &
  VariantProps<typeof getSwitchClasses>;

import { type VariantProps } from "../../../libs";
import { getRadioClasses } from "./constants";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "ref" | "type"
> &
  VariantProps<typeof getRadioClasses>;

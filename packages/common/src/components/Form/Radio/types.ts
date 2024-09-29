import { type VariantProps } from "../../../libs";
import { getRadioClasses } from "./constants";

export type RadioProps = Omit<React.HTMLProps<HTMLInputElement>, "size" | "ref" | "type"> &
  VariantProps<typeof getRadioClasses>;

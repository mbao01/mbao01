import { type VariantProps } from "../../../libs";
import { type InputProps } from "../Input/types";
import { getRadioClasses } from "./constants";

export type RadioProps = Omit<InputProps, "type" | "size"> &
  VariantProps<typeof getRadioClasses>;

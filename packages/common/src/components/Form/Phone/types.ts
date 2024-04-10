import { type VariantProps } from "../../../libs";
import { type InputProps } from "../Input/types";
import { getInputClasses } from "../Input/constants";
import { getButtonClasses } from "../../Button/constants";

export type PhoneProps = Omit<InputProps, "type" | "size" | "inputMode"> & {
  inputProps?: VariantProps<typeof getInputClasses>;
  buttonProps?: VariantProps<typeof getButtonClasses>;
};

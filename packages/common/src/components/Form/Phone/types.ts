import { UsePhoneInputConfig } from "react-international-phone";
import { type InputProps } from "../Input/types";

export type PhoneProps = Omit<InputProps, "type" | "label" | "inputMode"> &
  Pick<UsePhoneInputConfig, "defaultCountry">;

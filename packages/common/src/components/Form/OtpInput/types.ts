import { type OTPInputProps } from "react-otp-input";
import { InputProps } from "../Input/types";

export type OtpInputProps = {
  className?: string;
  inputProps?: Omit<InputProps, "type">;
} & Omit<OTPInputProps, "renderInput" | "onChange">;

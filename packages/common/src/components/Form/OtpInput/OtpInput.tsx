import OTPInput from "react-otp-input";
import { type OtpInputProps } from "./types";
import { Input } from "../Input";
import { cn } from "../../../utilities";
import { useState } from "react";

export const OtpInput = ({
  className,
  inputProps,
  ...props
}: OtpInputProps) => {
  const [otp, setOtp] = useState("");

  return (
    <OTPInput
      {...props}
      value={otp}
      onChange={setOtp}
      renderInput={(renderProps) => (
        <Input
          {...inputProps}
          {...renderProps}
          className={cn(
            "!w-12 !appearance-none selection:bg-base text-base-content",
            className
          )}
        />
      )}
      containerStyle={`flex justify-center items-center flex-wrap text-2xl font-bold ${
        props.renderSeparator ? "gap-1" : "gap-x-3 gap-y-2"
      }`}
    />
  );
};

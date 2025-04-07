import { ReactNode } from "react";
import { type VariantProps } from "../../../libs";
import { getInputClasses, getInputLabelClasses } from "./constants";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "ref"> &
  Omit<VariantProps<typeof getInputClasses>, "type"> & {
    label?: ReactNode;
    labelPosition?: "start" | "end" | "floating";
  };

export type InputLabelProps = VariantProps<typeof getInputLabelClasses> & {
  children: ReactNode;
};

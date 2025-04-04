import { type ReactNode } from "react";
import { type InputProps } from "../Input/types";

export type TextFieldProps = InputProps & {
  info?: ReactNode;
  label?: ReactNode;
  error?: string | string[] | null;
};

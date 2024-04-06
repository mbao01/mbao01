import { type ReactNode } from "react";

export type TextFieldProps = React.HTMLProps<HTMLInputElement> & {
  info?: ReactNode;
  error?: string | string[] | null;
};

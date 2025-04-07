import type { ReactNode } from "react";
import type { VariantProps } from "../../../libs";
import { getTextareaClasses } from "./constants";

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size" | "ref"
> &
  VariantProps<typeof getTextareaClasses> & {
    label?: ReactNode;
  };

export type TextareaLabelProps = {
  children: ReactNode;
};

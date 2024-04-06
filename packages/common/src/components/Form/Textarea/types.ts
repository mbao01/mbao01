import { type VariantProps } from "../../../libs";
import { getTextareaClasses } from "./constants";

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size" | "ref"
> &
  VariantProps<typeof getTextareaClasses>;

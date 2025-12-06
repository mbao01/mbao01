import { type VariantProps } from "../../../../libs";
import { getFieldClasses, getFieldLabelClasses } from "./constants";

export type FieldProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getFieldClasses>;

export type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof getFieldLabelClasses>;

export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export type FieldErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

export type FieldContextValue = {
  id: string;
  inputId: string;
  descriptionId: string;
  errorId: string;
};

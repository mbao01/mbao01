import { type VariantProps } from "../../../../libs";
import { getFormControlClasses } from "./constants";

export type As = "div" | "span" | "label";

type AllowedElements = Pick<React.JSX.IntrinsicElements, As>;

export type FormControlProps<T extends As> = (T extends "label"
  ? React.LabelHTMLAttributes<HTMLLabelElement>
  : React.HTMLAttributes<HTMLElement & AllowedElements[T]>) &
  VariantProps<typeof getFormControlClasses> & {
    as?: T;
  };

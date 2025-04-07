import { type VariantProps } from "../../../../libs";
import { getFieldsetClasses, getFieldsetLabelClasses, getFieldsetLegendClasses } from "./constants";

export type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
  VariantProps<typeof getFieldsetClasses>;

export type As = "div" | "span" | "label" | "p";

type AllowedElements = Pick<React.JSX.IntrinsicElements, As>;

export type FieldsetLabelProps<T extends As> = (T extends "label"
  ? React.LabelHTMLAttributes<HTMLLabelElement>
  : AllowedElements[T]) &
  VariantProps<typeof getFieldsetLabelClasses> & {
    as?: T;
  };

export type FieldsetLegendProps = React.HTMLAttributes<HTMLLegendElement> &
  VariantProps<typeof getFieldsetLegendClasses>;

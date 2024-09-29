import { type VariantProps } from "../../libs";
import { getTextClasses } from "./constants";

export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

type AllowedElements = Pick<JSX.IntrinsicElements, As>;

export type TextProps<T extends As> = React.HTMLAttributes<HTMLElement & AllowedElements[T]> &
  VariantProps<typeof getTextClasses> & {
    as?: As;
  };

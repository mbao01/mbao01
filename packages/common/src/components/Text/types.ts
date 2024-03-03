import { type VariantProps } from "class-variance-authority";
import { getTextClasses } from "./constants";

export type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getTextClasses> & {
    as?: keyof Pick<
      JSX.IntrinsicElements,
      "h1" | "h2" | "h3" | "h4" | "h5" | "p"
    >;
  };

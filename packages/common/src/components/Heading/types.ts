import { type VariantProps } from "../../libs";
import { getHeadingClasses } from "./constants";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps<T extends HeadingElement = HeadingElement> =
  React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof getHeadingClasses> & {
      as?: T;
    };

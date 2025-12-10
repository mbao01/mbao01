import { type VariantProps } from "../../libs";
import { getCodeClasses } from "./constants";

export type CodeProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof getCodeClasses> & {
    skip?: boolean;
    prefix?: "numeric" | "uppercase" | "lowercase" | "none";
  };

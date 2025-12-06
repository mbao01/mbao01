import { type VariantProps } from "../../libs";
import { getBlockquoteClasses } from "./constants";

export type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement> &
  VariantProps<typeof getBlockquoteClasses> & {
    cite?: string;
  };

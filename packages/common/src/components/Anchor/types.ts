import { VariantProps } from "../../libs";
import { getAnchorClasses } from "./constants";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isExternal?: boolean;
} & VariantProps<typeof getAnchorClasses>;

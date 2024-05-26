import { VariantProps } from "../../libs";
import { getAnchorClasses } from "./constant";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isExternal?: boolean;
} & VariantProps<typeof getAnchorClasses>;

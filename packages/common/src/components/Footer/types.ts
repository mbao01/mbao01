import { type VariantProps } from "../../libs";
import { getFooterClasses } from "./constants";

export type FooterProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof getFooterClasses>;

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>;

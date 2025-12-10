import { type VariantProps } from "../../libs";
import { getHeaderClasses } from "./constants";

export type HeaderProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof getHeaderClasses>;

import { type VariantProps } from "../../libs";
import { getFlexClasses } from "./constants";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getFlexClasses>;

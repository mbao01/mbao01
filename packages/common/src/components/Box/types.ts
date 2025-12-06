import { type VariantProps } from "../../libs";
import { getBoxClasses } from "./constants";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getBoxClasses>;

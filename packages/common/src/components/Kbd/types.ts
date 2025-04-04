import { type VariantProps } from "../../libs";
import { getKbdClasses } from "./constants";

export type KbdProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getKbdClasses>;

import { type VariantProps } from "../../libs";
import { getKbdClasses } from "./constants";

export type KbdProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof getKbdClasses>;

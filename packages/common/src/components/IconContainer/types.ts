import { type VariantProps } from "../../libs";
import { getIconContainerClasses } from "./constants";

export type IconContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getIconContainerClasses>;

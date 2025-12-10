import { type VariantProps } from "../../libs";
import { getCenterClasses } from "./constants";

export type CenterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getCenterClasses>;

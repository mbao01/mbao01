import { type VariantProps } from "../../libs";
import { getSpinnerClasses } from "./constants";

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getSpinnerClasses>;

import { type VariantProps } from "../../libs";
import { getAlertClasses } from "./constants";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getAlertClasses>;

import { type VariantProps } from "../../helpers";
import { getBadgeClasses } from "./constants";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getBadgeClasses>;

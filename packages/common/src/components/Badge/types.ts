import { type VariantProps } from "../../libs";
import { getBadgeClasses } from "./constants";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getBadgeClasses>;

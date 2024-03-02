import { type VariantProps } from "class-variance-authority";
import { getBadgeClasses } from "./constants";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof getBadgeClasses>;

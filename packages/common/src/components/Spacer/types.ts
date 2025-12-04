import { type VariantProps } from "../../libs";
import { getSpacerClasses } from "./constants";

export type SpacerProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> &
  VariantProps<typeof getSpacerClasses>;

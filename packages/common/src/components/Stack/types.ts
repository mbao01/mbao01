import { type VariantProps } from "../../libs";
import { getStackClasses } from "./constants";

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStackClasses>;

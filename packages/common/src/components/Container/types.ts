import { type VariantProps } from "../../libs";
import { getContainerClasses } from "./constants";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getContainerClasses>;

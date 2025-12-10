import { type VariantProps } from "../../libs";
import { getAspectRatioClasses } from "./constants";

export type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getAspectRatioClasses> & {
    value?: number; // Custom ratio value (width/height)
  };

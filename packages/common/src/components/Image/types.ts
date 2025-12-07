import { type VariantProps } from "../../libs";
import { getImageClasses } from "./constants";

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof getImageClasses> & {
    fallbackSrc?: string;
  };

import { type VariantProps } from "../../libs";
import { getBannerClasses } from "./constants";

export type BannerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getBannerClasses> & {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    action?: React.ReactNode;
    onClose?: () => void;
  };

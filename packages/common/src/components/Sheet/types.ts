import { type VariantProps } from "../../libs";
import { getSheetClasses } from "./constants";

export type SheetProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getSheetClasses> & {
    onClose?: () => void;
  };

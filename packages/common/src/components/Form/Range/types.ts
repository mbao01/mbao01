import { type VariantProps } from "../../../libs";
import { getRangeClasses } from "./constants";

export type RangeProps = Omit<React.HTMLProps<HTMLInputElement>, "size" | "ref" | "type"> &
  VariantProps<typeof getRangeClasses>;

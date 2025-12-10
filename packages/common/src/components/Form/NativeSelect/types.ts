import { type VariantProps } from "../../../libs";
import { getNativeSelectClasses } from "./constants";

export type NativeSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> &
  VariantProps<typeof getNativeSelectClasses>;

import { type VariantProps } from "../../../libs";
import { getInputClasses } from "./constants";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "ref"> &
  Omit<VariantProps<typeof getInputClasses>, "type">;

import { type VariantProps } from "../../../libs";
import { getInputClasses } from "./constants";

export type InputProps = Omit<React.HTMLProps<HTMLInputElement>, "size" | "ref"> &
  Omit<VariantProps<typeof getInputClasses>, "type">;

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type VariantProps } from "../../libs";
import { getSeparatorClasses } from "./constants";

export type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof getSeparatorClasses>;

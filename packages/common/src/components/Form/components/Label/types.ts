import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "../../../../libs";
import { getLabelClasses } from "./constants";
import { Text } from "../../../Text";

export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> &
  VariantProps<typeof getLabelClasses>;

export type LabelTextProps = Omit<React.ComponentProps<typeof Text>, "as">;

import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "../../../../libs";
import { Text } from "../../../Text";
import { getLabelClasses } from "./constants";

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof getLabelClasses>;

export type LabelTextProps = Omit<React.ComponentProps<typeof Text>, "as">;

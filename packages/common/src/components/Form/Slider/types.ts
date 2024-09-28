import * as SliderPrimitive from "@radix-ui/react-slider";
import { type VariantProps } from "../../../libs";
import {
  getSliderClasses,
  getSliderRootClasses,
  getSliderThumbClasses,
  getSliderTrackClasses,
} from "./constants";

export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  VariantProps<typeof getSliderClasses> &
  VariantProps<typeof getSliderTrackClasses> &
  VariantProps<typeof getSliderThumbClasses> &
  VariantProps<typeof getSliderRootClasses>;

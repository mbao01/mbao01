import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { VariantProps } from "../../libs";
import { getScrollAreaThumbClasses } from "./constants";

export type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  scrollbar?: ScrollbarProps;
};

export type ScrollbarProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> &
  VariantProps<typeof getScrollAreaThumbClasses>;

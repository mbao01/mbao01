import type { Transition, Variant } from "framer-motion";
import type { HTMLAttributes } from "react";

export type AnimatedGroupPreset = "fade" | "slide" | "scale" | "blur" | "blur-slide";

export type AnimatedGroupProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  /** Animation preset */
  preset?: AnimatedGroupPreset;
  /** Custom framer-motion variants */
  variants?: {
    container?: { hidden?: Variant; visible?: Variant };
    item?: { hidden?: Variant; visible?: Variant };
  };
  /** Stagger delay between children in seconds */
  staggerDelay?: number;
  /** Animation transition config */
  transition?: Transition;
};

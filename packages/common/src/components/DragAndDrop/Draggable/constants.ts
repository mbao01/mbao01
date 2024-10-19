import type { DropAnimation } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "../../../libs";

export const DROP_ANIMATION_CONFIG: DropAnimation = {
  keyframes({ transform }) {
    return [
      { transform: CSS.Transform.toString(transform.initial) },
      {
        transform: CSS.Transform.toString({
          ...transform.final,
          scaleX: 0.96,
          scaleY: 0.96,
        }),
      },
    ];
  },
  sideEffects({ active }) {
    active.node.style.opacity = "0";

    return () => {
      active.node.style.opacity = "";
    };
  },
};

export const getDraggableClasses = cva(
  "translate-x-[--translate-x] translate-y-[--translate-y] translate-z-0",
  {
    variants: {
      isDragging: {
        true: "transition-none z-10 cursor-grabbing",
      },
    },
  }
);

export const getDraggableRootClasses = cva("relative w-fit");

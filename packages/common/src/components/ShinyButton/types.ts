import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ShinyButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  children: ReactNode;
};

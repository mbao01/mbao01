import type { HTMLAttributes } from "react";

export type TextShimmerProps = HTMLAttributes<HTMLParagraphElement> & {
  /** Duration of the shimmer animation in seconds */
  duration?: number;
  /** Spread of the shimmer gradient (0-1) */
  spread?: number;
};

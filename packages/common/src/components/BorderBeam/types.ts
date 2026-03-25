import type { HTMLAttributes } from "react";

export type BorderBeamProps = HTMLAttributes<HTMLDivElement> & {
  /** Size of the beam in pixels */
  size?: number;
  /** Duration of the animation in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Start color of the beam gradient */
  colorFrom?: string;
  /** End color of the beam gradient */
  colorTo?: string;
};

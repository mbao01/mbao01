import type { HTMLAttributes, ReactNode } from "react";

export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  /** Speed in pixels per second */
  speed?: number;
  /** Direction of scroll */
  direction?: "left" | "right";
  /** Pause on hover */
  pauseOnHover?: boolean;
  /** Gap between repeated items */
  gap?: number;
};

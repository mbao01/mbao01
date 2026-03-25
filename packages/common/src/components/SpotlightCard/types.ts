import type { HTMLAttributes } from "react";

export type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Spotlight gradient color */
  spotlightColor?: string;
  /** Size of the spotlight in pixels */
  spotlightSize?: number;
};

import type { HTMLAttributes } from "react";

export type MeteorsProps = HTMLAttributes<HTMLDivElement> & {
  /** Number of meteors to render */
  count?: number;
};

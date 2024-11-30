import { HTMLAttributes } from "react";
import { type VariantProps } from "../../libs";
import {
  getTimelineClasses,
  getTimelineContentClasses,
  getTimelineDotClasses,
  getTimelineHeadingClasses,
  getTimelineItemClasses,
  getTimelineLineClasses,
} from "./constants";

export type TimelineProps = HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof getTimelineClasses>;

export type TimelineItemProps = HTMLAttributes<HTMLLIElement> &
  VariantProps<typeof getTimelineItemClasses>;

type DotVariants = VariantProps<typeof getTimelineDotClasses>;
export type TimelineDotProps = HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
} & Omit<DotVariants, "status"> & {
    status?: Exclude<DotVariants["status"], "custom">;
  };

export type TimelineContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getTimelineContentClasses>;

export type TimelineHeadingProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof getTimelineHeadingClasses>;

export type TimelineLineProps = HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof getTimelineLineClasses>;

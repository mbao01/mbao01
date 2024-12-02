import { forwardRef } from "react";
import { Check, Circle, X } from "lucide-react";
import type {
  TimelineContentProps,
  TimelineDotProps,
  TimelineHeadingProps,
  TimelineLineProps,
  TimelineProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getTimelineClasses,
  getTimelineContentClasses,
  getTimelineDotClasses,
  getTimelineHeadingClasses,
  getTimelineItemClasses,
  getTimelineLineClasses,
} from "./constants";
import { TimelineItemProps } from "./types";

const Timeline = ({ children, className, positions, ...props }: TimelineProps) => {
  return (
    <ul className={cn(getTimelineClasses({ positions }), className)} {...props}>
      {children}
    </ul>
  );
};
Timeline.displayName = "Timeline";

const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, variant, ...props }, ref) => (
    <li className={cn(getTimelineItemClasses({ variant }), className)} ref={ref} {...props} />
  )
);
TimelineItem.displayName = "TimelineItem";

const TimelineDot = forwardRef<HTMLDivElement, TimelineDotProps>(
  ({ className, fill = false, border, status, variant, icon, ...props }, ref) => (
    <div
      role="status"
      className={cn(
        getTimelineDotClasses({ fill, border, status: icon ? "custom" : status, variant }),
        className
      )}
      ref={ref}
      {...props}
    >
      <Circle className="size-2.5" />
      <Check className="size-3" />
      <X className="size-3" />
      {icon}
    </div>
  )
);
TimelineDot.displayName = "TimelineDot";

const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, side, ...props }, ref) => (
    <div className={cn(getTimelineContentClasses({ side }), className)} ref={ref} {...props} />
  )
);
TimelineContent.displayName = "TimelineContent";

const TimelineHeading = forwardRef<HTMLParagraphElement, TimelineHeadingProps>(
  ({ className, side, size, variant, ...props }, ref) => (
    <p
      role="heading"
      aria-level={variant === "primary" ? 2 : 3}
      className={cn(getTimelineHeadingClasses({ side, size, variant }), className)}
      ref={ref}
      {...props}
    />
  )
);
TimelineHeading.displayName = "TimelineHeading";

const TimelineLine = forwardRef<HTMLHRElement, TimelineLineProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <hr
        role="separator"
        aria-orientation="vertical"
        className={cn(getTimelineLineClasses({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
TimelineLine.displayName = "TimelineLine";

Timeline.Dot = TimelineDot;
Timeline.Item = TimelineItem;
Timeline.Content = TimelineContent;
Timeline.Heading = TimelineHeading;
Timeline.Line = TimelineLine;

export { Timeline };

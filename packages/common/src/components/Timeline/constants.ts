import { cva } from "../../libs";

export const getTimelineClasses = cva("grid", {
  variants: {
    positions: {
      left: "[&>li]:grid-cols-[0_min-content_1fr]",
      right: "[&>li]:grid-cols-[1fr_min-content]",
      center: "[&>li]:grid-cols-[1fr_min-content_1fr]",
    },
  },
  defaultVariants: {
    positions: "left",
  },
});

export const getTimelineItemClasses = cva("grid items-center gap-x-2", {
  variants: {
    variant: {
      info: "text-info",
      error: "text-error",
      success: "text-success",
      warning: "text-warning",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      neutral: "text-neutral",
      content: "text-base-content",
    },
  },
});

export const getTimelineDotClasses = cva(
  "timeline-dot col-start-2 col-end-3 row-start-1 row-end-1 flex size-4 items-center justify-center rounded-full border",
  {
    variants: {
      status: {
        default: "[&>*]:hidden",
        active: "[&>*:not(.lucide-circle)]:hidden",
        success: "[&>*:not(.lucide-check)]:hidden",
        failed:
          "border-destructive bg-destructive [&>*:not(.lucide-x)]:hidden [&>.lucide-x]:text-background",
        custom: "[&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block",
      },
      fill: {
        true: "",
        false: "border-current",
      },
      variant: {
        info: "[&>.lucide-check]:text-info [&>.lucide-circle]:text-info [&>.lucide-x]:text-info",
        error:
          "[&>.lucide-check]:text-error [&>.lucide-circle]:text-error [&>.lucide-x]:text-error",
        success:
          "[&>.lucide-check]:text-success [&>.lucide-circle]:text-success [&>.lucide-x]:text-success",
        warning:
          "[&>.lucide-check]:text-warning [&>.lucide-circle]:text-warning [&>.lucide-x]:text-warning",
        primary:
          "[&>.lucide-check]:text-primary [&>.lucide-circle]:text-primary [&>.lucide-x]:text-primary",
        secondary:
          "[&>.lucide-check]:text-secondary [&>.lucide-circle]:text-secondary [&>.lucide-x]:text-secondary",
        accent:
          "[&>.lucide-check]:text-accent [&>.lucide-circle]:text-accent [&>.lucide-x]:text-accent",
        neutral:
          "[&>.lucide-check]:text-neutral [&>.lucide-circle]:text-neutral [&>.lucide-x]:text-neutral",
        content:
          "[&>.lucide-check]:text-base-content [&>.lucide-circle]:text-base-content [&>.lucide-x]:text-base-content",
      },
    },
    defaultVariants: {
      status: "default",
    },
    compoundVariants: [
      {
        variant: undefined,
        className:
          "border-current [&>.lucide-check]:text-current [&>.lucide-circle]:fill-current [&>.lucide-circle]:text-current [&>.lucide-x]:fill-current [&>.lucide-x]:text-current",
      },
      {
        fill: true,
        variant: "info",
        className:
          "border-info bg-info [&>.lucide-check]:text-info-content [&>.lucide-circle]:text-info-content [&>.lucide-x]:text-info-content",
      },
      {
        fill: true,
        variant: "error",
        className:
          "border-error bg-error [&>.lucide-check]:text-error-content [&>.lucide-circle]:text-error-content [&>.lucide-x]:text-error-content",
      },
      {
        fill: true,
        variant: "success",
        className:
          "border-success bg-success [&>.lucide-check]:text-success-content [&>.lucide-circle]:text-success-content [&>.lucide-x]:text-success-content",
      },
      {
        fill: true,
        variant: "warning",
        className:
          "border-warning bg-warning [&>.lucide-check]:text-warning-content [&>.lucide-circle]:text-warning-content [&>.lucide-x]:text-warning-content",
      },
      {
        fill: true,
        variant: "primary",
        className:
          "border-primary bg-primary [&>.lucide-check]:text-primary-content [&>.lucide-circle]:text-primary-content [&>.lucide-x]:text-primary-content",
      },
      {
        fill: true,
        variant: "secondary",
        className:
          "border-secondary bg-secondary [&>.lucide-check]:text-secondary-content [&>.lucide-circle]:text-secondary-content [&>.lucide-x]:text-secondary-content",
      },
      {
        fill: true,
        variant: "accent",
        className:
          "border-accent bg-accent [&>.lucide-check]:text-accent-content [&>.lucide-circle]:text-accent-content [&>.lucide-x]:text-accent-content",
      },
      {
        fill: true,
        variant: "neutral",
        className:
          "border-neutral bg-neutral [&>.lucide-check]:text-neutral-content [&>.lucide-circle]:text-neutral-content [&>.lucide-x]:text-neutral-content",
      },
      {
        fill: true,
        variant: "content",
        className:
          "border-base-100 bg-base-100 [&>.lucide-check]:text-base-content [&>.lucide-circle]:text-base-content [&>.lucide-x]:text-base-content",
      },
    ],
  }
);

export const getTimelineContentClasses = cva("row-start-2 row-end-2 pb-8 text-muted-foreground", {
  variants: {
    side: {
      right: "col-start-3 col-end-4 mr-auto text-left",
      left: "col-start-1 col-end-2 ml-auto text-right",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export const getTimelineHeadingClasses = cva(
  "row-start-1 row-end-1 line-clamp-1 max-w-full truncate",
  {
    variants: {
      side: {
        right: "col-start-3 col-end-4 mr-auto text-left",
        left: "col-start-1 col-end-2 ml-auto text-right",
      },
      variant: {
        info: "text-info",
        error: "text-error",
        success: "text-success",
        warning: "text-warning",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        neutral: "text-neutral",
        content: "text-base-content",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

export const getTimelineLineClasses = cva(
  "bg-base-300 border-none col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-0.5 justify-center rounded-full",
  {
    variants: {
      variant: {
        info: "bg-info",
        error: "bg-error",
        success: "bg-success",
        warning: "bg-warning",
        primary: "bg-primary",
        secondary: "bg-secondary",
        accent: "bg-accent",
        neutral: "bg-neutral",
        content: "bg-base-content",
      },
    },
  }
);

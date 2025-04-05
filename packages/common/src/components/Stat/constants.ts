import { cva } from "../../libs";

export const getStatsClasses = cva("stats", {
  variants: {
    direction: {
      horizontal: "stats-horizontal",
      vertical: "stats-vertical",
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

export const getStatClasses = cva("stat", {
  variants: {
    position: {
      center: "place-items-center",
      start: "place-items-start",
      end: "place-items-end",
    },
  },
});

export const getStatTitleClasses = cva("stat-title");

export const getStatValueClasses = cva("stat-value");

export const getStatDescriptionClasses = cva("stat-desc");

export const getStatFigureClasses = cva("stat-figure");

export const getStatActionsClasses = cva("stat-actions");

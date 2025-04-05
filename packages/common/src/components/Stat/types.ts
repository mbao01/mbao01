import React from "react";
import { type VariantProps } from "../../libs";
import {
  getStatActionsClasses,
  getStatClasses,
  getStatDescriptionClasses,
  getStatFigureClasses,
  getStatsClasses,
  getStatTitleClasses,
  getStatValueClasses,
} from "./constants";

export type StatsProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatsClasses>;

export type StatProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof getStatClasses>;

export type StatActionsProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatActionsClasses>;

export type StatDescriptionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatDescriptionClasses>;

export type StatFigureProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatFigureClasses>;

export type StatTitleProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatTitleClasses>;

export type StatValueProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getStatValueClasses>;

import type {
  StatActionsProps,
  StatDescriptionProps,
  StatFigureProps,
  StatProps,
  StatsProps,
  StatTitleProps,
  StatValueProps,
} from "./types";
import { cn } from "../../utilities";
import {
  getStatActionsClasses,
  getStatClasses,
  getStatDescriptionClasses,
  getStatFigureClasses,
  getStatsClasses,
  getStatTitleClasses,
  getStatValueClasses,
} from "./constants";

const Stats = ({ direction, className, ...props }: StatsProps) => (
  <div className={cn(getStatsClasses({ direction }), className)} {...props} />
);

const Stat = ({ className, position, ...props }: StatProps) => (
  <div className={cn(getStatClasses({ position }), className)} {...props} />
);

const StatTitle = ({ className, ...props }: StatTitleProps) => (
  <div className={cn(getStatTitleClasses(), className)} {...props} />
);

const StatValue = ({ className, ...props }: StatValueProps) => (
  <div className={cn(getStatValueClasses(), className)} {...props} />
);

const StatDescription = ({ className, ...props }: StatDescriptionProps) => (
  <div className={cn(getStatDescriptionClasses(), className)} {...props} />
);

const StatFigure = ({ className, ...props }: StatFigureProps) => (
  <div className={cn(getStatFigureClasses(), className)} {...props} />
);

const StatActions = ({ className, ...props }: StatActionsProps) => (
  <div className={cn(getStatActionsClasses(), className)} {...props} />
);

Stat.Actions = StatActions;
Stat.Description = StatDescription;
Stat.Figure = StatFigure;
Stat.Title = StatTitle;
Stat.Value = StatValue;

export { Stats, Stat };

import { Tooltip } from './Tooltip';
import c from 'clsx';
import type { TooltipPosition, TooltipVariant } from './types';

const TOOLTIP_POSITION = {
  top: c('tooltip-top'),
  right: c('tooltip-right'),
  bottom: c('tooltip-bottom'),
  left: c('tooltip-left'),
} satisfies Record<TooltipPosition, string>;

const TOOLTIP_VARIANTS = {
  accent: c('tooltip-accent'),
  default: c('tooltip-default'),
  error: c('tooltip-error'),
  ghost: c('tooltip-ghost'),
  info: c('tooltip-info'),
  link: c('tooltip-link'),
  neutral: c('tooltip-neutral'),
  primary: c('tooltip-primary'),
  secondary: c('tooltip-secondary'),
  success: c('tooltip-success'),
  warning: c('tooltip-warning'),
} satisfies Record<TooltipVariant, string>;

export const getTooltipClasses = ({
  variant,
  position,
}: {
  variant?: TooltipVariant;
  position?: TooltipPosition;
}) => {
  return c('tooltip', TOOLTIP_VARIANTS[variant!], TOOLTIP_POSITION[position!]);
};

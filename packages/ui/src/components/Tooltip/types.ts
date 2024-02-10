import { type ReactNode } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export type TooltipVariant =
  | 'default'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type TooltipProps = {
  tip: string;
  children: ReactNode;
  variant?: TooltipVariant;
  position?: TooltipPosition;
  className?: string;
};
import c from 'clsx';
import type { TextSize, TextVariant } from './types';

const TEXT_SIZE = {
  xs: c('text-xs'),
  sm: c('text-sm'),
  base: c('text-base'),
  lg: c('text-lg'),
  xl: c('text-xl'),
  '2xl': c('text-2xl'),
  '3xl': c('text-3xl'),
  '4xl': c('text-4xl'),
  '5xl': c('text-5xl'),
} satisfies Record<TextSize, string>;

const TEXT_VARIANT = {
  info: c('text-info'),
  error: c('text-error'),
  success: c('text-success'),
  warning: c('text-warning'),
  primary: c('text-primary'),
  secondary: c('text-secondary'),
  accent: c('text-accent'),
  neutral: c('text-neutral'),
} satisfies Record<TextVariant, string>;

export const getTextClasses = ({ size, variant }: { size?: TextSize; variant?: TextVariant }) => {
  return c(TEXT_VARIANT[variant!], TEXT_SIZE[size!]);
};

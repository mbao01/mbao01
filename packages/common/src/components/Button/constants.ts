import c from 'clsx';
import type { ButtonSize, ButtonVariant } from './types';

const BUTTON_SIZE = {
  xs: c('btn-xs'),
  sm: c('btn-sm'),
  md: c('btn-md'),
  lg: c('btn-lg'),
} satisfies Record<ButtonSize, string>;

const BUTTON_VARIANTS = {
  accent: c('btn-accent'),
  default: c('btn-default'),
  error: c('btn-error'),
  ghost: c('btn-ghost'),
  info: c('btn-info'),
  link: c('btn-link'),
  neutral: c('btn-neutral'),
  primary: c('btn-primary'),
  secondary: c('btn-secondary'),
  success: c('btn-success'),
  warning: c('btn-warning'),
} satisfies Record<ButtonVariant, string>;

export const getButtonClasses = ({
  size,
  wide,
  loading,
  outline,
  variant,
}: {
  size?: ButtonSize;
  wide?: boolean;
  loading?: boolean;
  outline?: boolean;
  variant?: ButtonVariant;
}) => {
  return c('btn', BUTTON_VARIANTS[variant!], BUTTON_SIZE[size!], {
    'btn-outline': outline,
    'btn-wide': wide,
    'relative overflow-hidden': loading,
    'min-h-fit h-10': !size,
  });
};

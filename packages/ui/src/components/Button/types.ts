import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariant =
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

export type ButtonProps = {
  size?: ButtonSize;
  wide?: boolean;
  label: ReactNode;
  loading?: boolean;
  outline?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

export type TextVariant =
  | 'info'
  | 'error'
  | 'success'
  | 'warning'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral';

export type TextProps = {
  as?: TextTag;
  size?: TextSize;
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
};

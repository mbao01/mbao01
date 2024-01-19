import c from 'clsx';
import { LinkVariant } from './types';

const LINK_VARIANTS = {
  accent: c('link-accent'),
  default: c('link-default'),
  error: c('link-error'),
  info: c('link-info'),
  link: c('link-link'),
  neutral: c('link-neutral'),
  primary: c('link-primary'),
  secondary: c('link-secondary'),
  success: c('link-success'),
  warning: c('link-warning'),
} satisfies Record<LinkVariant, string>;

export const getLinkClasses = ({ hover, variant }: { hover?: boolean; variant?: LinkVariant }) => {
  return c('link transition-all', LINK_VARIANTS[variant!], {
    'link-hover': hover,
  });
};

import c from 'clsx';
import { getTooltipClasses } from './constants';
import { type TooltipProps } from './types';

export const Tooltip = ({ tip, children, variant, position, className }: TooltipProps) => {
  return (
    <div className={c(getTooltipClasses({ variant, position }), className)} data-tip={tip}>
      {children}
    </div>
  );
};

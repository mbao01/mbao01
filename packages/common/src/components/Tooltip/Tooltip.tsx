import c from 'clsx';
import { getTooltipClasses } from './constants';
import { type TooltipProps } from './types';

export const Tooltip = ({
  content,
  children,
  variant,
  position,
  className,
  ...props
}: TooltipProps) => {
  return (
    <div
      {...props}
      className={c(getTooltipClasses({ variant, position }), className)}
      data-tip={content}
    >
      {children}
    </div>
  );
};

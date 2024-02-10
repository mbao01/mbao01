import c from 'clsx';
import { createElement } from 'react';
import { type TextProps } from './types';
import { getTextClasses } from './constants';

export const Text = ({ as = 'span', size, variant, children, className }: TextProps) => {
  return createElement(
    as,
    { className: c(getTextClasses({ size, variant }), className) },
    children
  );
};

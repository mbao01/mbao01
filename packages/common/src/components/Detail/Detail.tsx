import { type DetailProps } from './types';

export const Detail = ({ term, children }: DetailProps) => {
  return (
    <dl>
      <dt className="mb-1 py-2 text-sm font-medium">{term}</dt>
      <dd className="text-base">{children}</dd>
    </dl>
  );
};

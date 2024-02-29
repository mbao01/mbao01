export type Size = 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | "full";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: Size;
  height?: Size;
  round?: boolean;
  className?: string;
};

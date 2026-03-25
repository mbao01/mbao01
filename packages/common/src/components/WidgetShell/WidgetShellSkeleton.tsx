import { cn } from "../../utilities";

export type WidgetShellSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Number of skeleton lines to show */
  lines?: number;
  /** Whether to show the header skeleton */
  header?: boolean;
};

const WidgetShellSkeleton = ({
  lines = 3,
  header = true,
  className,
  ...props
}: WidgetShellSkeletonProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-base-100 shadow-sm",
        className
      )}
      {...props}
    >
      {header && (
        <div className="border-b px-4 py-3">
          <span className="skeleton inline-block h-4 w-32 rounded" />
          <span className="skeleton mt-1.5 inline-block h-3 w-48 rounded" />
        </div>
      )}
      <div className="p-4">
        <div className="flex flex-col gap-3" role="status" aria-label="Loading">
          {Array.from({ length: lines }, (_, i) => (
            <span
              key={i}
              className="skeleton h-4 rounded"
              style={{ width: `${100 - i * 15}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

WidgetShellSkeleton.displayName = "WidgetShellSkeleton";

export { WidgetShellSkeleton };

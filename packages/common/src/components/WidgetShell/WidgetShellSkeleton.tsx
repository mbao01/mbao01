import { cn } from "../../utilities";
import { Flex } from "../Flex";
import { Skeleton } from "../Skeleton";

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
    <div className={cn("rounded-lg border bg-base-100 shadow-sm", className)} {...props}>
      {header && (
        <Flex direction="col" gap={2} className="border-b px-4 py-3">
          <Skeleton animate="wave" className="inline-block h-4 w-32 rounded" />
          <Skeleton animate="wave" className="mt-0.5 inline-block h-3 w-48 rounded" />
        </Flex>
      )}
      <div className="p-4">
        <div className="flex flex-col gap-3" role="status" aria-label="Loading">
          {Array.from({ length: lines }, (_, i) => (
            <Skeleton
              animate="wave"
              key={i}
              className="h-4 rounded"
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

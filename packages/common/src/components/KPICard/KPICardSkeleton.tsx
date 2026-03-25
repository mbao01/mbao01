import { cn } from "../../utilities";
import { Skeleton } from "../Skeleton";

export type KPICardSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Whether to show the icon placeholder */
  icon?: boolean;
  /** Whether to show the chart placeholder */
  chart?: boolean;
};

const KPICardSkeleton = ({
  icon = true,
  chart = true,
  className,
  ...props
}: KPICardSkeletonProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-lg border bg-base-100 p-4 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24 rounded" />
        {icon && <Skeleton className="size-8 rounded-md" />}
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-7 w-28 rounded" />
          <Skeleton className="h-3.5 w-20 rounded" />
        </div>
        {chart && <Skeleton className="h-8 w-20 rounded" />}
      </div>
    </div>
  );
};

KPICardSkeleton.displayName = "KPICardSkeleton";

export { KPICardSkeleton };

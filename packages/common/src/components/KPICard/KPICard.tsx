import type { KPICardProps } from "./types";
import { cn } from "../../utilities";
import { TrendBadge } from "../TrendBadge";

const KPICard = ({
  title,
  value,
  change,
  description,
  chart,
  icon,
  className,
  ...props
}: KPICardProps) => {
  return (
    <div
      className={cn(
        "w-full @container/kpicard overflow-hidden rounded-lg border bg-base-100 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="min-w-0 truncate text-sm font-medium text-base-content/60">{title}</span>
        {icon && (
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-base-200/50 text-base-content/60">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="min-w-0 flex flex-col gap-1">
          <span className="truncate text-2xl font-bold tracking-tight">{value}</span>
          <div className="flex items-center gap-2">
            {change !== undefined && <TrendBadge value={change} size="xs" />}
            {description && (
              <span className="truncate text-xs text-base-content/50">{description}</span>
            )}
          </div>
        </div>
        {chart && <div className="shrink-0 @max-[160px]/kpicard:hidden">{chart}</div>}
      </div>
    </div>
  );
};

KPICard.displayName = "KPICard";

export { KPICard };

import { cn } from "../../utilities";
import { Sparkline } from "../Sparkline";
import { TrendBadge } from "../TrendBadge";
import type { KPICardProps } from "./types";

const KPICard = ({
  title,
  value,
  change,
  description,
  sparklineData,
  sparklineColor,
  sparklineFilled = true,
  icon,
  loading = false,
  className,
  ...props
}: KPICardProps) => {
  if (loading) {
    return (
      <div
        className={cn(
          "rounded-lg border bg-base-100 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <span className="skeleton h-4 w-24 rounded" />
          {icon && <span className="skeleton size-8 rounded-md" />}
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="skeleton h-7 w-28 rounded" />
            <span className="skeleton h-3.5 w-20 rounded" />
          </div>
          <span className="skeleton h-8 w-20 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg border bg-base-100 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-base-content/60">{title}</span>
        {icon && (
          <div className="flex size-8 items-center justify-center rounded-md bg-base-200/50 text-base-content/60">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold tracking-tight">{value}</span>
          <div className="flex items-center gap-2">
            {change !== undefined && <TrendBadge value={change} size="xs" />}
            {description && (
              <span className="text-xs text-base-content/50">{description}</span>
            )}
          </div>
        </div>
        {sparklineData && sparklineData.length >= 2 && (
          <Sparkline
            data={sparklineData}
            color={sparklineColor ?? (change !== undefined && change >= 0 ? "oklch(0.7 0.2 150)" : "oklch(0.65 0.25 25)")}
            filled={sparklineFilled}
            width={80}
            height={32}
          />
        )}
      </div>
    </div>
  );
};

KPICard.displayName = "KPICard";

export { KPICard };

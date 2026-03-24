import { cn } from "../../utilities";
import type { StatCardProps } from "./types";

const StatCard = ({
  icon,
  title,
  value,
  description,
  trend,
  trendLabel,
  className,
  ...props
}: StatCardProps) => {
  const isPositive = trend?.startsWith("+");
  const isNegative = trend?.startsWith("-");

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-base-200 bg-base-100 px-6 pb-6 pt-10 shadow-sm",
        icon && "pt-14",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="absolute -top-5 left-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-base-100 shadow-md ring-1 ring-base-200">
            {icon}
          </div>
        </div>
      )}
      <p className="text-sm text-base-content/60">{title}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-base-content">{value}</p>
      {(trend || description) && (
        <p className="mt-2 text-sm text-base-content/60">
          {trend && (
            <span
              className={cn(
                "font-medium",
                isPositive && "text-success",
                isNegative && "text-error"
              )}
            >
              {trend}
            </span>
          )}
          {trend && trendLabel && <span> </span>}
          {trendLabel && <span>{trendLabel}</span>}
          {!trend && !trendLabel && description}
        </p>
      )}
    </div>
  );
};

StatCard.displayName = "StatCard";

export { StatCard };

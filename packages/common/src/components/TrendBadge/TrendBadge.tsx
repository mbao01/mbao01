import { TrendingDownIcon, TrendingUpIcon, MinusIcon } from "lucide-react";
import { cn } from "../../utilities";
import { getTrendBadgeClasses, getTrendIconClasses } from "./constants";
import type { TrendBadgeProps } from "./types";

const TrendBadge = ({
  value,
  className,
  decimalPlaces = 1,
  showPercent = true,
  showIcon = true,
  size = "sm",
  trend: trendOverride,
  ...props
}: TrendBadgeProps) => {
  const trend = trendOverride ?? (value > 0 ? "up" : value < 0 ? "down" : "neutral");
  const absValue = Math.abs(value).toFixed(decimalPlaces);
  const prefix = trend === "up" ? "+" : trend === "down" ? "-" : "";

  const Icon =
    trend === "up" ? TrendingUpIcon : trend === "down" ? TrendingDownIcon : MinusIcon;

  return (
    <span
      className={cn(getTrendBadgeClasses({ trend, size }), className)}
      {...props}
    >
      {showIcon && <Icon className={getTrendIconClasses({ size })} />}
      <span>
        {prefix}
        {absValue}
        {showPercent && "%"}
      </span>
    </span>
  );
};

TrendBadge.displayName = "TrendBadge";

export { TrendBadge };

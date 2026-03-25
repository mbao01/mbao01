import { useMemo } from "react";
import { cn } from "../../utilities";
import { getComparisonBarTrackClasses, getComparisonBarSegmentClasses } from "./constants";
import type { ComparisonBarProps } from "./types";

const DEFAULT_COLORS = [
  "oklch(0.7 0.15 250)",
  "oklch(0.7 0.15 150)",
  "oklch(0.7 0.15 50)",
  "oklch(0.7 0.15 330)",
  "oklch(0.6 0.15 200)",
];

const ComparisonBar = ({
  segments,
  className,
  showLabels = true,
  showValues = false,
  size = "md",
  formatValue = (v) => v.toLocaleString(),
  ...props
}: ComparisonBarProps) => {
  const total = useMemo(() => segments.reduce((sum, s) => sum + s.value, 0), [segments]);

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <div className={getComparisonBarTrackClasses({ size })}>
        {segments.map((segment, i) => {
          const percentage = total > 0 ? (segment.value / total) * 100 : 0;
          return (
            <div
              key={i}
              className={getComparisonBarSegmentClasses()}
              style={{
                width: `${percentage}%`,
                backgroundColor: segment.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
              }}
              title={`${segment.label}: ${formatValue(segment.value)} (${percentage.toFixed(1)}%)`}
            />
          );
        })}
      </div>
      {showLabels && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {segments.map((segment, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: segment.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length] }}
              />
              <span className="text-xs text-base-content/60">{segment.label}</span>
              {showValues && (
                <span className="text-xs font-medium tabular-nums">{formatValue(segment.value)}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ComparisonBar.displayName = "ComparisonBar";

export { ComparisonBar };

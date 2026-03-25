import { useMemo } from "react";
import { cn } from "../../utilities";
import type { MiniStackedBarProps } from "./types";

const DEFAULT_COLORS = [
  "oklch(0.7 0.15 250)",
  "oklch(0.7 0.15 150)",
  "oklch(0.7 0.15 50)",
  "oklch(0.7 0.15 330)",
  "oklch(0.6 0.15 200)",
];

const MiniStackedBar = ({
  segments,
  className,
  height = 8,
  showLabels = false,
  ...props
}: MiniStackedBarProps) => {
  const total = useMemo(() => segments.reduce((sum, s) => sum + s.value, 0), [segments]);

  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      <div className="flex w-full overflow-hidden rounded-full" style={{ height }}>
        {segments.map((seg, i) => {
          const pct = total > 0 ? (seg.value / total) * 100 : 0;
          return (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: `${pct}%`,
                backgroundColor: seg.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
              }}
              title={seg.label ? `${seg.label}: ${pct.toFixed(1)}%` : `${pct.toFixed(1)}%`}
            />
          );
        })}
      </div>
      {showLabels && (
        <div className="flex gap-3">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-1">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: seg.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length] }}
              />
              <span className="text-[10px] text-base-content/60">
                {seg.label ?? `${((seg.value / total) * 100).toFixed(0)}%`}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

MiniStackedBar.displayName = "MiniStackedBar";

export { MiniStackedBar };

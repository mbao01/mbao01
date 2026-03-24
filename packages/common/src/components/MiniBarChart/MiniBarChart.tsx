import { useMemo } from "react";
import { cn } from "../../utilities";
import type { MiniBarChartProps } from "./types";

const MiniBarChart = ({
  data,
  className,
  width = 80,
  height = 32,
  color = "currentColor",
  highlightLast = false,
  gap = 1,
  ...props
}: MiniBarChartProps) => {
  const max = useMemo(() => Math.max(1, ...data), [data]);

  if (data.length === 0) return null;

  const barWidth = (width - (data.length - 1) * gap) / data.length;

  return (
    <div className={cn("inline-flex items-end", className)} {...props}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {data.map((value, i) => {
          const barHeight = (value / max) * (height - 2);
          const x = i * (barWidth + gap);
          const y = height - barHeight;
          const isLast = i === data.length - 1;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={Math.max(barWidth, 1)}
              height={barHeight}
              rx={1}
              fill={color}
              opacity={highlightLast && !isLast ? 0.4 : 1}
            />
          );
        })}
      </svg>
    </div>
  );
};

MiniBarChart.displayName = "MiniBarChart";

export { MiniBarChart };

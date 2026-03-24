import { useMemo } from "react";
import type { MiniAreaChartProps } from "./types";
import { cn } from "../../utilities";

const MiniAreaChart = ({
  data,
  className,
  width = 100,
  height = 32,
  color = "currentColor",
  gradientOpacity = 0.15,
  strokeWidth = 1.5,
  ...props
}: MiniAreaChartProps) => {
  const { linePath, areaPath } = useMemo(() => {
    if (data.length < 2) return { linePath: "", areaPath: "" };
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = strokeWidth;

    const points = data.map((v, i) => ({
      x: pad + (i / (data.length - 1)) * (width - pad * 2),
      y: pad + (height - pad * 2) - ((v - min) / range) * (height - pad * 2),
    }));

    const line = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
    const area = `${line} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

    return { linePath: line, areaPath: area };
  }, [data, width, height, strokeWidth]);
  const randomId = useMemo(() => Math.random().toString(36).slice(2, 8), []);

  if (data.length < 2) return null;

  const gradientId = `mini-area-${randomId}`;

  return (
    <div className={cn("inline-flex items-center", className)} {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={gradientOpacity} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gradientId})`} />
        <path
          d={linePath}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

MiniAreaChart.displayName = "MiniAreaChart";

export { MiniAreaChart };

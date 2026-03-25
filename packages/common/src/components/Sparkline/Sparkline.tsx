import { useMemo } from "react";
import { cn } from "../../utilities";
import type { SparklineProps } from "./types";

const Sparkline = ({
  data,
  className,
  width = 120,
  height = 32,
  color = "currentColor",
  filled = false,
  strokeWidth = 1.5,
  animated = true,
  ...props
}: SparklineProps) => {
  const path = useMemo(() => {
    if (data.length < 2) return "";
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const padding = strokeWidth;
    const plotWidth = width - padding * 2;
    const plotHeight = height - padding * 2;

    const points = data.map((value, i) => ({
      x: padding + (i / (data.length - 1)) * plotWidth,
      y: padding + plotHeight - ((value - min) / range) * plotHeight,
    }));

    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  }, [data, width, height, strokeWidth]);

  const areaPath = useMemo(() => {
    if (!filled || !path) return "";
    const padding = strokeWidth;
    const firstX = padding;
    const lastX = width - padding;
    return `${path} L ${lastX} ${height - padding} L ${firstX} ${height - padding} Z`;
  }, [filled, path, width, height, strokeWidth]);

  const pathLength = useMemo(() => {
    if (data.length < 2) return 0;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const padding = strokeWidth;
    const plotWidth = width - padding * 2;
    const plotHeight = height - padding * 2;

    let length = 0;
    for (let i = 1; i < data.length; i++) {
      const x1 = padding + ((i - 1) / (data.length - 1)) * plotWidth;
      const y1 = padding + plotHeight - ((data[i - 1] - min) / range) * plotHeight;
      const x2 = padding + (i / (data.length - 1)) * plotWidth;
      const y2 = padding + plotHeight - ((data[i] - min) / range) * plotHeight;
      length += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    return Math.ceil(length);
  }, [data, width, height, strokeWidth]);

  if (data.length < 2) return null;

  return (
    <div className={cn("inline-flex items-center", className)} {...props}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        aria-hidden="true"
      >
        {filled && areaPath && (
          <path
            d={areaPath}
            fill={color}
            opacity={0.1}
          />
        )}
        <path
          d={path}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          {...(animated
            ? {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
                style: {
                  animation: `sparkline-draw 1s ease-out forwards`,
                },
              }
            : {})}
        />
        <style>{`
          @keyframes sparkline-draw {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    </div>
  );
};

Sparkline.displayName = "Sparkline";

export { Sparkline };

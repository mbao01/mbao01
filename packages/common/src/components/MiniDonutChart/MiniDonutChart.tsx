import { useMemo } from "react";
import { cn } from "../../utilities";
import type { MiniDonutChartProps } from "./types";

const DEFAULT_COLORS = [
  "oklch(0.7 0.15 250)",
  "oklch(0.7 0.15 150)",
  "oklch(0.7 0.15 50)",
  "oklch(0.7 0.15 330)",
  "oklch(0.6 0.15 200)",
];

const MiniDonutChart = ({
  segments,
  className,
  size = 48,
  thickness = 0.3,
  label,
  ...props
}: MiniDonutChartProps) => {
  const paths = useMemo(() => {
    const total = segments.reduce((sum, s) => sum + s.value, 0);
    if (total === 0) return [];

    const cx = size / 2;
    const cy = size / 2;
    const outerR = size / 2 - 1;
    const innerR = outerR * (1 - thickness);

    let startAngle = -90;
    return segments.map((seg, i) => {
      const sweepAngle = (seg.value / total) * 360;
      const endAngle = startAngle + sweepAngle;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = cx + outerR * Math.cos(startRad);
      const y1 = cy + outerR * Math.sin(startRad);
      const x2 = cx + outerR * Math.cos(endRad);
      const y2 = cy + outerR * Math.sin(endRad);
      const x3 = cx + innerR * Math.cos(endRad);
      const y3 = cy + innerR * Math.sin(endRad);
      const x4 = cx + innerR * Math.cos(startRad);
      const y4 = cy + innerR * Math.sin(startRad);

      const largeArc = sweepAngle > 180 ? 1 : 0;

      const d = [
        `M ${x1} ${y1}`,
        `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}`,
        `L ${x3} ${y3}`,
        `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4}`,
        "Z",
      ].join(" ");

      startAngle = endAngle;

      return {
        d,
        color: seg.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length],
        title: seg.label ? `${seg.label}: ${seg.value}` : undefined,
      };
    });
  }, [segments, size, thickness]);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} {...props}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {paths.map((p, i) => (
          <path key={i} d={p.d} fill={p.color}>
            {p.title && <title>{p.title}</title>}
          </path>
        ))}
      </svg>
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold tabular-nums">
          {label}
        </span>
      )}
    </div>
  );
};

MiniDonutChart.displayName = "MiniDonutChart";

export { MiniDonutChart };

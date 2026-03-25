import { useMemo } from "react";
import { cn } from "../../utilities";
import type { CalendarHeatmapProps } from "./types";

const DEFAULT_COLORS: [string, string, string, string, string] = [
  "oklch(0.9 0.02 250)",
  "oklch(0.8 0.08 250)",
  "oklch(0.7 0.12 250)",
  "oklch(0.6 0.16 250)",
  "oklch(0.5 0.2 250)",
];

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const CalendarHeatmap = ({
  data,
  className,
  startDate,
  endDate,
  colors = DEFAULT_COLORS,
  cellSize = 12,
  cellGap = 2,
  showMonthLabels = true,
  showDayLabels = true,
  formatTooltip = (date, value) => `${date}: ${value}`,
  ...props
}: CalendarHeatmapProps) => {
  const { weeks, monthPositions, maxValue } = useMemo(() => {
    const end = endDate ?? new Date();
    const start = startDate ?? new Date(end.getFullYear() - 1, end.getMonth(), end.getDate() + 1);

    const dataMap = new Map(data.map((d) => [d.date, d.value]));
    const max = Math.max(1, ...data.map((d) => d.value));

    const weeksArr: { date: string; value: number; day: number }[][] = [];
    const months: { label: string; x: number }[] = [];
    let currentWeek: { date: string; value: number; day: number }[] = [];
    let lastMonth = -1;

    const cursor = new Date(start);
    // Align to Sunday
    while (cursor.getDay() !== 0) {
      cursor.setDate(cursor.getDate() - 1);
    }

    while (cursor <= end) {
      const dateStr = cursor.toISOString().split("T")[0];
      const day = cursor.getDay();
      const month = cursor.getMonth();

      if (day === 0 && currentWeek.length > 0) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }

      if (month !== lastMonth) {
        months.push({ label: MONTH_LABELS[month], x: weeksArr.length });
        lastMonth = month;
      }

      currentWeek.push({
        date: dateStr,
        value: dataMap.get(dateStr) ?? 0,
        day,
      });

      cursor.setDate(cursor.getDate() + 1);
    }
    if (currentWeek.length > 0) weeksArr.push(currentWeek);

    return { weeks: weeksArr, monthPositions: months, maxValue: max };
  }, [data, startDate, endDate]);

  const getColor = (value: number) => {
    if (value === 0) return "oklch(0.95 0 0)";
    const level = Math.min(4, Math.floor((value / maxValue) * 4));
    return colors[level];
  };

  const labelWidth = showDayLabels ? 28 : 0;

  return (
    <div className={cn("inline-flex flex-col gap-1", className)} {...props}>
      {showMonthLabels && (
        <div className="flex" style={{ paddingLeft: labelWidth }}>
          {monthPositions.map((m, i) => (
            <span
              key={i}
              className="text-[10px] text-base-content/50"
              style={{
                position: "relative",
                left: m.x * (cellSize + cellGap),
                width: 0,
                whiteSpace: "nowrap",
              }}
            >
              {m.label}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-0">
        {showDayLabels && (
          <div
            className="flex flex-col justify-between shrink-0"
            style={{ width: labelWidth, height: 7 * (cellSize + cellGap) - cellGap }}
          >
            {DAY_LABELS.map((label, i) => (
              <span key={i} className="text-[10px] text-base-content/50 leading-none" style={{ height: cellSize }}>
                {label}
              </span>
            ))}
          </div>
        )}
        <div className="flex" style={{ gap: cellGap }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col" style={{ gap: cellGap }}>
              {week.map((cell) => (
                <div
                  key={cell.date}
                  className="rounded-[2px] transition-colors duration-150"
                  style={{
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: getColor(cell.value),
                  }}
                  title={formatTooltip(cell.date, cell.value)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CalendarHeatmap.displayName = "CalendarHeatmap";

export { CalendarHeatmap };

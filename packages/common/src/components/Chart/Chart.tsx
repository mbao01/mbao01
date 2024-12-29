"use client";

import { forwardRef, useId } from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "../../utilities";
import { ChartContext } from "./ChartContext";
import { ChartStyle } from "./components";
import { getChartClasses } from "./constants";
import { type ChartProps } from "./types";

export const Chart = forwardRef<HTMLDivElement, ChartProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div ref={ref} data-chart={chartId} className={cn(getChartClasses(), className)} {...props}>
          <ChartStyle id={chartId} config={config} />
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
);
Chart.displayName = "Chart";

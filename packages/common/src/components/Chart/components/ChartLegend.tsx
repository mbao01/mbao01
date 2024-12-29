"use client";

import { forwardRef } from "react";
import { Legend } from "recharts";
import type { ChartLegendContentProps } from "../types";
import { cn } from "../../../utilities";
import {
  getChartLegendContainerClasses,
  getChartLegendItemClasses,
  getChartLegendMarkerClasses,
} from "../constants";
import { getPayloadConfigFromPayload } from "../helpers";
import { useChart } from "../hooks";

export const ChartLegend = Legend;
ChartLegend.displayName = "ChartLegend";

export const ChartLegendContent = forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div ref={ref} className={cn(getChartLegendContainerClasses({ verticalAlign }), className)}>
        {payload.map((item) => {
          const key = `${nameKey ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={item.value} className={getChartLegendItemClasses()}>
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  style={{ backgroundColor: item.color }}
                  className={getChartLegendMarkerClasses()}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";

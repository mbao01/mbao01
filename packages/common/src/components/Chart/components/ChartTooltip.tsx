"use client";

import { forwardRef, useMemo } from "react";
import { Tooltip } from "recharts";
import type { ChartTooltipContentProps } from "../types";
import { cn } from "../../../utilities";
import {
  getChartTooltipContainerClasses,
  getChartTooltipItemClasses,
  getChartTooltipItemIndicatorClasses,
  getChartTooltipItemLabelClasses,
  getChartTooltipItemValueClasses,
} from "../constants";
import { getPayloadConfigFromPayload } from "../helpers";
import { useChart } from "../hooks";

export const ChartTooltip = Tooltip;
ChartTooltip.displayName = "ChartTooltip";

export const ChartTooltipContent = forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div ref={ref} className={cn(getChartTooltipContainerClasses(), className)}>
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div key={item.dataKey} className={getChartTooltipItemClasses({ indicator })}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={getChartTooltipItemIndicatorClasses({ indicator, nestLabel })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div className={getChartTooltipItemLabelClasses({ nestLabel })}>
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span>{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className={getChartTooltipItemValueClasses()}>
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

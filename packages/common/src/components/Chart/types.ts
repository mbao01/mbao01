import type { ComponentProps, ComponentType, ReactNode } from "react";
import { LegendProps, ResponsiveContainer, Tooltip } from "recharts";
import { type Theme } from "../../utilities";

export type ChartConfig = {
  [k in string]: {
    label?: ReactNode;
    icon?: ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<Theme, string> });
};

export type ChartContextProps = {
  config: ChartConfig;
};

export type ChartProps = ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<typeof ResponsiveContainer>["children"];
};

export type ChartStyleProps = {
  id: string;
  config: ChartConfig;
};

export type ChartTooltipContentProps = ComponentProps<typeof Tooltip> &
  ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  };

export type ChartLegendContentProps = ComponentProps<"div"> &
  Pick<LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
  };

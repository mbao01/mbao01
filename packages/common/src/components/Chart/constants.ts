import type { Theme } from "../../utilities";
import { cva } from "../../libs";

export const THEMES = {
  light: "",
  dark: ".dark",
} satisfies Record<Theme, string>;

export const getChartClasses = cva(
  "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-base-content [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-base-content/20 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-base-content [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-base-content [&_.recharts-radial-bar-background-sector]:fill-primary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-base-content [&_.recharts-reference-line_[stroke='#ccc']]:stroke-base-content [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none"
);

export const getChartLegendContainerClasses = cva("flex items-center justify-center gap-4", {
  variants: {
    verticalAlign: {
      top: "pb-3",
      bottom: "pt-3",
      middle: "",
    },
  },
});

export const getChartLegendItemClasses = cva("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3");

export const getChartLegendMarkerClasses = cva("h-2 w-2 shrink-0 rounded-[2px]");

export const getChartTooltipContainerClasses = cva(
  "grid min-w-[8rem] items-start gap-1.5 rounded-md border border-border/50 bg-base-100 px-2.5 py-1.5 text-xs shadow-xl"
);

export const getChartTooltipItemClasses = cva(
  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
  {
    variants: {
      indicator: {
        dot: "items-center",
        line: "",
        dashed: "",
      },
    },
  }
);

export const getChartTooltipItemLabelClasses = cva(
  "flex flex-1 justify-between leading-none items-center",
  {
    variants: {
      nestLabel: {
        true: "items-end",
      },
    },
  }
);

export const getChartTooltipItemValueClasses = cva("font-mono font-medium tabular-nums");

export const getChartTooltipItemIndicatorClasses = cva(
  "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
  {
    variants: {
      indicator: {
        dot: "h-2.5 w-2.5",
        line: "w-1",
        dashed: "w-0 border-[1.5px] border-dashed bg-transparent",
      },
      nestLabel: {
        true: "",
      },
    },
    compoundVariants: [
      {
        indicator: "dashed",
        nestLabel: true,
        className: "my-0.5",
      },
    ],
  }
);

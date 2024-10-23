import { type Payload as LegendPayload } from "recharts/types/component/DefaultLegendContent";
import { type Payload as TooltipPayload } from "recharts/types/component/DefaultTooltipContent";
import { type ChartConfig } from "./types";

// Helper to extract item config from a payload.
export const getPayloadConfigFromPayload = (
  config: ChartConfig,
  payload: LegendPayload | TooltipPayload<any, any>,
  key: string
) => {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
};

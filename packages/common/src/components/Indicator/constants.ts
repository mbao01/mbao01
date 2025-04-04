import { cva } from "../../libs";
import { cn } from "../../utilities";

export const getIndicatorClasses = cva("indicator");

export const getIndicatorItemClasses = cva("indicator-item");

const INDICATOR_POSITION_CLASS = {
  center: cn("indicator-center"),
  middle: cn("indicator-middle"),
  start: cn("indicator-start"),
  end: cn("indicator-end"),
  top: cn("indicator-top"),
  bottom: cn("indicator-bottom"),
};

type IndicatorPosition = keyof typeof INDICATOR_POSITION_CLASS;

export const getIndicatorPositionClasses = ({
  position = [],
}: {
  position: IndicatorPosition | IndicatorPosition[];
}) => {
  const positions = Array.isArray(position) ? position : [position];
  return positions.map((p) => INDICATOR_POSITION_CLASS[p]).join(" ");
};

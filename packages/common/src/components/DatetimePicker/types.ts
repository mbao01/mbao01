import type { Options } from "timescape/react";
import { useTimescape } from "timescape/react";
import { type VariantProps } from "../../libs";
import { getDatetimeGridClasses } from "./constants";

export type DateFormat = "days" | "months" | "years";

export type TimeFormat = "hours" | "minutes" | "seconds" | "am/pm";

type TimescapeReturn = ReturnType<typeof useTimescape>;
type DatetimeArray<T extends DateFormat | TimeFormat> = T[];

export type DatetimeFormatDefaults =
  | [DatetimeArray<DateFormat>]
  | [DatetimeArray<TimeFormat>]
  | [DatetimeArray<DateFormat>, DatetimeArray<TimeFormat>]
  | [DatetimeArray<TimeFormat>, DatetimeArray<DateFormat>];

export type InputPlaceholders = Record<DateFormat | TimeFormat, string>;

type DatetimeGridVariantProps = VariantProps<typeof getDatetimeGridClasses>;
export type DatetimeGridProps = {
  format: DatetimeFormatDefaults;
  disabled?: boolean;
  className?: string;
  timescape: Pick<TimescapeReturn, "getRootProps" | "getInputProps">;
  placeholders: InputPlaceholders;
} & DatetimeGridVariantProps;

export type DatetimePickerProps = Omit<Options, "onChangeDate"> & {
  format?: DatetimeFormatDefaults;
  disabled?: boolean;
  placeholders?: InputPlaceholders;
  onChange?: Options["onChangeDate"];
  className?: string;
} & DatetimeGridVariantProps;

import { type VariantProps } from "../../../libs";
import { type CalendarProps } from "../../Calendar/types";
import { type InputProps } from "../Input/types";
import { getDatetimeInputContainerClasses } from "./constants";

type DisabledType = { disabled?: boolean };
type VariantType = VariantProps<typeof getDatetimeInputContainerClasses>;
type NaturalLanguageInputType = DisabledType & {
  locale?: Intl.LocalesArgument;
} & Omit<InputProps, "type" | "ref" | "value" | "defaultValue" | "onBlur" | "disabled">;
type CalendarType = Omit<CalendarProps, "mode" | "disabled">;

export type DatetimeInputProps = NaturalLanguageInputType &
  VariantType & {
    date?: Date;
    calendar?: CalendarType;
    defaultDate?: Date;
    onDateChange?: (date: Date | undefined) => void;
  };

export type DatetimeInputContextProps = {
  value?: Date;
  onDateChange: (date: Date | undefined) => void;
  time: TimeString;
  onTimeChange: (time: TimeString) => void;
};

export type DatetimeCalendarProps = VariantType & CalendarType & DisabledType;

export type NaturalLanguageInputProps = NaturalLanguageInputType;

type Hours = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;
type Minutes = `${0 | 1 | 2 | 3 | 4 | 5}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
type PM_AM = "AM" | "PM";

export type TimeString = `${Hours}:${Minutes} ${PM_AM}` | "";

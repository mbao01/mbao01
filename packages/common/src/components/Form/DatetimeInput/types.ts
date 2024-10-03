import { VariantProps } from "../../../libs";
import { CalendarProps } from "../../Calendar/types";
import { InputProps } from "../Input/types";
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
    onValueChange?: (date: Date | undefined) => void;
  };

export type DatetimeInputContextProps = {
  value?: Date;
  onValueChange: (date: Date | undefined) => void;
  time: string;
  onTimeChange: (time: string) => void;
};

export type DatetimeCalendarProps = VariantType & CalendarType & DisabledType;

export type NaturalLanguageInputProps = NaturalLanguageInputType;

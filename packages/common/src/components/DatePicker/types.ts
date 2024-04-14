import {
  DateRange,
  DayPickerMultipleProps,
  DayPickerRangeProps,
  DayPickerSingleProps,
} from "react-day-picker";
import { ButtonProps } from "../Button/types";

type BaseDatePickerProps = Pick<
  ButtonProps,
  "variant" | "outline" | "wide" | "size" | "name" | "disabled"
> & {
  label?: string;
};

export type DatePickerProps = BaseDatePickerProps &
  Omit<DayPickerSingleProps, "mode" | "selected" | "onSelect"> & {
    children?: ({
      date,
      setDate,
    }: {
      date: Date | undefined;
      setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    }) => JSX.Element | null;
    defaultDate?: Date;
    getDateLabel?: (date: Date | undefined) => string | undefined;
    getDateValue?: (date: Date | undefined) => string | undefined;
  };

export type DateRangePickerProps = BaseDatePickerProps &
  Omit<DayPickerRangeProps, "mode" | "selected" | "onSelect"> & {
    defaultRange?: DateRange;
    getRangeValue?: (range: DateRange | undefined) => {
      from: string | undefined;
      to: string | undefined;
    };
    getRangeLabel?: (
      range: DateRange | undefined
    ) => string | JSX.Element | undefined;
  };

export type MultipleDatesPickerProps = BaseDatePickerProps &
  Omit<DayPickerMultipleProps, "mode" | "selected" | "onSelect"> & {
    defaultDates?: Date[];
    getDatesValue?: (dates: Date[] | undefined) => string[] | undefined;
    getDatesLabel?: (
      dates: Date[] | undefined
    ) => string | JSX.Element | undefined;
  };

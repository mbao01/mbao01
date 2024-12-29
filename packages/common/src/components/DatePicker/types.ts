import type { DateRange, PropsBase, PropsMulti, PropsRange, PropsSingle } from "react-day-picker";
import { type ButtonProps } from "../Button/types";

type BaseDatePickerProps = Omit<PropsBase, "mode"> &
  Pick<ButtonProps, "variant" | "outline" | "wide" | "size" | "name" | "disabled"> & {
    label?: string;
    triggerClassName?: string;
  };

export type DatePickerProps = BaseDatePickerProps &
  Omit<PropsSingle, "mode"> & {
    children?: ({
      date,
      setDate,
    }: {
      date: Date | undefined;
      setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
    }) => React.JSX.Element | null;
    defaultDate?: Date;
    getDateLabel?: (date: Date | undefined) => string | undefined;
    getDateValue?: (date: Date | undefined) => string | undefined;
  };

export type DateRangePickerProps = BaseDatePickerProps &
  Omit<PropsRange, "mode"> & {
    defaultRange?: DateRange;
    getRangeValue?: (range: DateRange | undefined) => {
      from: string | undefined;
      to: string | undefined;
    };
    getRangeLabel?: (range: DateRange | undefined) => string | React.JSX.Element | undefined;
  };

export type MultipleDatesPickerProps = BaseDatePickerProps &
  Omit<PropsMulti, "mode"> & {
    defaultDates?: Date[];
    getDatesValue?: (dates: Date[] | undefined) => string[] | undefined;
    getDatesLabel?: (dates: Date[] | undefined) => string | React.JSX.Element | undefined;
  };

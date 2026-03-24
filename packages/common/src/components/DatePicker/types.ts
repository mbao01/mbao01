import type { DateRange, PropsBase, PropsMulti, PropsRange, PropsSingle } from "react-day-picker";
import { type ButtonProps } from "../Button/types";

type BaseDatePickerProps = Omit<PropsBase, "mode" | "disabled"> &
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
    disabledDates?: PropsBase["disabled"];
    getDateLabel?: (date: Date | undefined) => string | undefined;
    getDateValue?: (date: Date | undefined) => string | undefined;
  };

export type DateRangePickerProps = BaseDatePickerProps &
  Omit<PropsRange, "mode" | "disabled"> & {
    defaultRange?: DateRange;
    disabledDates?: PropsRange["disabled"];
    getRangeValue?: (range: DateRange | undefined) => {
      from: string | undefined;
      to: string | undefined;
    };
    getRangeLabel?: (range: DateRange | undefined) => string | React.JSX.Element | undefined;
  };

export type DateRangePreset = {
  /** Display label for the preset */
  label: string;
  /** Function that returns the date range for this preset */
  range: () => DateRange;
};

export type DateRangePresetPickerProps = BaseDatePickerProps &
  Omit<PropsRange, "mode" | "disabled"> & {
    defaultRange?: DateRange;
    disabledDates?: PropsRange["disabled"];
    /** Preset period options. Defaults to Today, Last 7/30/90 days, This month, This year */
    presets?: DateRangePreset[];
    /** Called when range changes, with optional preset label */
    onRangeChange?: (range: DateRange | undefined, presetLabel?: string) => void;
    getRangeValue?: (range: DateRange | undefined) => {
      from: string | undefined;
      to: string | undefined;
    };
    getRangeLabel?: (range: DateRange | undefined) => string | undefined;
  };

export type MultipleDatesPickerProps = BaseDatePickerProps &
  Omit<PropsMulti, "mode"> & {
    defaultDates?: Date[];
    disabledDates?: PropsBase["disabled"];
    getDatesValue?: (dates: Date[] | undefined) => string[] | undefined;
    getDatesLabel?: (dates: Date[] | undefined) => string | React.JSX.Element | undefined;
  };

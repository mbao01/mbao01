"use client";

import { forwardRef, useCallback } from "react";
import { useTimescape } from "timescape/react";
import type { DatetimePickerProps } from "./types";
import { DEFAULTS, INPUT_PLACEHOLDERS } from "./constants";
import { DatetimeGrid } from "./DatetimeGrid";

export const DatetimePicker = forwardRef<HTMLDivElement, DatetimePickerProps>(
  (
    {
      format = DEFAULTS,
      placeholders,
      onChange,
      className,
      date,
      minDate,
      maxDate,
      hour12 = true,
      digits,
      wrapAround,
      snapToStep,
      ...props
    },
    ref
  ) => {
    const handleDateChange = useCallback(
      (date: Date | undefined) => {
        if (onChange) {
          onChange(date);
        }
      },
      [onChange]
    );
    const timescape = useTimescape({
      date,
      onChangeDate: handleDateChange,
      minDate,
      maxDate,
      hour12,
      digits,
      wrapAround,
      snapToStep,
    });

    return (
      <DatetimeGrid
        format={format}
        className={className}
        timescape={timescape}
        placeholders={placeholders ?? INPUT_PLACEHOLDERS}
        ref={ref}
        {...props}
      />
    );
  }
);

DatetimePicker.displayName = "DatetimePicker";

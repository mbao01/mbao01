"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import type { DatetimeInputProps, TimeString } from "./types";
import { cn } from "../../../utilities";
import { getInputCommonClasses } from "../Input/constants";
import { DatetimeCalendar } from "./DatetimeCalendar";
import { DatetimeInputContext } from "./DatetimeInputContext";
import { getParsedTime, parseDateTime } from "./helpers";
import { NaturalLanguageInput } from "./NaturalLanguageInput";

export const DatetimeInput = forwardRef<HTMLInputElement, DatetimeInputProps>(
  (
    {
      calendar,
      className,
      date,
      defaultDate,
      locale,
      onDateChange,
      placeholder,
      outline,
      disabled,
      size,
      variant,
      wide,
      ...props
    },
    ref
  ) => {
    const [_date, setDate] = useState<Date | undefined>(
      defaultDate ? parseDateTime(defaultDate) : undefined
    );
    const [time, setTime] = useState<TimeString>(defaultDate ? getParsedTime(defaultDate) : "");
    const isControlled = date !== undefined;

    useEffect(() => {
      // sync internal state with controlled value if provided
      if (isControlled) {
        setDate(date);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    const handleDateChange = useCallback((d: Date | undefined) => {
      if (!isControlled) {
        setDate(d);
      }

      onDateChange?.(d);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onTimeChange = useCallback((time: TimeString) => {
      setTime(time);
    }, []);

    return (
      <DatetimeInputContext.Provider
        value={{
          value: isControlled ? date : _date,
          onDateChange: handleDateChange,
          time,
          onTimeChange,
        }}
      >
        <div className="flex items-center justify-center flex-nowrap">
          <div
            className={cn(
              getInputCommonClasses({ outline, disabled, size, variant, wide }),
              className
            )}
          >
            <DatetimeCalendar size={size} disabled={disabled} defaultMonth={_date} {...calendar} />
            <NaturalLanguageInput
              ref={ref}
              size={size}
              locale={locale}
              disabled={disabled}
              placeholder={placeholder}
              {...props}
            />
          </div>
        </div>
      </DatetimeInputContext.Provider>
    );
  }
);

DatetimeInput.displayName = "DatetimeInput";

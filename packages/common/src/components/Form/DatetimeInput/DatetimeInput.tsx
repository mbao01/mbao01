"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import { cn } from "../../../utilities";
import { getDatetimeInputContainerClasses } from "./constants";
import { DatetimeCalendar } from "./DatetimeCalendar";
import { DatetimeInputContext } from "./DatetimeInputContext";
import { NaturalLanguageInput } from "./NaturalLanguageInput";
import { DatetimeInputProps } from "./types";

export const DatetimeInput = forwardRef<HTMLInputElement, DatetimeInputProps>(
  (
    {
      calendar,
      className,
      date,
      defaultDate,
      locale,
      onValueChange,
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
    const [_date, setDate] = useState<Date | undefined>(defaultDate ?? undefined);
    const isControlled = date !== undefined;

    useEffect(() => {
      // sync internal state with controlled value if provided
      if (isControlled) {
        setDate(date);
      }
    }, [date]);

    const handleValueChange = useCallback((d: Date | undefined) => {
      if (!isControlled) {
        setDate(d);
      }

      onValueChange?.(d);
    }, []);

    const [time, setTime] = useState<string>("");

    const onTimeChange = useCallback((time: string) => {
      setTime(time);
    }, []);

    return (
      <DatetimeInputContext.Provider
        value={{
          value: isControlled ? date : _date,
          onValueChange: handleValueChange,
          time,
          onTimeChange,
        }}
      >
        <div className="flex items-center justify-center flex-nowrap">
          <div
            className={cn(
              getDatetimeInputContainerClasses({ outline, disabled, size, variant, wide }),
              className
            )}
          >
            <DatetimeCalendar size={size} disabled={disabled} {...calendar} />
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

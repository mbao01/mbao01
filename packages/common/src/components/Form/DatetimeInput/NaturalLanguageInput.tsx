import type { ChangeEvent, KeyboardEvent } from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { Input } from "../Input";
import { getNaturalLanguageInputClasses } from "./constants";
import { formatDateTime, parseDateTime } from "./helpers";
import { useDateInput } from "./hooks";
import { type NaturalLanguageInputProps } from "./types";

export const NaturalLanguageInput = forwardRef<HTMLInputElement, NaturalLanguageInputProps>(
  ({ placeholder = 'e.g. "tomorrow at 5pm" or "in 2 hours"', size, locale, ...props }, ref) => {
    const { value, onValueChange, time, onTimeChange } = useDateInput();
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
      const hour = new Date().getHours();
      const timeVal = `${
        hour >= 12 ? hour % 12 : hour
      }:${new Date().getMinutes()} ${hour >= 12 ? "PM" : "AM"}`;
      setInputValue(value ? formatDateTime(value, locale) : "");
      onTimeChange(value ? time : timeVal);
    }, [value, time]);

    const handleParse = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value;
        if (!input) {
          onValueChange(undefined);
          onTimeChange("");
          return;
        }

        // parse the date string when the input field loses focus
        const parsedDateTime = parseDateTime(input);
        if (parsedDateTime) {
          const PM_AM = parsedDateTime.getHours() >= 12 ? "PM" : "AM";
          //fix the time format for this value

          const PM_AM_hour = parsedDateTime.getHours();

          const hour =
            PM_AM_hour > 12
              ? PM_AM_hour % 12
              : PM_AM_hour === 0 || PM_AM_hour === 12
                ? 12
                : PM_AM_hour;

          onValueChange(parsedDateTime);
          setInputValue(formatDateTime(parsedDateTime, locale));
          onTimeChange(`${hour}:${parsedDateTime.getMinutes()} ${PM_AM}`);
        }
      },
      [value]
    );

    const handleKeydown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
          case "Enter":
            const parsedDateTime = parseDateTime(e.currentTarget.value);
            if (parsedDateTime) {
              const PM_AM = parsedDateTime.getHours() >= 12 ? "PM" : "AM";
              //fix the time format for this value

              const PM_AM_hour = parsedDateTime.getHours();

              const hour =
                PM_AM_hour > 12
                  ? PM_AM_hour % 12
                  : PM_AM_hour === 0 || PM_AM_hour === 12
                    ? 12
                    : PM_AM_hour;

              onValueChange(parsedDateTime);
              setInputValue(formatDateTime(parsedDateTime, locale));
              onTimeChange(`${hour}:${parsedDateTime.getMinutes()} ${PM_AM}`);
            }
            break;
        }
      },
      [value]
    );

    return (
      <Input
        ref={ref}
        type="text"
        size={size}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={handleKeydown}
        onBlur={handleParse}
        className={getNaturalLanguageInputClasses({ size })}
        {...props}
      />
    );
  }
);

NaturalLanguageInput.displayName = "NaturalLanguageInput";

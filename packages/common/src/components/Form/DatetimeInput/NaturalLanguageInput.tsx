import type { ChangeEvent, KeyboardEvent } from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { Input } from "../Input";
import { getNaturalLanguageInputClasses } from "./constants";
import { formatDateTime, getParsedTime, parseDateTime, setDateTime } from "./helpers";
import { useDateInput } from "./hooks";
import { type NaturalLanguageInputProps } from "./types";

export const NaturalLanguageInput = forwardRef<HTMLInputElement, NaturalLanguageInputProps>(
  ({ placeholder = 'e.g. "tomorrow at 5pm" or "in 2 hours"', size, locale, ...props }, ref) => {
    const { value, onDateChange, time, onTimeChange } = useDateInput();
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
      const timeVal = time || getParsedTime(new Date());
      setInputValue(value ? formatDateTime(setDateTime(value, timeVal), locale) : "");
      onTimeChange(timeVal);
    }, [value, time]);

    const handleParse = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.currentTarget.value;
        if (!input) {
          onDateChange(undefined);
          onTimeChange("");
          return;
        }

        // parse the date string when the input field loses focus
        const parsedDateTime = parseDateTime(input);
        if (parsedDateTime) {
          onDateChange(parsedDateTime);
          setInputValue(formatDateTime(parsedDateTime, locale));
          onTimeChange(getParsedTime(parsedDateTime));
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
              onDateChange(parsedDateTime);
              setInputValue(formatDateTime(parsedDateTime, locale));
              onTimeChange(getParsedTime(parsedDateTime));
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

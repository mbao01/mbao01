import type { KeyboardEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../../../utilities";
import { ScrollArea } from "../../ScrollArea";
import {
  DEFAULT_SIZE,
  getTimePickerClasses,
  getTimePickerListClasses,
  getTimePickerScrollAreaClasses,
} from "./constants";
import { parseDateTime, setDateTime } from "./helpers";
import { useDateInput } from "./hooks";
import { type TimeString } from "./types";

export const TimePicker = () => {
  const { value, onDateChange, time, onTimeChange } = useDateInput();
  const [activeIndex, setActiveIndex] = useState(-1);
  const timestamp = 15;

  const formateSelectedTime = useCallback(
    (time: TimeString) => {
      onTimeChange(time);

      const newVal = parseDateTime(value ?? new Date());

      if (!newVal) return;

      onDateChange(setDateTime(newVal, time));
    },
    [value, onDateChange, onTimeChange]
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!document) return;

      const moveNext = () => {
        const nextIndex = activeIndex + 1 > DEFAULT_SIZE - 1 ? 0 : activeIndex + 1;

        const currentElm = document.getElementById(`time-${nextIndex}`);

        currentElm?.focus();

        setActiveIndex(nextIndex);
      };

      const movePrev = () => {
        const prevIndex = activeIndex - 1 < 0 ? DEFAULT_SIZE - 1 : activeIndex - 1;

        const currentElm = document.getElementById(`time-${prevIndex}`);

        currentElm?.focus();

        setActiveIndex(prevIndex);
      };

      const setElement = () => {
        const currentElm = document.getElementById(`time-${activeIndex}`);

        if (!currentElm) return;

        currentElm.focus();

        formateSelectedTime((currentElm.textContent ?? "") as TimeString);
      };

      const reset = () => {
        const currentElm = document.getElementById(`time-${activeIndex}`);
        currentElm?.blur();
        setActiveIndex(-1);
      };

      switch (e.key) {
        case "ArrowUp":
          movePrev();
          break;

        case "ArrowDown":
          moveNext();
          break;

        case "Escape":
          reset();
          break;

        case "Enter":
          setElement();
          break;
      }
    },
    [activeIndex, formateSelectedTime]
  );

  const handleClick = useCallback(
    (time: TimeString, currentIndex: number) => {
      formateSelectedTime(time);
      setActiveIndex(currentIndex);
    },
    [formateSelectedTime]
  );

  const currentTime = useMemo(() => {
    const timeVal = time.split(" ")[0];
    return {
      hours: parseInt(timeVal.split(":")[0]),
      minutes: parseInt(timeVal.split(":")[1]),
    };
  }, [time]);

  useEffect(() => {
    const getCurrentElementTime = () => {
      const timeVal = time.split(" ")[0];
      const hours = parseInt(timeVal.split(":")[0]);
      const minutes = parseInt(timeVal.split(":")[1]);
      const PM_AM = time.split(" ")[1];

      const formatIndex = PM_AM === "AM" ? hours : hours === 12 ? hours : hours + 12;
      const formattedHours = formatIndex;

      for (let j = 0; j <= 3; j++) {
        const diff = Math.abs(j * timestamp - minutes);
        const selected =
          PM_AM === (formattedHours >= 12 ? "PM" : "AM") &&
          (minutes <= 53 ? diff < Math.ceil(timestamp / 2) : diff < timestamp);

        if (selected) {
          const trueIndex = activeIndex === -1 ? formattedHours * 4 + j : activeIndex;

          setActiveIndex(trueIndex);

          const currentElm = document.getElementById(`time-${trueIndex}`);
          currentElm?.scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }
      }
    };

    getCurrentElementTime();
  }, [time, activeIndex]);

  const height = useMemo(() => {
    if (!document) return;
    const calendarElm = document.getElementById("calendar");
    if (!calendarElm) return;
    return calendarElm.style.height;
  }, []);

  return (
    <div className="space-y-2 pr-3 py-3 relative ">
      <h3 className="text-sm font-medium ">Time</h3>
      <ScrollArea
        onKeyDown={handleKeydown}
        className={cn(getTimePickerScrollAreaClasses())}
        style={{ height }}
      >
        <ul className={cn(getTimePickerListClasses())}>
          {Array.from({ length: 24 }).map((_, i) => {
            const PM_AM = i >= 12 ? "PM" : "AM";
            const formatIndex = i > 12 ? i % 12 : i === 0 || i === 12 ? 12 : i;
            return Array.from({ length: 4 }).map((_, part) => {
              const diff = Math.abs(part * timestamp - currentTime.minutes);

              const trueIndex = i * 4 + part;

              // ? refactor : add the select of the default time on the current device (H:MM)
              const isSelected =
                (currentTime.hours === i || currentTime.hours === formatIndex) &&
                time.split(" ")[1] === PM_AM &&
                (currentTime.minutes <= 53 ? diff < Math.ceil(timestamp / 2) : diff < timestamp);

              const isSuggested = !value && isSelected;

              const currentValue = `${formatIndex}:${
                part === 0 ? "00" : timestamp * part
              } ${PM_AM}` as TimeString;

              return (
                <li
                  tabIndex={isSelected ? 0 : -1}
                  id={`time-${trueIndex}`}
                  key={`time-${trueIndex}`}
                  aria-label={currentValue}
                  className={cn(
                    getTimePickerClasses({ selected: isSelected, suggested: isSuggested })
                  )}
                  onClick={() => handleClick(currentValue, trueIndex)}
                  onFocus={() => isSuggested && setActiveIndex(trueIndex)}
                >
                  {currentValue}
                </li>
              );
            });
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

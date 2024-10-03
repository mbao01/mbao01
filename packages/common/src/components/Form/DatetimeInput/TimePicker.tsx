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
import { parseDateTime } from "./helpers";
import { useDateInput } from "./hooks";

export const TimePicker = () => {
  const { value, onValueChange, time, onTimeChange } = useDateInput();
  const [activeIndex, setActiveIndex] = useState(-1);
  const timestamp = 15;

  const formateSelectedTime = useCallback(
    (time: string, hour: number, partStamp: number) => {
      onTimeChange(time);

      const newVal = parseDateTime(value ?? new Date());

      if (!newVal) return;

      newVal.setHours(hour, partStamp === 0 ? parseInt("00") : timestamp * partStamp);

      // ? refactor needed check if we want to use the new date

      onValueChange(newVal);
    },
    [value]
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

        const timeValue = currentElm.textContent ?? "";

        // this should work now haha that hour is what does the trick

        const PM_AM = timeValue.split(" ")[1];
        const PM_AM_hour = parseInt(timeValue.split(" ")[0].split(":")[0]);
        const hour =
          PM_AM === "AM"
            ? PM_AM_hour === 12
              ? 0
              : PM_AM_hour
            : PM_AM_hour === 12
              ? 12
              : PM_AM_hour + 12;

        const part = Math.floor(parseInt(timeValue.split(" ")[0].split(":")[1]) / 15);

        formateSelectedTime(timeValue, hour, part);
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
    (hour: number, part: number, PM_AM: string, currentIndex: number) => {
      formateSelectedTime(`${hour}:${part === 0 ? "00" : timestamp * part} ${PM_AM}`, hour, part);
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
              } ${PM_AM}`;

              return (
                <li
                  tabIndex={isSelected ? 0 : -1}
                  id={`time-${trueIndex}`}
                  key={`time-${trueIndex}`}
                  aria-label="currentTime"
                  className={cn(
                    getTimePickerClasses({ selected: isSelected, suggested: isSuggested })
                  )}
                  onClick={() => handleClick(i, part, PM_AM, trueIndex)}
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

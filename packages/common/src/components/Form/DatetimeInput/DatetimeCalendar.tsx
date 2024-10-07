import { useCallback } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "../../../utilities";
import { Button } from "../../Button";
import { Calendar } from "../../Calendar";
import { Popover } from "../../Popover";
import {
  getDatetimeCalendarClasses,
  getDatetimeCalendarIconClasses,
  getDatetimeCalendarTriggerClasses,
} from "./constants";
import { parseDateTime } from "./helpers";
import { useDateInput } from "./hooks";
import { TimePicker } from "./TimePicker";
import { type DatetimeCalendarProps } from "./types";

export const DatetimeCalendar = ({
  size,
  disabled,
  className,
  ...props
}: DatetimeCalendarProps) => {
  const { value, onDateChange, time } = useDateInput();

  const handleSelect = useCallback(
    (_: Date | undefined, triggerDate: Date) => {
      const parsedDateTime = parseDateTime(triggerDate);

      if (parsedDateTime) {
        const [hours, minutes] = time.split(":");
        parsedDateTime.setHours(parseInt(hours) || 0, parseInt(minutes) || 0);
        onDateChange(parsedDateTime);
      }
    },
    [time, onDateChange]
  );

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          variant="default"
          disabled={disabled}
          className={cn(getDatetimeCalendarTriggerClasses({ size }))}
        >
          <CalendarIcon className={getDatetimeCalendarIconClasses({ size })} />
          <span className="sr-only">calendar</span>
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" sideOffset={8}>
        <div className="flex gap-1">
          <Calendar
            {...props}
            autoFocus
            disabled={disabled}
            className={cn(getDatetimeCalendarClasses(), className)}
            mode="single"
            selected={value}
            onSelect={handleSelect}
          />
          <TimePicker />
        </div>
      </Popover.Content>
    </Popover>
  );
};

DatetimeCalendar.displayName = "DatetimeCalendar";

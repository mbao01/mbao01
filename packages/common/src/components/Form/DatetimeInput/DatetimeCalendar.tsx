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
  className,
  disabled,
  ...props
}: DatetimeCalendarProps) => {
  const { value, onValueChange, time } = useDateInput();

  const formateSelectedDate = useCallback(
    (_: Date | undefined, triggerDate: Date) => {
      const parsedDateTime = parseDateTime(triggerDate);

      if (parsedDateTime) {
        parsedDateTime.setHours(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]));
        onValueChange(parsedDateTime);
      }
    },
    [value, time]
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
          <span className="sr-only">calender</span>
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
            onSelect={formateSelectedDate}
          />
          <TimePicker />
        </div>
      </Popover.Content>
    </Popover>
  );
};

DatetimeCalendar.displayName = "DatetimeCalendar";

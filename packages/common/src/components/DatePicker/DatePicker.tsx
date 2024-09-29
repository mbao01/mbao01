"use client";

import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover } from "../Popover";
import { type DatePickerProps } from "./types";

export const DatePicker = ({
  name,
  size,
  wide,
  label,
  outline,
  variant,
  disabled,
  defaultDate,
  children,
  getDateValue = (date) => date?.toUTCString(),
  getDateLabel = (date) => (date ? format(date, "PPP") : undefined),
  triggerClassName,
  ...props
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(defaultDate);

  const dateLabel = getDateLabel(date);
  const dateValue = getDateValue(date);

  const calendar = (
    <Calendar
      autoFocus
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="label"
      {...props}
    />
  );

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button
          name={name}
          size={size}
          wide={wide}
          outline={outline}
          variant={variant}
          disabled={disabled}
          className={cn("justify-start", !date && "font-normal", triggerClassName)}
          value={dateValue}
        >
          {dateLabel ?? <span>{label ?? "Pick a date"}</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        className={cn("w-auto p-0", {
          "flex flex-col space-y-2 p-2": children,
        })}
      >
        {children ? (
          <>
            {children?.({ date, setDate })}
            <div className="rounded-md border">{calendar}</div>
          </>
        ) : (
          calendar
        )}
      </Popover.Content>
    </Popover>
  );
};

"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { type DatePickerProps } from "./types";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover } from "../Popover";

export const DatePicker = ({
  name,
  size,
  wide,
  label,
  outline,
  variant,
  disabled,
  defaultDate,
  getDateValue = (date) => date?.toUTCString(),
  getDateLabel = (date) => (date ? format(date, "PPP") : undefined),
  ...props
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(defaultDate);

  const dateLabel = getDateLabel(date);
  const dateValue = getDateValue(date);

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
          className={cn("justify-start", !date && "font-normal")}
          value={dateValue}
        >
          {dateLabel ?? <span>{label ?? "Pick a date"}</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown-buttons"
          {...props}
        />
      </Popover.Content>
    </Popover>
  );
};

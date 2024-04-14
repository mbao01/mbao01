"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { type MultipleDatesPickerProps } from "./types";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover } from "../Popover";

export const MultipleDatesPicker = ({
  name,
  size,
  wide,
  label,
  outline,
  variant,
  disabled,
  defaultDates,
  getDatesValue = (dates) => dates?.map((date) => date.toUTCString()),
  getDatesLabel = (dates) => {
    if (!dates?.length) return undefined;
    if (dates.length < 3)
      return dates.map((date) => format(date, "LLL dd, y")).join(" and ");

    return `${dates.length} dates selected`;
  },
  ...props
}: MultipleDatesPickerProps) => {
  const [dates, setDates] = useState<Date[] | undefined>(defaultDates);

  const rangeLabel = getDatesLabel(dates);
  const datesValues = getDatesValue(dates);

  return (
    <Popover>
      {name &&
        datesValues?.map((date, index) => (
          <input
            key={date}
            hidden
            className="hidden"
            aria-hidden="true"
            name={`${name}.${index}`}
            defaultValue={date}
          />
        ))}
      <Popover.Trigger asChild>
        <Button
          name={name}
          size={size}
          wide={wide}
          outline={outline}
          variant={variant}
          disabled={disabled}
          className={cn(
            "justify-start flex-nowrap",
            !dates?.length && "font-normal"
          )}
        >
          <span className="text-left line-clamp-1">
            {rangeLabel ?? label ?? "Pick one or more dates"}
          </span>
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0">
        <Calendar
          initialFocus
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          captionLayout="dropdown-buttons"
          {...props}
        />
      </Popover.Content>
    </Popover>
  );
};
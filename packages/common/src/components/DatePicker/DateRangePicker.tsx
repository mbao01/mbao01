"use client";

import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover } from "../Popover";
import { type DateRangePickerProps } from "./types";

export const DateRangePicker = ({
  name,
  size,
  wide,
  label,
  outline,
  variant,
  disabled,
  defaultRange,
  getRangeValue = (range) => ({
    from: range?.from?.toUTCString(),
    to: range?.to?.toUTCString(),
  }),
  getRangeLabel = (range) =>
    range?.from ? (
      range.to ? (
        <>
          {format(range.from, "LLL dd, y")} - {format(range.to, "LLL dd, y")}
        </>
      ) : (
        format(range.from, "LLL dd, y")
      )
    ) : undefined,
  triggerClassName,
  ...props
}: DateRangePickerProps) => {
  const [range, setRange] = useState<DateRange | undefined>(defaultRange);

  const rangeLabel = getRangeLabel(range);
  const rangeValue = getRangeValue(range);

  return (
    <Popover>
      {name && (
        <>
          <input
            hidden
            className="hidden"
            aria-hidden="true"
            name={`${name}.from`}
            defaultValue={rangeValue.from}
          />
          <input
            hidden
            className="hidden"
            aria-hidden="true"
            name={`${name}.to`}
            defaultValue={rangeValue.to}
          />
        </>
      )}
      <Popover.Trigger asChild>
        <Button
          name={name}
          size={size}
          wide={wide}
          outline={outline}
          variant={variant}
          disabled={disabled}
          className={cn("justify-start flex-nowrap", !range && "font-normal", triggerClassName)}
        >
          <span className="text-left text-ellipsis overflow-hidden text-nowrap">
            {rangeLabel ?? label ?? "Pick a range"}
          </span>
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0">
        <Calendar
          autoFocus
          mode="range"
          selected={range}
          onSelect={setRange}
          captionLayout="label"
          {...props}
        />
      </Popover.Content>
    </Popover>
  );
};

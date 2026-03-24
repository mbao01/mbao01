"use client";

import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { format, subDays, startOfMonth, startOfYear } from "date-fns";
import { CalendarDaysIcon } from "lucide-react";
import { cn } from "../../utilities";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Popover } from "../Popover";
import { type DateRangePresetPickerProps, type DateRangePreset } from "./types";

const DEFAULT_PRESETS: DateRangePreset[] = [
  { label: "Today", range: () => ({ from: new Date(), to: new Date() }) },
  { label: "Last 7 days", range: () => ({ from: subDays(new Date(), 7), to: new Date() }) },
  { label: "Last 30 days", range: () => ({ from: subDays(new Date(), 30), to: new Date() }) },
  { label: "Last 90 days", range: () => ({ from: subDays(new Date(), 90), to: new Date() }) },
  { label: "This month", range: () => ({ from: startOfMonth(new Date()), to: new Date() }) },
  { label: "This year", range: () => ({ from: startOfYear(new Date()), to: new Date() }) },
];

export const DateRangePresetPicker = ({
  name,
  size,
  wide,
  label,
  outline,
  variant,
  disabled,
  disabledDates,
  defaultRange,
  presets = DEFAULT_PRESETS,
  onRangeChange,
  getRangeValue = (range) => ({
    from: range?.from?.toUTCString(),
    to: range?.to?.toUTCString(),
  }),
  getRangeLabel = (range) =>
    range?.from
      ? range.to
        ? `${format(range.from, "LLL dd, y")} - ${format(range.to, "LLL dd, y")}`
        : format(range.from, "LLL dd, y")
      : undefined,
  triggerClassName,
  ...props
}: DateRangePresetPickerProps) => {
  const [range, setRange] = useState<DateRange | undefined>(defaultRange);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handlePresetClick = (preset: DateRangePreset) => {
    const newRange = preset.range();
    setRange(newRange);
    setActivePreset(preset.label);
    onRangeChange?.(newRange, preset.label);
  };

  const handleCalendarSelect = (newRange: DateRange | undefined) => {
    setRange(newRange);
    setActivePreset(null);
    onRangeChange?.(newRange, undefined);
  };

  const rangeLabel = getRangeLabel(range);
  const rangeValue = getRangeValue(range);

  return (
    <Popover>
      {name && (
        <>
          <input hidden className="hidden" aria-hidden="true" name={`${name}.from`} defaultValue={rangeValue.from} />
          <input hidden className="hidden" aria-hidden="true" name={`${name}.to`} defaultValue={rangeValue.to} />
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
            {activePreset ?? rangeLabel ?? label ?? "Select period"}
          </span>
          <CalendarDaysIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <div className="flex">
          <div className="flex flex-col border-r p-2 gap-0.5">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-left text-sm transition-colors duration-150 hover:bg-base-200",
                  activePreset === preset.label && "bg-primary text-primary-content hover:bg-primary"
                )}
              >
                {preset.label}
              </button>
            ))}
          </div>
          <div className="p-2">
            <Calendar
              autoFocus
              mode="range"
              selected={range}
              disabled={disabledDates}
              onSelect={handleCalendarSelect}
              captionLayout="label"
              {...props}
            />
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
};

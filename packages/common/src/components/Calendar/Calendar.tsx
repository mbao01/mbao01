"use client";

import { DayPicker } from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "../../utilities";
import { getButtonClasses } from "../Button/constants";
import { type CalendarProps } from "./types";

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        caption_label: "text-sm font-medium",
        day: "h-9 w-9 text-center flex items-center justify-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day_button: cn(
          getButtonClasses({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal group-has-[*]/today:bg-accent group-aria-[selected]/today:bg-primary group-[.day-in-range]/today:!bg-primary/50 group-has-[*]/today:text-accent-content group-has-[*]/today:rounded-full"
        ),
        disabled: "!opacity-30",
        dropdown: "bg-transparent",
        dropdown_root: "text-sm [&>[aria-hidden='true']]:hidden",
        dropdowns: "flex justify-center items-center",
        hidden: "hidden",
        button_previous: cn(
          getButtonClasses({ outline: true }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&:disabled]:text-opacity-50"
        ),
        button_next: cn(
          getButtonClasses({ outline: true }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 [&:disabled]:text-opacity-50"
        ),
        footer: "text-sm py-2",
        month: "space-y-4",
        month_caption: "flex justify-start pt-1 relative items-center",
        month_grid: "w-full border-collapse space-y-1",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 relative",
        nav: "absolute flex gap-2 items-center rtl:left-0 rtl:right-auto right-0 z-10",
        outside: "opacity-50",
        range_end: "!opacity-100",
        range_start: "!opacity-100",
        range_middle: "day-in-range [&>*]:bg-primary/50 [&>*]:text-primary-content",
        selected:
          "[&>*]:bg-primary [&>*]:text-primary-content [&:disabled>*]:bg-primary [&:disabled>*]:text-primary-content [&:hover>*]:bg-primary [&:hover>*]:text-primary-content [&:focus>*]:bg-primary [&:focus>*]:text-primary-content",
        today: "group/today [&:has(*)]:ring-0 ring-1 ring-accent ring-inset rounded-full",
        weekdays: "flex",
        weekday: "rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        week_number: "flex items-center text-sm italic w-6",
        week_number_header: "w-6",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("h-4 w-4", className)} />;
          }
          return <ChevronRightIcon className={cn("h-4 w-4", className)} />;
        },
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

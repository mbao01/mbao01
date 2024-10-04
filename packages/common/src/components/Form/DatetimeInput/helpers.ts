import { parseDate } from "chrono-node";
import { type TimeString } from "./types";

/**
 * Utility function that parses dates.
 * Parses a given date string using the `chrono-node` library.
 *
 * @param str - A string representation of a date and time.
 * @returns A `Date` object representing the parsed date and time, or `null` if the string could not be parsed.
 */
export const parseDateTime = (str: Date | string) => {
  if (str instanceof Date) {
    return str;
  }

  return parseDate(str) ?? undefined;
};

/**
 * Converts a given timestamp or the current date and time to a string representation in the local time zone.
 * format: `HH:mm`, adjusted for the local time zone.
 *
 * @param timestamp {Date | string}
 * @returns A string representation of the timestamp
 */
export const getDateTimeLocal = (timestamp?: Date): string => {
  const d = timestamp ? new Date(timestamp) : new Date();
  if (d.toString() === "Invalid Date") return "";
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .split(":")
    .slice(0, 2)
    .join(":");
};

/**
 * Formats a given date and time object or string into a human-readable string representation.
 * "MMM D, YYYY h:mm A" (e.g. "Jan 1, 2023 12:00 PM").
 *
 * @param date - {Date | string}
 * @returns A string representation of the date and time
 */
export const formatDateTime = (date: Date | string, locale?: Intl.LocalesArgument) => {
  return new Date(date).toLocaleTimeString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const getParsedTime = (date: Date): TimeString => {
  if (date) {
    const PM_AM = date.getHours() >= 12 ? "PM" : "AM";
    //fix the time format for this value

    const PM_AM_hour = date.getHours();
    const minute = date.getMinutes();

    const hour =
      PM_AM_hour > 12 ? PM_AM_hour % 12 : PM_AM_hour === 0 || PM_AM_hour === 12 ? 12 : PM_AM_hour;

    return `${hour}:${minute ? minute : "00"} ${PM_AM}` as TimeString;
  }

  return "";
};

type Time = `${string}`;
export const setDateTime = (date: Date, time: Time) => {
  if (!time) {
    return date;
  }

  const [HHMM, PM_AM] = time.split(" ");
  const [HH, MM] = HHMM.split(":").map((v) => parseInt(v) || 0);

  let hour = HH;
  if (HH === 12) {
    if (PM_AM === "AM") {
      hour = 0;
    }
  } else if (HH < 12) {
    if (PM_AM === "PM") {
      hour += 12;
    }
  }
  const newDate = new Date(date);
  newDate.setHours(hour, MM);

  return newDate;
};

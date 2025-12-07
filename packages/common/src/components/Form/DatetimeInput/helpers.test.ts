import { describe, expect, it } from "vitest";
import {
  formatDateTime,
  getDateTimeLocal,
  getParsedTime,
  parseDateTime,
  setDateTime,
} from "./helpers";

describe("DatetimeInput helpers", () => {
  describe("parseDateTime", () => {
    it("returns the same Date object when passed a Date", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = parseDateTime(date);
      expect(result).toBe(date);
    });

    it("parses natural language date strings", () => {
      const result = parseDateTime("tomorrow at 3pm");
      expect(result).toBeInstanceOf(Date);
    });

    it("parses ISO date strings", () => {
      const result = parseDateTime("2024-01-15T14:30:00");
      expect(result).toBeInstanceOf(Date);
      expect(result?.getFullYear()).toBe(2024);
      expect(result?.getMonth()).toBe(0); // January
      expect(result?.getDate()).toBe(15);
    });

    it("returns undefined for invalid date strings", () => {
      const result = parseDateTime("not a valid date");
      expect(result).toBeUndefined();
    });

    it("parses relative dates", () => {
      const result = parseDateTime("next monday");
      expect(result).toBeInstanceOf(Date);
    });
  });

  describe("getDateTimeLocal", () => {
    it("returns formatted datetime string for given date", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = getDateTimeLocal(date);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
    });

    it("returns current datetime when no date is provided", () => {
      const result = getDateTimeLocal();
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
    });

    it("returns empty string for invalid date", () => {
      const invalidDate = new Date("invalid");
      const result = getDateTimeLocal(invalidDate);
      expect(result).toBe("");
    });

    it("adjusts for timezone offset", () => {
      const date = new Date("2024-01-15T14:30:00Z");
      const result = getDateTimeLocal(date);
      // Result should be adjusted for local timezone
      expect(result).toBeTruthy();
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
    });
  });

  describe("formatDateTime", () => {
    it("formats date to readable string", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = formatDateTime(date);
      expect(result).toContain("Jan");
      expect(result).toContain("15");
      expect(result).toContain("2024");
      expect(result).toContain("2:30");
    });

    it("formats date with custom locale", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = formatDateTime(date, "fr-FR");
      expect(result).toContain("janv");
      expect(result).toContain("15");
      expect(result).toContain("2024");
    });

    it("handles string input", () => {
      const result = formatDateTime("2024-01-15T14:30:00");
      expect(result).toContain("Jan");
      expect(result).toContain("15");
      expect(result).toContain("2024");
    });

    it("includes AM/PM indicator", () => {
      const morningDate = new Date("2024-01-15T09:30:00");
      const eveningDate = new Date("2024-01-15T21:30:00");

      const morningResult = formatDateTime(morningDate);
      const eveningResult = formatDateTime(eveningDate);

      expect(morningResult.toLowerCase()).toContain("am");
      expect(eveningResult.toLowerCase()).toContain("pm");
    });
  });

  describe("getParsedTime", () => {
    it("returns time in 12-hour format with AM", () => {
      const date = new Date("2024-01-15T09:30:00");
      const result = getParsedTime(date);
      expect(result).toBe("9:30 AM");
    });

    it("returns time in 12-hour format with PM", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = getParsedTime(date);
      expect(result).toBe("2:30 PM");
    });

    it("handles midnight correctly", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = getParsedTime(date);
      expect(result).toBe("12:00 AM");
    });

    it("handles noon correctly", () => {
      const date = new Date("2024-01-15T12:00:00");
      const result = getParsedTime(date);
      expect(result).toBe("12:00 PM");
    });

    it("pads minutes with 00 when minutes are 0", () => {
      const date = new Date("2024-01-15T14:00:00");
      const result = getParsedTime(date);
      expect(result).toBe("2:00 PM");
    });

    it("handles single digit minutes", () => {
      const date = new Date("2024-01-15T14:05:00");
      const result = getParsedTime(date);
      expect(result).toBe("2:5 PM");
    });

    it("handles 11:59 PM correctly", () => {
      const date = new Date("2024-01-15T23:59:00");
      const result = getParsedTime(date);
      expect(result).toBe("11:59 PM");
    });

    it("handles 1:00 AM correctly", () => {
      const date = new Date("2024-01-15T01:00:00");
      const result = getParsedTime(date);
      expect(result).toBe("1:00 AM");
    });
  });

  describe("setDateTime", () => {
    it("sets time on a date", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "2:30 PM");

      expect(result.getHours()).toBe(14);
      expect(result.getMinutes()).toBe(30);
      expect(result.getDate()).toBe(15);
    });

    it("handles AM times", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "9:15 AM");

      expect(result.getHours()).toBe(9);
      expect(result.getMinutes()).toBe(15);
    });

    it("handles PM times", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "3:45 PM");

      expect(result.getHours()).toBe(15);
      expect(result.getMinutes()).toBe(45);
    });

    it("handles midnight (12:00 AM)", () => {
      const date = new Date("2024-01-15T12:00:00");
      const result = setDateTime(date, "12:00 AM");

      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
    });

    it("handles noon (12:00 PM)", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "12:00 PM");

      expect(result.getHours()).toBe(12);
      expect(result.getMinutes()).toBe(0);
    });

    it("returns original date when time is empty", () => {
      const date = new Date("2024-01-15T14:30:00");
      const result = setDateTime(date, "");

      expect(result).toBe(date);
    });

    it("does not mutate the original date", () => {
      const date = new Date("2024-01-15T00:00:00");
      const originalHours = date.getHours();

      setDateTime(date, "3:30 PM");

      expect(date.getHours()).toBe(originalHours);
    });

    it("handles times with single digit hours", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "5:00 PM");

      expect(result.getHours()).toBe(17);
      expect(result.getMinutes()).toBe(0);
    });

    it("handles 11:59 PM correctly", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "11:59 PM");

      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
    });

    it("handles 12:30 AM correctly", () => {
      const date = new Date("2024-01-15T12:00:00");
      const result = setDateTime(date, "12:30 AM");

      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(30);
    });

    it("handles 12:30 PM correctly", () => {
      const date = new Date("2024-01-15T00:00:00");
      const result = setDateTime(date, "12:30 PM");

      expect(result.getHours()).toBe(12);
      expect(result.getMinutes()).toBe(30);
    });
  });
});

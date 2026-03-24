import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DateRangePresetPicker } from "./DateRangePresetPicker";

describe("DateRangePresetPicker", () => {
  it("renders with default label", () => {
    render(<DateRangePresetPicker />);
    expect(screen.getByText("Select period")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<DateRangePresetPicker label="Choose dates" />);
    expect(screen.getByText("Choose dates")).toBeInTheDocument();
  });

  it("shows presets when opened", () => {
    render(<DateRangePresetPicker />);
    fireEvent.click(screen.getByText("Select period"));
    expect(screen.getByText("Last 7 days")).toBeInTheDocument();
    expect(screen.getByText("Last 30 days")).toBeInTheDocument();
    expect(screen.getByText("Last 90 days")).toBeInTheDocument();
    expect(screen.getByText("This month")).toBeInTheDocument();
    expect(screen.getByText("This year")).toBeInTheDocument();
  });

  it("accepts custom presets", () => {
    const customPresets = [
      { label: "Q1", range: () => ({ from: new Date(2024, 0, 1), to: new Date(2024, 2, 31) }) },
    ];
    render(<DateRangePresetPicker presets={customPresets} />);
    fireEvent.click(screen.getByText("Select period"));
    expect(screen.getByText("Q1")).toBeInTheDocument();
  });
});

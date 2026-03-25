import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CountdownTimer } from "./";

describe("CountdownTimer", () => {
  it("renders time units", () => {
    const future = new Date(Date.now() + 3600000); // 1 hour from now
    render(<CountdownTimer targetDate={future} />);
    expect(screen.getByText("hrs")).toBeInTheDocument();
    expect(screen.getByText("min")).toBeInTheDocument();
    expect(screen.getByText("sec")).toBeInTheDocument();
  });

  it("renders label", () => {
    const future = new Date(Date.now() + 3600000);
    render(<CountdownTimer targetDate={future} label="Market closes in" />);
    expect(screen.getByText("Market closes in")).toBeInTheDocument();
  });

  it("renders zeros for past dates", () => {
    const past = new Date(Date.now() - 1000);
    render(<CountdownTimer targetDate={past} />);
    expect(screen.getAllByText("00")).toHaveLength(3); // hours, minutes, seconds
  });
});

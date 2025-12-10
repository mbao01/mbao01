import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Step, Stepper } from "./Stepper";

describe("Stepper", () => {
  it("renders children correctly", () => {
    render(
      <Stepper data-testid="stepper">
        <Step>Step 1</Step>
      </Stepper>
    );
    expect(screen.getByTestId("stepper")).toBeInTheDocument();
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  it("applies orientation variant", () => {
    render(
      <Stepper orientation="vertical" data-testid="stepper">
        <Step>Step 1</Step>
      </Stepper>
    );
    expect(screen.getByTestId("stepper")).toHaveClass("steps-vertical");
  });

  it("applies active state (primary variant)", () => {
    render(
      <Stepper>
        <Step active data-testid="step">
          Step 1
        </Step>
      </Stepper>
    );
    expect(screen.getByTestId("step")).toHaveClass("step-primary");
  });

  it("applies specific variant", () => {
    render(
      <Stepper>
        <Step variant="success" data-testid="step">
          Step 1
        </Step>
      </Stepper>
    );
    expect(screen.getByTestId("step")).toHaveClass("step-success");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Stepper ref={ref}>
        <Step>Step 1</Step>
      </Stepper>
    );
    expect(ref.current).toBeInstanceOf(HTMLUListElement);
  });
});

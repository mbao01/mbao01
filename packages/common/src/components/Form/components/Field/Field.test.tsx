import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Field, FieldDescription, FieldError, FieldLabel } from "./Field";
import { useField } from "./hooks";

// Test component to access hook
const TestInput = () => {
  const { inputId, descriptionId, errorId } = useField();
  return (
    <input data-testid="input" id={inputId} aria-describedby={`${descriptionId} ${errorId}`} />
  );
};

describe("Field", () => {
  it("renders children correctly", () => {
    render(
      <Field data-testid="field">
        <FieldLabel>Label</FieldLabel>
        <TestInput />
      </Field>
    );
    expect(screen.getByTestId("field")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("connects label to input via id", () => {
    render(
      <Field>
        <FieldLabel>Label</FieldLabel>
        <TestInput />
      </Field>
    );
    const label = screen.getByText("Label").closest("label");
    const input = screen.getByTestId("input");
    expect(label).toHaveAttribute("for", input?.id);
  });

  it("connects description to input via aria-describedby", () => {
    render(
      <Field>
        <TestInput />
        <FieldDescription>Description</FieldDescription>
      </Field>
    );
    const input = screen.getByTestId("input");
    const description = screen.getByText("Description");
    expect(input).toHaveAttribute("aria-describedby", expect.stringContaining(description.id));
  });

  it("connects error to input via aria-describedby", () => {
    render(
      <Field>
        <TestInput />
        <FieldError>Error</FieldError>
      </Field>
    );
    const input = screen.getByTestId("input");
    const error = screen.getByText("Error");
    expect(input).toHaveAttribute("aria-describedby", expect.stringContaining(error.id));
  });

  it("renders required indicator", () => {
    render(
      <Field>
        <FieldLabel required>Label</FieldLabel>
      </Field>
    );
    const label = screen.getByText("Label").closest("label");
    expect(label).toHaveClass("after:content-['*']");
  });

  it("does not render empty error", () => {
    const { container } = render(
      <Field>
        <FieldError>{null}</FieldError>
      </Field>
    );
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });
});

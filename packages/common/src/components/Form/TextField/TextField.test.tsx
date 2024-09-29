import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders with the correct initial state", () => {
    const { asFragment } = render(<TextField name="username" defaultValue="John Doe" />);

    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a label", () => {
    const { asFragment } = render(<TextField name="username" label="Username" />);

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has an info text", () => {
    const { asFragment } = render(
      <TextField name="username" label="Username" info="This is an info text" />
    );

    expect(screen.getByText("This is an info text")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has an error text", () => {
    const { asFragment } = render(
      <TextField name="username" label="Username" error="This is an error text" />
    );

    expect(screen.getByText("This is an error text")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("handles user input correctly", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <TextField name="username" label="Username" defaultValue="John Doe" />
    );
    const textField = screen.getByDisplayValue("John Doe");

    await user.clear(textField);
    await user.type(textField, "Ayomide B.");

    expect(textField).toHaveValue("Ayomide B.");
    expect(asFragment()).toMatchSnapshot();
  });

  it("prevent user input when disabled", async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <TextField name="username" label="Username" defaultValue="John Doe" disabled />
    );
    const textField = screen.getByLabelText("Username");

    await user.type(textField, "Ayomide B.");

    expect(textField).toHaveValue("John Doe");
    expect(asFragment()).toMatchSnapshot();
  });
});

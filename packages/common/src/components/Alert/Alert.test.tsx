import { render, screen } from "@testing-library/react";
import { type AlertProps } from "./types";
import { Alert } from "./Alert";

describe("Alert", () => {
  const renderAlert = (heading: string, props?: AlertProps) =>
    render(
      <Alert {...props}>
        <Alert.Title>{heading}</Alert.Title>
        <Alert.Description>You should pay attention to me</Alert.Description>
      </Alert>
    );
  it("renders a basic alert", () => {
    renderAlert("Hey!");

    expect(screen.getByRole("heading", { name: "Hey!" })).toBeInTheDocument();
    expect(
      screen.getByText("You should pay attention to me")
    ).toBeInTheDocument();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const heading = `Alert ${description}`;
    const { asFragment } = renderAlert(heading, { outline });

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const heading = `Alert ${variant}`;
    const { asFragment } = renderAlert(heading, { variant });

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

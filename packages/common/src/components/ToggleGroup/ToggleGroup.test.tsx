import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ToggleGroupProps } from "./types";
import { ToggleGroup } from "./ToggleGroup";

describe("ToggleGroup", () => {
  const renderToggleGroup = (
    props: ToggleGroupProps = { type: "multiple" }
  ) => {
    return render(
      <ToggleGroup {...props}>
        <ToggleGroup.Item value="one" aria-label="Toggle one">
          One
        </ToggleGroup.Item>
        <ToggleGroup.Item value="two" aria-label="Toggle two">
          Two
        </ToggleGroup.Item>
        <ToggleGroup.Item value="three" aria-label="Toggle three">
          Three
        </ToggleGroup.Item>
      </ToggleGroup>
    );
  };

  it("renders a toggle group", () => {
    const { asFragment } = renderToggleGroup();
    const toggles = ["Toggle one", "Toggle two", "Toggle three"];

    toggles.forEach((toggle) =>
      expect(screen.getByRole("button", { name: toggle })).toHaveAttribute(
        "data-state",
        "off"
      )
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should toggle button state", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderToggleGroup({
      type: "single",
      defaultValue: "two",
    });

    expect(screen.getByRole("radio", { name: "Toggle one" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "Toggle two" })).toBeChecked();
    expect(
      screen.getByRole("radio", { name: "Toggle three" })
    ).not.toBeChecked();

    await user.click(screen.getByRole("radio", { name: "Toggle one" }));

    expect(screen.getByRole("radio", { name: "Toggle one" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Toggle two" })).not.toBeChecked();
    expect(
      screen.getByRole("radio", { name: "Toggle three" })
    ).not.toBeChecked();

    await user.click(screen.getByRole("radio", { name: "Toggle one" }));

    expect(screen.getByRole("radio", { name: "Toggle one" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "Toggle two" })).not.toBeChecked();
    expect(
      screen.getByRole("radio", { name: "Toggle three" })
    ).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });
});

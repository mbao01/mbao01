import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Select } from "./Select";
import { type SelectTriggerProps } from "./types";

describe("Select", () => {
  const renderSelect = (
    placeholder = "Theme",
    { size, variant, outline }: Partial<SelectTriggerProps> = {}
  ) => {
    return render(
      <Select>
        <Select.Trigger size={size} variant={variant} outline={outline}>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="light" variant={variant}>
            Light
          </Select.Item>
          <Select.Item value="dark" variant={variant}>
            Dark
          </Select.Item>
          <Select.Item value="system" variant={variant}>
            System
          </Select.Item>
        </Select.Content>
      </Select>
    );
  };

  it("renders with the correct initial state", () => {
    const { asFragment } = renderSelect();

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each(["primary", "secondary", "accent", "success", "warning", "info", "error"] as const)(
    "has %s variant",
    (variant) => {
      const placeholder = `${variant} select`;
      const { asFragment } = renderSelect(placeholder, { variant });

      expect(screen.getByRole("combobox")).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    { size: "xs", name: "tiny" },
    { size: "sm", name: "small" },
    { size: "md", name: "base" },
    { size: "lg", name: "large" },
  ] as const)("has $name ($size)", ({ size, name }) => {
    const placeholder = `${name} select`;
    const { asFragment } = renderSelect(placeholder, { size });

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultiSelect } from "./MultiSelect";
import { MultiSelectTriggerProps } from "./types";

describe("MultiSelect", () => {
  const OPTIONS = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ];
  const handleValuesChange = vi.fn();
  const renderMultiSelect = (
    values: string[] = [],
    options = OPTIONS,
    label: string = "Choose framework",
    props?: MultiSelectTriggerProps
  ) => {
    return render(
      <MultiSelect label={label} values={values} onValuesChange={handleValuesChange}>
        <MultiSelect.Trigger {...props}>
          <MultiSelect.Input placeholder="Select your framework" />
        </MultiSelect.Trigger>
        <MultiSelect.Content>
          <MultiSelect.List size={props?.size}>
            {options.map((option, i) => (
              <MultiSelect.Item
                key={i}
                size={props?.size}
                value={option.value}
                label={option.label}
              >
                {option.label}
              </MultiSelect.Item>
            ))}
          </MultiSelect.List>
        </MultiSelect.Content>
      </MultiSelect>
    );
  };

  it("renders no options", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderMultiSelect([], []);

    const multiSelectInput = screen.getByRole("combobox", { name: "Choose framework" });

    await user.click(multiSelectInput);

    const suggestionsBox = screen.getByRole("listbox", { name: "Suggestions" });

    expect(within(suggestionsBox).getByRole("presentation")).toHaveTextContent("No results found");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a multi select input", () => {
    const { asFragment } = renderMultiSelect();

    expect(screen.getByPlaceholderText("Select your framework")).toBeVisible();
    expect(screen.getByRole("combobox", { name: "Choose framework" })).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  describe("and the user clicks on the input", () => {
    it("show the list of available options", async () => {
      const user = userEvent.setup();
      const { asFragment } = renderMultiSelect();

      const multiSelectInput = screen.getByRole("combobox", { name: "Choose framework" });

      await user.click(multiSelectInput);

      const suggestionsBox = screen.getByRole("listbox", { name: "Suggestions" });

      expect(suggestionsBox).toBeVisible();
      OPTIONS.forEach((option) => {
        expect(within(suggestionsBox).getByRole("option", { name: option.label })).toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("and the user enters a text that matches an option", () => {
    it("show the list of available options", async () => {
      const user = userEvent.setup();
      const { asFragment } = renderMultiSelect();

      const multiSelectInput = screen.getByRole("combobox", { name: "Choose framework" });

      await user.type(multiSelectInput, "et");

      const suggestionsBox = screen.getByRole("listbox", { name: "Suggestions" });
      expect(within(suggestionsBox).getByRole("option", { name: "React" })).toBeVisible();
      expect(within(suggestionsBox).getByRole("option", { name: "Svelte" })).toBeVisible();
      expect(within(suggestionsBox).queryByRole("option", { name: "Vue" })).not.toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();

      await user.clear(multiSelectInput);

      OPTIONS.forEach((option) => {
        expect(within(suggestionsBox).getByRole("option", { name: option.label })).toBeVisible();
      });
      expect(asFragment()).toMatchSnapshot();

      await user.type(multiSelectInput, "react");
      expect(within(suggestionsBox).getByRole("option", { name: "React" })).toBeVisible();
      expect(
        within(suggestionsBox).queryByRole("option", { name: "Svelte" })
      ).not.toBeInTheDocument();
      expect(within(suggestionsBox).queryByRole("option", { name: "Vue" })).not.toBeInTheDocument();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("and the user enters a text that does not match any options", () => {
    it("show an empty list", async () => {
      const user = userEvent.setup();
      const { asFragment } = renderMultiSelect();

      const multiSelectInput = screen.getByRole("combobox", { name: "Choose framework" });

      await user.type(multiSelectInput, "Brave");

      const suggestionsBox = screen.getByRole("listbox", { name: "Suggestions" });

      expect(within(suggestionsBox).getByRole("presentation")).toHaveTextContent(
        "No results found"
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("and the user can select and remove an option", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderMultiSelect();

    await user.click(screen.getByRole("combobox", { name: "Choose framework" }));
    await user.click(screen.getByRole("option", { name: "React" }));

    const removeOptionBtn = screen.getByRole("button", { name: "Remove React option" });
    expect(removeOptionBtn).toBeVisible();
    expect(handleValuesChange).toHaveBeenCalledWith(["react"]);
    expect(asFragment()).toMatchSnapshot();

    await user.click(removeOptionBtn);

    expect(handleValuesChange).toHaveBeenCalledWith(["react"]);
    expect(asFragment()).toMatchSnapshot();
  });

  it("and by using the keyboard the user can select and remove an option", async () => {
    const user = userEvent.setup();
    const { asFragment } = renderMultiSelect();

    const multiSelectInput = screen.getByRole("combobox", { name: "Choose framework" });
    await user.type(multiSelectInput, "elte{Enter}");

    const removeOptionBtn = screen.getByRole("button", { name: "Remove Svelte option" });
    expect(removeOptionBtn).toBeVisible();
    expect(handleValuesChange).toHaveBeenCalledWith(["svelte"]);
    expect(asFragment()).toMatchSnapshot();

    await user.type(multiSelectInput, "{Backspace}");

    expect(handleValuesChange).toHaveBeenCalledWith(["svelte"]);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const label = `MultiSelect ${description}`;
    const { asFragment } = renderMultiSelect([], [], label, { outline });

    expect(screen.getByRole("combobox", { name: label })).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
  ] as const)("has %s (%s) size", async (description, size) => {
    const user = userEvent.setup();
    const label = `MultiSelect ${description}`;
    const { asFragment } = renderMultiSelect([], [], label, { size });

    const multiSelectInput = screen.getByRole("combobox", { name: label });
    await user.click(multiSelectInput);

    expect(multiSelectInput).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "default",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const label = `${variant} badge`;
    const { asFragment } = renderMultiSelect([], [], label, { variant });

    expect(screen.getByRole("combobox", { name: label })).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });
});

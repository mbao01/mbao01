import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatetimeInput } from "./DatetimeInput";

describe("DatetimeInput", () => {
  it("renders a default date", () => {
    const { asFragment } = render(
      <DatetimeInput defaultDate={new Date(2024, 11, 23)} placeholder="Choose date of birth" />
    );

    expect(screen.getByPlaceholderText("Choose date of birth")).toHaveValue(
      "Dec 23, 2024, 12:00 AM"
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the input is disabled", () => {
    const { asFragment } = render(
      <DatetimeInput
        disabled
        defaultDate={new Date(2024, 11, 23)}
        placeholder="Choose date of birth"
      />
    );

    expect(screen.getByRole("button", { name: "calendar" })).toBeDisabled();
    expect(screen.getByDisplayValue("Dec 23, 2024, 12:00 AM")).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user enters a natural language text and presses Enter key", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<DatetimeInput aria-label="Enter anything" />);

    const datetimeInput = screen.getByRole("textbox", { name: "Enter anything" });

    await user.type(datetimeInput, "3rd of june next year{Enter}");

    expect(datetimeInput).toBeVisible();
    expect(datetimeInput).toHaveValue("Jun 3, 2024, 12:00 PM");
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user enters a natural language text and clicks out", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <>
        <DatetimeInput aria-label="Enter anything" />
        <div data-testid="outside"></div>
      </>
    );

    const datetimeInput = screen.getByRole("textbox", { name: "Enter anything" });

    await user.type(datetimeInput, "3rd of june next year");
    await user.click(screen.getByTestId("outside"));

    expect(datetimeInput).toHaveValue("Jun 3, 2024, 12:00 PM");
    expect(asFragment()).toMatchSnapshot();

    await user.clear(datetimeInput);
    await user.click(screen.getByTestId("outside"));

    expect(datetimeInput).toHaveValue("");
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user selects a date from the calendar", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <DatetimeInput aria-label="Enter anything" defaultDate={new Date(2024, 11, 23)} />
    );

    const calendarTrigger = screen.getByRole("button", { name: "calendar" });
    const datetimeInput = screen.getByRole("textbox", { name: "Enter anything" });

    await user.click(calendarTrigger);

    await user.click(screen.getByRole("listitem", { name: "10:15 PM" }));

    expect(datetimeInput).toHaveValue("Dec 23, 2024, 10:15 PM");

    await user.click(screen.getByRole("button", { name: "Thursday, December 12th, 2024" }));

    expect(datetimeInput).toHaveValue("Dec 12, 2024, 10:15 PM");
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    {
      locale: "fr-FR",
      expectedDate: "3 juin 2024, 12:00 PM",
    },
    {
      locale: "en-GB",
      expectedDate: "3 Jun 2024, 12:00 pm",
    },
    {
      locale: "es-ES",
      expectedDate: "3 jun 2024, 12:00 p. m.",
    },
  ])("and the user's browser is in a $locale locale", async ({ locale, expectedDate }) => {
    const user = userEvent.setup();
    const { asFragment } = render(<DatetimeInput aria-label="Enter anything" locale={locale} />);

    const datetimeInput = screen.getByRole("textbox", { name: "Enter anything" });

    await user.type(datetimeInput, "3rd of june next year{Enter}");

    expect(datetimeInput).toBeVisible();
    expect(datetimeInput).toHaveValue(expectedDate);
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["has outline", true],
    ["has no outline", false],
  ] as const)("%s", (description, outline) => {
    const placeholder = `DatetimeInput ${description}`;
    const { asFragment } = render(<DatetimeInput outline={outline} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    ["tiny", "xs"],
    ["small", "sm"],
    ["medium", "md"],
    ["large", "lg"],
  ] as const)("has %s (%s) size", (description, size) => {
    const placeholder = `DatetimeInput ${description}`;
    const { asFragment } = render(<DatetimeInput size={size} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeVisible();
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
    const placeholder = `${variant} badge`;
    const { asFragment } = render(
      <DatetimeInput key={variant} variant={variant} placeholder={placeholder} />
    );

    expect(screen.getByPlaceholderText(placeholder)).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  describe("when the component is controlled", () => {
    it("and the user changes the date date", async () => {
      const user = userEvent.setup();
      const handleDateChange = vi.fn();

      const { asFragment } = render(
        <DatetimeInput
          date={vi.fn() as unknown as Date}
          defaultDate={new Date(2024, 11, 23, 8, 16, 44)}
          onDateChange={handleDateChange}
          placeholder="Choose date of birth"
        />
      );

      const datetimeInput = screen.getByPlaceholderText("Choose date of birth");

      await user.type(datetimeInput, "3rd of june next year{Enter}");

      expect(handleDateChange).toHaveBeenCalledWith(new Date(2024, 6, -28, -12));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

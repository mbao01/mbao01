import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatetimePicker } from "./DatetimePicker";

describe("DatetimePicker", () => {
  it("renders the given date", () => {
    const { asFragment } = render(<DatetimePicker date={new Date(1727806014178)} />);

    Object.entries({
      days: "01",
      months: "10",
      years: "2024",
      hours: "06",
      minutes: "06",
      "am/pm": "PM",
    }).forEach(([name, value]) => {
      expect(screen.getByRole("spinbutton", { name })).toHaveValue(value);
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user changes date using the Up Arrow navigation", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<DatetimePicker date={new Date(1727806014178)} />);

    const data = {
      days: "02",
      months: "11",
      years: "2025",
      hours: "07",
      minutes: "07",
      "am/pm": "AM",
    } as const;

    for (const [name, value] of Object.entries(data)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, "{ArrowUp}");

      expect(button).toHaveValue(value);
    }

    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user changes date using the Down Arrow navigation", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<DatetimePicker date={new Date(1727806014178)} />);

    const data = {
      days: "30",
      months: "08",
      years: "2023",
      hours: "05",
      minutes: "05",
      "am/pm": "AM",
    } as const;

    for (const [name, value] of Object.entries(data)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, "{ArrowDown}");

      expect(button).toHaveValue(value);
    }

    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user enter a new date", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<DatetimePicker date={new Date(1727806014178)} />);

    const data = {
      days: "11",
      months: "06",
      years: "2028",
      hours: "12",
      minutes: "59",
    } as const;

    for (const [name, value] of Object.entries(data)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, value);

      expect(button).toHaveValue(value);
    }

    const button = screen.getByRole("spinbutton", { name: "am/pm" });
    await user.type(button, "A");

    expect(button).toHaveValue("AM");
    expect(asFragment()).toMatchSnapshot();
  });

  it("and the user must enter a date between the minimum and maximum dates", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <DatetimePicker
        date={new Date(1727805500000)}
        minDate={new Date(1727805000000)}
        maxDate={new Date(1727806014178)}
      />
    );

    // try max date
    const max = {
      days: "01",
      months: "10",
      years: "2024",
      hours: "06",
      minutes: "06",
      "am/pm": "PM",
    } as const;
    for (const [name, value] of Object.entries(max)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, "{ArrowUp}");

      expect(button).toHaveValue(value);
    }

    // type in date to reset
    const data = {
      days: "01",
      months: "10",
      years: "2024",
      hours: "06",
      minutes: "06",
    } as const;
    for (const [name, value] of Object.entries(data)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, value);

      expect(button).toHaveValue(value);
    }

    // try min date
    const min = {
      days: "01",
      months: "10",
      years: "2024",
      hours: "05",
      minutes: "50",
      "am/pm": "PM",
    } as const;
    for (const [name, value] of Object.entries(min)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, "{ArrowDown}");

      expect(button).toHaveValue(value);
    }

    // try unallowed date
    const unallowed = {
      days: "13",
      months: "01",
      years: "2025",
      hours: "08",
      minutes: "50",
    } as const;

    for (const [name, value] of Object.entries(unallowed)) {
      const button = screen.getByRole("spinbutton", { name });
      await user.type(button, value);

      expect(button).toHaveValue(max[name as keyof typeof unallowed]);
    }

    expect(asFragment()).toMatchSnapshot();
  });
});

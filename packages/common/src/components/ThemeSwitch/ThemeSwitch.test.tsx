import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ThemeSwitch } from "./ThemeSwitch";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("ThemeSwitch", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", vi.fn());
    vi.stubGlobal("localStorage", { getItem: vi.fn(), setItem: vi.fn() });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders a theme switcher", () => {
    const { asFragment } = render(<ThemeSwitch />);

    expect(screen.getByRole("checkbox", { hidden: true })).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render default theme", () => {
    const { asFragment } = render(<ThemeSwitch theme="dark" />);

    expect(screen.getByRole("checkbox", { hidden: true })).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should switch between light and dark themes", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(<ThemeSwitch aria-label="Switch theme" />);

    const label = screen.getByLabelText("Switch theme");

    expect(screen.getByRole("checkbox", { hidden: true })).toBeChecked(); // light mode

    await user.click(within(label).getByTitle("Switch to dark theme"));

    expect(screen.getByRole("checkbox", { hidden: true })).not.toBeChecked(); // dark mode

    await user.click(within(label).getByTitle("Switch to light theme"));

    expect(screen.getByRole("checkbox", { hidden: true })).toBeChecked(); // light mode
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a custom element", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <ThemeSwitch
        render={({ theme, setTheme }) => {
          const nextTheme = theme === "light" ? "dark" : "light";

          return (
            <Button onClick={() => setTheme(nextTheme)}>
              Switch to {nextTheme} theme
            </Button>
          );
        }}
      />
    );

    await user.click(
      screen.getByRole("button", { name: "Switch to dark theme" })
    );

    await user.click(
      screen.getByRole("button", { name: "Switch to light theme" })
    );

    expect(
      screen.getByRole("button", { name: "Switch to dark theme" })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

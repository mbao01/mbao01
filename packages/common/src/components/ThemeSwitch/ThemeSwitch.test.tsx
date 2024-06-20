import { MockInstance, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cookies from "universal-cookie";
import { ThemeSwitch } from "./ThemeSwitch";
import { Button } from "../Button";

vi.mock("universal-cookie", () => {
  const mockedCookies = {
    set: vi.fn() as MockInstance,
    get: vi.fn() as MockInstance,
    remove: vi.fn() as MockInstance,
  };
  return {
    default: vi.fn(() => mockedCookies),
  };
});

describe("ThemeSwitch", () => {
  let cookies: Cookies;

  beforeEach(() => {
    vi.stubGlobal("matchMedia", vi.fn());
    cookies = new Cookies();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders a theme switcher", () => {
    (cookies.get as unknown as MockInstance).mockReturnValue("light");

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
    (cookies.get as unknown as MockInstance).mockReturnValue("light");

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

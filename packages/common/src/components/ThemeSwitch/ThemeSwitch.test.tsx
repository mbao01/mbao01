import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cookies from "universal-cookie";
import { describe, expect, it, MockInstance, vi } from "vitest";
import { Button } from "../Button";
import { ThemeSwitch } from "./ThemeSwitch";

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
    const [systemInput, darkInput, lightInput] = screen.getAllByRole("checkbox", { hidden: true });

    expect(systemInput).not.toBeChecked();
    expect(darkInput).not.toBeChecked();
    expect(lightInput).toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render default theme", () => {
    const { asFragment } = render(<ThemeSwitch theme="dark" />);
    const [systemInput, darkInput, lightInput] = screen.getAllByRole("checkbox", { hidden: true });

    expect(systemInput).not.toBeChecked();
    expect(darkInput).toBeChecked();
    expect(lightInput).not.toBeChecked();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should switch between light and dark themes", async () => {
    (cookies.get as unknown as MockInstance).mockReturnValue("light");

    const user = userEvent.setup();
    const { asFragment } = render(<ThemeSwitch aria-label="Switch theme" />);

    let label = screen.getByLabelText("Switch to light theme");
    const [, darkInput, lightInput] = screen.getAllByRole("checkbox", { hidden: true });

    expect(lightInput).toBeChecked(); // light mode

    await user.click(label);

    expect(darkInput).not.toBeChecked(); // still light mode

    label = screen.getByLabelText("Switch to dark theme");
    await user.click(label);

    expect(darkInput).toBeChecked(); // dark mode
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render a custom element", async () => {
    const user = userEvent.setup();
    const { asFragment } = render(
      <ThemeSwitch
        render={({ theme, setTheme }) => {
          const nextTheme = theme === "light" ? "dark" : "light";

          return <Button onClick={() => setTheme(nextTheme)}>Switch to {nextTheme} theme</Button>;
        }}
      />
    );

    await user.click(screen.getByRole("button", { name: "Switch to dark theme" }));

    await user.click(screen.getByRole("button", { name: "Switch to light theme" }));

    expect(screen.getByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

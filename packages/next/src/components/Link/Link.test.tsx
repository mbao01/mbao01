import { render, screen } from "@testing-library/react";

import { Link } from "./Link";
import { LinkProps } from "./types";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

describe("Link", () => {
  const renderLink = (
    props: LinkProps<string>,
    memoryRouterProps?: MemoryRouterProps
  ) => {
    return render(
      <MemoryRouter {...memoryRouterProps}>
        <Link {...props} />
      </MemoryRouter>
    );
  };

  it("renders a link with correct label", () => {
    const { asFragment } = renderLink({
      hover: false,
      children: "Go Home 🏡",
      href: { pathname: "/home", search: "hello=world", hash: "great" },
    });

    const anchorEl = screen.getByRole("link", { name: "Go Home 🏡" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/home?hello=world#great");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an external link", () => {
    const { asFragment } = renderLink({
      href: "https://example.com",
      target: "_blank",
      children: "Google.com",
    });

    const anchorEl = screen.getByRole("link", { name: "Google.com" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "https://example.com");
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "accent",
    "default",
    "error",
    "info",
    "link",
    "neutral",
    "primary",
    "secondary",
    "success",
    "warning",
  ] as const)("has %s variant", (variant) => {
    const label = `${variant} link`;
    const { asFragment } = renderLink({
      hover: true,
      children: label,
      href: `/variant/${variant}` as LinkProps<string>["href"],
    });

    const anchorEl = screen.getByRole("link", { name: label });
    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", `/variant/${variant}`);
    expect(asFragment()).toMatchSnapshot();
  });
});

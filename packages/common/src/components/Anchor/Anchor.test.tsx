import { render, screen } from "@testing-library/react";
import { Anchor } from "./Anchor";
import { AnchorProps } from "./types";

describe("Anchor", () => {
  const renderAnchor = (props: AnchorProps) => {
    return render(<Anchor {...props} />);
  };

  it("renders a link with correct label", () => {
    const { asFragment } = renderAnchor({
      hover: false,
      children: "Go Home 🏡",
      href: "/home?hello=world#great",
    });

    const anchorEl = screen.getByRole("link", { name: "Go Home 🏡" });

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", "/home?hello=world#great");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an external Anchor", () => {
    const { asFragment } = renderAnchor({
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
    const { asFragment } = renderAnchor({
      hover: true,
      children: label,
      href: `/variant/${variant}` as AnchorProps["href"],
    });

    const anchorEl = screen.getByRole("link", { name: label });
    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl).toHaveAttribute("href", `/variant/${variant}`);
    expect(asFragment()).toMatchSnapshot();
  });
});

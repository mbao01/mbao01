import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./";

describe("Avatar", () => {
  type ArgsType = Partial<{
    alt: string;
    src: string;
    ring: boolean;
    size: 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64;
    shape: "round" | "circle" | "hexagon" | "triangle" | "television";
    status: "online" | "offline";
    fallback: string;
    variant:
      | "accent"
      | "default"
      | "error"
      | "ghost"
      | "info"
      | "neutral"
      | "primary"
      | "secondary"
      | "success"
      | "warning";
  }>;
  const renderAvatar = ({
    alt,
    src,
    ring,
    size,
    shape,
    status,
    variant,
    fallback,
  }: ArgsType) =>
    render(
      <Avatar size={size} status={status}>
        <Avatar.Image
          alt={alt}
          src={src}
          ring={ring}
          shape={shape}
          variant={variant}
        />
        <Avatar.Fallback
          ring={ring}
          size={size}
          shape={shape}
          variant={variant}
        >
          {fallback}
        </Avatar.Fallback>
      </Avatar>
    );

  it("renders an avatar", () => {
    const { asFragment } = renderAvatar({
      alt: "Ayomide B.",
      src: "https://github.com/shadcn.png",
      fallback: "Ayomide",
    });

    expect(screen.getByText("Ayomide")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    "default",
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ] as const)("has %s variant", (variant) => {
    const fallback = `${variant} fallback`;
    const { asFragment } = renderAvatar({
      alt: "Ayomide B.",
      variant,
      src: "https://github.com/shadcn.png",
      fallback,
    });

    expect(screen.getByText(fallback)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([
    { size: 4 },
    { size: 8 },
    { size: 12 },
    { size: 16 },
    { size: 32 },
    { size: 48 },
    { size: 64 },
  ] as const)("has a size ($size)", ({ size }) => {
    const fallback = `size ${size} fallback`;
    const { asFragment } = renderAvatar({
      alt: "Ayomide B.",
      src: "https://github.com/shadcn.png",
      fallback,
    });

    expect(screen.getByText(fallback)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it.each([{ status: "online" }, { status: "offline" }] as const)(
    "has $status status",
    ({ status }) => {
      const fallback = `status ${status} fallback`;
      const { asFragment } = renderAvatar({
        alt: "Ayomide B.",
        src: "https://github.com/shadcn.png",
        status,
        fallback,
      });

      expect(screen.getByText(fallback)).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    }
  );

  it.each([
    { shape: "round" },
    { shape: "circle" },
    { shape: "hexagon" },
    { shape: "triangle" },
    { shape: "television" },
  ] as const)("has a shape ($shape)", ({ shape }) => {
    const fallback = `${shape} shape fallback`;
    const { asFragment } = renderAvatar({
      alt: "Ayomide B.",
      src: "https://github.com/shadcn.png",
      shape,
      fallback,
    });

    expect(screen.getByText(fallback)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a ring", () => {
    const fallback = `Avatar with ring`;
    const { asFragment } = renderAvatar({
      alt: "Ayomide B.",
      src: "https://github.com/shadcn.png",
      ring: true,
      fallback,
    });

    expect(screen.getByText(fallback)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

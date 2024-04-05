import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

type ArgsType = Partial<{
  alt: string;
  src: string;
  ring: boolean;
  size: 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64;
  shape: "round" | "circle" | "hexagon" | "triangle" | "television";
  status: "online" | "offline";
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

const withAvatar = (_: StoryFn, context: StoryContext<ArgsType>) => {
  const { alt, src, ring, size, shape, status, variant } = context.args;

  return (
    <Avatar size={size} status={status}>
      <Avatar.Image
        alt={alt}
        src={src}
        ring={ring}
        shape={shape}
        variant={variant}
      />
      <Avatar.Fallback ring={ring} size={size} shape={shape} variant={variant}>
        CN
      </Avatar.Fallback>
    </Avatar>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Avatar",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    alt: "@shadcn",
    src: "https://github.com/shadcn.png",
    size: 16,
  },
  argTypes: {
    src: {
      control: "text",
      description: "Image source",
    },
    ring: { control: "boolean" },
    size: {
      control: "select",
      options: [4, 8, 12, 16, 24, 32, 48, 64],
    },
    shape: {
      control: "select",
      options: ["round", "circle", "hexagon", "triangle", "television"],
    },
    variant: {
      control: "select",
      options: [
        "accent",
        "default",
        "error",
        "ghost",
        "info",
        "neutral",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    status: { control: "radio", options: ["online", "offline"] },
  },
  decorators: [withAvatar],
} satisfies Meta<ArgsType>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Ayomide: Story = {
  args: {
    alt: "Ayomide B.",
    src: "https://ayomidebakare.site/images/ayomide-circle_logo.png",
  },
};

export const AvatarSize: Story = {
  args: {
    size: 32,
  },
};

export const AvatarShape: Story = {
  args: {
    shape: "television",
  },
};

export const AvatarStatus: Story = {
  args: {
    shape: "circle",
    status: "online",
  },
};

export const AvatarVariant: Story = {
  args: {
    variant: "primary",
  },
};

export const AvatarWithFallback: Story = {
  args: {
    src: "",
    ring: true,
    shape: "circle",
    variant: "primary",
  },
};

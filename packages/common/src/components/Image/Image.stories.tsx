import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./Image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

const src = "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80";

export const Default: Story = {
  args: {
    src,
    alt: "Landscape",
    width: 300,
    height: 200,
  },
};

export const Rounded: Story = {
  args: {
    src,
    alt: "Landscape",
    width: 300,
    height: 200,
    radius: "lg",
  },
};

export const Circular: Story = {
  args: {
    src,
    alt: "Landscape",
    width: 150,
    height: 150,
    radius: "full",
  },
};

export const WithFallback: Story = {
  args: {
    src: "invalid-url.jpg",
    fallbackSrc: "https://via.placeholder.com/300x200?text=Fallback",
    alt: "Fallback Example",
    width: 300,
    height: 200,
  },
};

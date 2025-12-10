import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./AspectRatio";

const meta = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

const Image = () => (
  <img
    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
    alt="Landscape"
    className="h-full w-full object-cover"
  />
);

export const Ratio16_9: Story = {
  args: {
    ratio: "16/9",
    className: "w-[450px] rounded-md overflow-hidden bg-base-200",
    children: <Image />,
  },
};

export const Ratio4_3: Story = {
  args: {
    ratio: "4/3",
    className: "w-[450px] rounded-md overflow-hidden bg-base-200",
    children: <Image />,
  },
};

export const Square: Story = {
  args: {
    ratio: "1/1",
    className: "w-[300px] rounded-md overflow-hidden bg-base-200",
    children: <Image />,
  },
};

export const CustomRatio: Story = {
  args: {
    value: 2.35, // Cinemascope
    className: "w-[450px] rounded-md overflow-hidden bg-base-200",
    children: <Image />,
  },
};

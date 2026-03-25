import type { Meta, StoryObj } from "@storybook/react-vite";
import { Greeting } from "./Greeting";

const meta = {
  title: "Data Display/Greeting",
  component: Greeting,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Greeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: "John" } };
export const WithSubtitle: Story = { args: { name: "Jane", subtitle: "Here's your daily financial summary" } };
export const CustomGreeting: Story = { args: { name: "Alex", greeting: "Welcome back" } };

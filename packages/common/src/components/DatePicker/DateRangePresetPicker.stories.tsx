import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateRangePresetPicker } from "./DateRangePresetPicker";

const meta = {
  title: "Data Input/DateRangePresetPicker",
  component: DateRangePresetPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateRangePresetPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithOutline: Story = {
  args: {
    outline: true,
  },
};

export const CustomPresets: Story = {
  args: {
    presets: [
      { label: "Q1 2024", range: () => ({ from: new Date(2024, 0, 1), to: new Date(2024, 2, 31) }) },
      { label: "Q2 2024", range: () => ({ from: new Date(2024, 3, 1), to: new Date(2024, 5, 30) }) },
      { label: "Q3 2024", range: () => ({ from: new Date(2024, 6, 1), to: new Date(2024, 8, 30) }) },
      { label: "Q4 2024", range: () => ({ from: new Date(2024, 9, 1), to: new Date(2024, 11, 31) }) },
    ],
    label: "Select quarter",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { NativeSelect } from "./NativeSelect";

const meta = {
  component: NativeSelect,
  title: "Form/NativeSelect",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
  <>
    <option disabled selected>
      Pick your favorite Simpson
    </option>
    <option>Homer</option>
    <option>Marge</option>
    <option>Bart</option>
    <option>Lisa</option>
    <option>Maggie</option>
  </>
);

export const Default: Story = {
  args: {
    children: options,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <NativeSelect size="xs">{options}</NativeSelect>
      <NativeSelect size="sm">{options}</NativeSelect>
      <NativeSelect size="md">{options}</NativeSelect>
      <NativeSelect size="lg">{options}</NativeSelect>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <NativeSelect variant="primary">{options}</NativeSelect>
      <NativeSelect variant="secondary">{options}</NativeSelect>
      <NativeSelect variant="accent">{options}</NativeSelect>
      <NativeSelect variant="ghost">{options}</NativeSelect>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    children: options,
    className: "max-w-xs",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: options,
    className: "max-w-xs",
  },
};

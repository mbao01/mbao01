import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Button',
  },
};

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const WideButton: Story = {
  args: {
    wide: true,
    label: 'Wide Button',
  },
};

export const TinyButton: Story = {
  args: {
    size: 'xs',
    label: 'Tiny',
  },
};

export const OutlineButton: Story = {
  args: {
    outline: true,
    label: 'Click me!',
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    label: 'Click me?',
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
    label: 'Loading',
  },
};

export const BlockButton: Story = {
  args: {
    disabled: true,
    className: 'btn-block',
    label: 'Block Button',
  },
};

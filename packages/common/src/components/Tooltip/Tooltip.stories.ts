import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    tip: 'This is a tooltip',
    children: 'Hover on me',
  },
};

export const PrimaryTooltip: Story = {
  args: {
    variant: 'primary',
    tip: 'Primary tooltip',
    children: 'Hover on me',
  },
};

export const SuccessTooltip: Story = {
  args: {
    variant: 'success',
    tip: 'Success tooltip',
    children: 'Hover on me',
  },
};

export const LeftTooltip: Story = {
  args: {
    position: 'left',
    tip: 'Tooltip positioned left',
    children: 'Hover',
  },
};

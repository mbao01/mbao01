import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Text',
  },
};

export const PrimaryText: Story = {
  args: {
    variant: 'primary',
    children: 'Primary text',
  },
};

export const TinyText: Story = {
  args: {
    size: 'xs',
    children: 'Tiny Text',
  },
};

export const HeadingText: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

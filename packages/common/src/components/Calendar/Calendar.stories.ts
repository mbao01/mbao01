import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./Calendar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Molecules/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
    a11y: {
      config: {
        rules: [
          {
            // @fixme
            id: "color-contrast",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs", "skip-test"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    pagedNavigation: false,
  },
};

export const FixedWeeks: Story = {
  args: {
    fixedWeeks: true,
    showOutsideDays: true,
  },
};

export const WeekNumber: Story = {
  args: {
    weekStartsOn: 1, // Monday
    showWeekNumber: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "empty-table-header",
            enabled: false,
          },
          {
            // @fixme
            id: "color-contrast",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
};

export const CalendarFooter: Story = {
  args: {
    footer: "This is the calendar footer",
  },
};

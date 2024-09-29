import type { Meta, StoryObj } from "@storybook/react";
import { format } from "date-fns/format";
import { arSA, es } from "date-fns/locale";
import { DateRangePicker } from "./DateRangePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: DateRangePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    // backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    numberOfMonths: 2,
  },
};

export const DefaultRange: Story = {
  args: {
    numberOfMonths: 2,
    defaultMonth: new Date("2022-03-01"),
    defaultRange: {
      from: new Date("2022-03-01"),
      to: new Date("2022-03-15"),
    },
  },
};

export const CustomLabel: Story = {
  args: {
    label: "How long will you be staying?",
  },
};

export const Locale: Story = {
  args: {
    locale: es,
    label: "¿Cuánto tiempo se quedará?",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const LimitRangeSize: Story = {
  args: {
    min: 3,
    max: 6,
    name: "range",
  },
};

export const DefaultMonth: Story = {
  args: {
    defaultMonth: new Date("2022-03-01"),
  },
};

export const NavigatingMonths: Story = {
  args: {
    captionLayout: "dropdown",
    startMonth: new Date("2022-03-01"),
    endMonth: new Date("2022-06-01"),
  },
};

export const NavigatingMonthsAndYears: Story = {
  args: {
    captionLayout: "dropdown",
    startMonth: new Date(2022, 0),
    endMonth: new Date(2026, 11),
  },
};

export const NavigationDisabled: Story = {
  args: {
    numberOfMonths: 2,
    disableNavigation: true,
    startMonth: new Date(2022, 0),
    endMonth: new Date(2026, 11),
  },
};

export const RightToLeft: Story = {
  args: {
    dir: "rtl",
    locale: arSA,
    label: "كم من الوقت سوف تبقى؟",
  },
};

const NU_LOCALE = "ar-u-nu-arab";
const formatLocaleDate = (date: Date) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const d = date.getDate().toLocaleString(NU_LOCALE);
  const m = format(date, "LLL", { locale: arSA });
  return `${y} ${d}, ${m}`;
};
export const OtherNumberingSystem: Story = {
  args: {
    dir: "rtl",
    locale: arSA,
    showWeekNumber: true,
    getRangeLabel: (range) => {
      return range?.from
        ? range.to
          ? `${formatLocaleDate(range.from)} - ${formatLocaleDate(range.to)}`
          : formatLocaleDate(range.from)
        : undefined;
    },
    formatters: {
      formatDay: (day) => day.getDate().toLocaleString(NU_LOCALE),
      formatWeekNumber: (weekNumber) => {
        return weekNumber.toLocaleString(NU_LOCALE);
      },
      formatCaption: (date, options) => {
        const y = date.getFullYear().toLocaleString(NU_LOCALE);
        const m = format(date, "LLLL", { locale: options?.locale });
        return `${m} ${y}`;
      },
    },
    label: "كم من الوقت سوف تبقى؟",
  },
};

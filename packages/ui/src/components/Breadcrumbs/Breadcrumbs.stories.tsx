import type { Meta, StoryContext, StoryObj } from "@storybook/react";
import { Breadcrumb, Breadcrumbs } from "./Breadcrumbs";
import { getSubpaths } from ".";

type ArgsType = {
  pathname: string;
  subpathLabels?: Record<string, string>;
  includeRoot?: boolean;
};

const withBreadcrumbs = (_: any, context: StoryContext<ArgsType>) => {
  const { pathname, subpathLabels, includeRoot } = context.args;
  const subpaths = getSubpaths(pathname, subpathLabels, includeRoot);

  return (
    <Breadcrumbs>
      {subpaths.map((subpath) => (
        <Breadcrumb>
          <a href={subpath.href.pathname}>{subpath.label}</a>
        </Breadcrumb>
      ))}
    </Breadcrumbs>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Breadcrumbs",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    pathname: "/profile/edit",
    subpathLabels: {
      "/": "Dashboard",
    },
    includeRoot: true,
  },
  argTypes: {
    pathname: {
      control: "text",
      description: "URL pathname",
    },
    subpathLabels: {
      control: "object",
      description: "Object mapping a subpath to a label",
    },
    includeRoot: {
      control: "boolean",
      description: "Include the root path or not",
    },
  },
  decorators: [withBreadcrumbs],
} satisfies Meta<ArgsType>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: { pathname: "/" },
};

export const WithSubpathLabels: Story = {
  args: {
    subpathLabels: {
      "/": "Dashboard",
      "/profile": "Profile",
      "/profile/edit": "Edit Profile",
    },
  },
};

export const WithoutSubpathLabels: Story = {
  args: {
    pathname: "/profile/edit",
    includeRoot: false,
  },
};

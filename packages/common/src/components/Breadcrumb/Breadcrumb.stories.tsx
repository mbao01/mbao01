import type { Meta, StoryContext, StoryFn, StoryObj } from "@storybook/react";
import { getSubpaths } from "../../utilities";
import { Breadcrumb } from "./Breadcrumb";

type ArgsType = {
  pathname: string;
  subpathLabels?: Record<string, string>;
  includeRoot?: boolean;
};

const withBreadcrumb = (_: StoryFn, context: StoryContext<ArgsType>) => {
  const { pathname, subpathLabels, includeRoot } = context.args;
  const subpaths = getSubpaths(pathname, subpathLabels, includeRoot);

  return (
    <Breadcrumb>
      <Breadcrumb.List>
        {subpaths.map(({ href, label }, index) => (
          <>
            <Breadcrumb.Item key={href.pathname}>
              <Breadcrumb.Link asChild>
                <a href={href.pathname}>{label}</a>
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            {subpaths.length > index + 1 ? <Breadcrumb.Separator /> : null}
          </>
        ))}
      </Breadcrumb.List>
    </Breadcrumb>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Breadcrumb",
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
  decorators: [withBreadcrumb],
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

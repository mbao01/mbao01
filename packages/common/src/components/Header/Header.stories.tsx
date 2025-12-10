import type { Meta, StoryObj } from "@storybook/react-vite";
import { BellIcon, MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "../Button";
import { Header, HeaderCenter, HeaderEnd, HeaderStart } from "./Header";

const meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header>
      <HeaderStart>
        <Button variant="ghost" className="text-xl">
          Logo
        </Button>
      </HeaderStart>
      <HeaderCenter>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </HeaderCenter>
      <HeaderEnd>
        <Button>Get Started</Button>
      </HeaderEnd>
    </Header>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <Header>
      <HeaderStart>
        <div className="dropdown">
          <Button variant="ghost" className="btn-circle">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </HeaderStart>
      <HeaderCenter>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </HeaderCenter>
      <HeaderEnd>
        <Button variant="ghost" className="btn-circle">
          <SearchIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="btn-circle">
          <div className="indicator">
            <BellIcon className="h-5 w-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </Button>
      </HeaderEnd>
    </Header>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoxIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Footer, FooterTitle } from "./Footer";

const meta = {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Footer>
      <nav>
        <FooterTitle>Services</FooterTitle>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <FooterTitle>Company</FooterTitle>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <FooterTitle>Legal</FooterTitle>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </Footer>
  ),
};

export const Centered: Story = {
  render: () => (
    <Footer center>
      <aside>
        <BoxIcon className="h-10 w-10" />
        <p className="font-bold">
          ACME Industries Ltd. <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a>
            <YoutubeIcon className="h-6 w-6" />
          </a>
          <a>
            <FacebookIcon className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </Footer>
  ),
};

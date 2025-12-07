import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./Sheet";

const meta = {
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function DefaultExample() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onClose={() => setOpen(false)}>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </SheetDescription>
          </SheetHeader>
          <SheetContent>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <input id="name" value="Pedro Duarte" className="col-span-3 input input-bordered" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <input
                  id="username"
                  value="@peduarte"
                  className="col-span-3 input input-bordered"
                />
              </div>
            </div>
          </SheetContent>
          <SheetFooter>
            <Button type="submit" onClick={() => setOpen(false)}>
              Save changes
            </Button>
          </SheetFooter>
        </Sheet>
      </>
    );
  },
};

export const Sides: Story = {
  render: function SidesExample() {
    const [open, setOpen] = useState(false);
    const [side, setSide] = useState<"top" | "bottom" | "left" | "right">("right");

    const openSide = (s: typeof side) => {
      setSide(s);
      setOpen(true);
    };

    return (
      <div className="flex gap-4">
        <Button onClick={() => openSide("left")}>Left</Button>
        <Button onClick={() => openSide("top")}>Top</Button>
        <Button onClick={() => openSide("bottom")}>Bottom</Button>
        <Button onClick={() => openSide("right")}>Right</Button>

        <Sheet open={open} side={side} onClose={() => setOpen(false)}>
          <SheetHeader>
            <SheetTitle>Sheet Side: {side}</SheetTitle>
            <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
          </SheetHeader>
        </Sheet>
      </div>
    );
  },
};

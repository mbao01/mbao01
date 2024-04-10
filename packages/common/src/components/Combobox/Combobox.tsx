"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import type { ComboboxProps, Item } from "./types";
import { cn } from "../../utilities";
import { Command } from "../Command";
import { Popover } from "../Popover";
import { Button } from "../Button";

export const Combobox = <T extends Item>({
  label,
  items,
  classes,
  emptyText,
  placeholder,
  getItemValue = (item: T) => item.value as string,
  getItemLabel = (item: T) => item.label as string,
}: ComboboxProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setItem] = React.useState<T | null>(null);

  const currentItem = items?.find((item) => getItemValue(item) === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          outline
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", classes?.trigger)}
        >
          {value && currentItem ? getItemLabel(currentItem) : label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className={cn("w-[200px] p-0", classes?.popoverContent)}>
        <Command className={cn(classes?.content)}>
          <Command.Input
            placeholder={placeholder}
            className={cn(classes?.input)}
          />
          <Command.Empty className={cn(classes?.empty)}>
            {emptyText}
          </Command.Empty>
          <Command.List>
            <Command.Group className={cn(classes?.group)}>
              {items?.map((item) => (
                <Command.Item
                  key={getItemValue(item)}
                  value={getItemValue(item)}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? null : currentValue);
                    setItem(item);
                    setOpen(false);
                  }}
                  className={cn(
                    {
                      "bg-base-300": value === getItemValue(item),
                    },
                    classes?.item
                  )}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === getItemValue(item) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {getItemLabel(item)}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </Popover.Content>
    </Popover>
  );
};

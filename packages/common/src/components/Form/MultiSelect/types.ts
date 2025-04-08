import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { VariantProps } from "../../../libs";
import { Command } from "../../Command";
import { getInputCommonClasses } from "../Input/constants";
import {
  getMultiSelectInputClasses,
  getMultiSelectItemClasses,
  getMultiSelectListClasses,
} from "./constants";

export type Item = {
  value: string;
  label?: string;
};

export type MultiSelectProps = React.ComponentPropsWithoutRef<typeof Command> & {
  loop?: boolean;
  values: Item["value"][];
  onValuesChange: (value: string[]) => void;
};

export type MultiSelectContextProps = {
  values: Item["value"][];
  onValueChange: (value: Item["value"], label?: Item["label"]) => void;
  items: Item[];
  open: boolean;
  setOpen: (value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  ref: React.RefObject<HTMLInputElement | null>;
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void;
};

export type MultiSelectTriggerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getInputCommonClasses>;

export type MultiSelectInputProps = Omit<ComponentPropsWithoutRef<typeof Command.Input>, "size"> &
  VariantProps<typeof getMultiSelectInputClasses>;

export type MultiSelectContentProps = HTMLAttributes<HTMLDivElement>;

export type MultiSelectListProps = ComponentPropsWithoutRef<typeof Command.List> &
  VariantProps<typeof getMultiSelectListClasses>;
export type MultiSelectItemProps = Item &
  ComponentPropsWithoutRef<typeof Command.Item> &
  VariantProps<typeof getMultiSelectItemClasses>;

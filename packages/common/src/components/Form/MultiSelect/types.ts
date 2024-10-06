import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { VariantProps } from "../../../libs";
import { Command } from "../../Command";
import {
  getMultiSelectItemClasses,
  getMultiSelectListClasses,
  getMultiSelectTriggerClasses,
} from "./constants";

export type MultiSelectProps = React.ComponentPropsWithoutRef<typeof Command> & {
  loop?: boolean;
  values: string[];
  onValuesChange: (value: string[]) => void;
};

export type MultiSelectContextProps = {
  value: string[];
  onValueChange: (value: any) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  ref: React.RefObject<HTMLInputElement>;
  handleSelect: (e: React.SyntheticEvent<HTMLInputElement>) => void;
};

export type MultiSelectTriggerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof getMultiSelectTriggerClasses>;

export type MultiSelectInputProps = ComponentPropsWithoutRef<typeof Command.Input>;

export type MultiSelectContentProps = HTMLAttributes<HTMLDivElement>;

export type MultiSelectListProps = ComponentPropsWithoutRef<typeof Command.List> &
  VariantProps<typeof getMultiSelectListClasses>;
export type MultiSelectItemProps = {
  value: string;
  label?: string;
} & ComponentPropsWithoutRef<typeof Command.Item> &
  VariantProps<typeof getMultiSelectItemClasses>;

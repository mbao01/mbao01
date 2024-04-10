// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Item = Record<string, any>;

export type ComboboxProps<T extends Item> = {
  label: string;
  items: T[];
  placeholder?: string;
  emptyText?: string;
  getItemValue?: (item: T) => string;
  getItemLabel?: (item: T) => string;
  classes?: Partial<{
    root: string;
    trigger: string;
    content: string;
    input: string;
    empty: string;
    group: string;
    item: string;
    popoverContent: string;
  }>;
};

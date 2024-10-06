"use client";

import type { ComponentRef, KeyboardEvent, MouseEvent, SyntheticEvent } from "react";
import { forwardRef, useCallback, useRef, useState } from "react";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";
import type {
  Item,
  MultiSelectContentProps,
  MultiSelectInputProps,
  MultiSelectItemProps,
  MultiSelectListProps,
  MultiSelectProps,
  MultiSelectTriggerProps,
} from "./types";
import { cn } from "../../../utilities";
import { Badge } from "../../Badge";
import { Command } from "../../Command";
import {
  getMultiSelectClasses,
  getMultiSelectItemClasses,
  getMultiSelectListClasses,
  getMultiSelectTagClasses,
  getMultiSelectTriggerClasses,
} from "./constants";
import { useMultiSelect } from "./hooks";
import { MultiSelectContext } from "./MultiSelectContext";

// TODO : expose the visibility of the popup
const MultiSelect = ({
  values,
  onValuesChange,
  loop = false,
  className,
  children,
  dir,
  ...props
}: MultiSelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [items, setItems] = useState<Item[]>(
    (values ?? []).map((value) => ({ value, label: undefined }))
  );

  const onValueChangeHandler = useCallback(
    (value: string, label?: string) => {
      if (values.includes(value)) {
        setItems(items.filter(({ value: val }) => val !== value));
        onValuesChange(values.filter((val) => val !== value));
      } else {
        setItems([...items, { value, label }]);
        onValuesChange([...values, value]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values]
  );

  const handleSelect = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const selection = target.value.substring(
        target.selectionStart ?? 0,
        target.selectionEnd ?? 0
      );

      setSelectedValue(selection);
      setIsValueSelected(selection === inputValue);
    },
    [inputValue]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const target = inputRef.current;

      if (!target) return;

      if (["ArrowLeft", "ArrowRight", "Backspace", "Delete", "Escape", "Enter"].includes(e.key)) {
        e.stopPropagation();

        const moveNext = () => {
          const nextIndex = activeIndex + 1;
          setActiveIndex(nextIndex > values.length - 1 ? (loop ? 0 : -1) : nextIndex);
        };

        const movePrev = () => {
          const prevIndex = activeIndex - 1;
          setActiveIndex(prevIndex < 0 ? values.length - 1 : prevIndex);
        };

        const moveCurrent = () => {
          const newIndex =
            activeIndex - 1 <= 0 ? (values.length - 1 === 0 ? -1 : 0) : activeIndex - 1;
          setActiveIndex(newIndex);
        };

        switch (e.key) {
          case "ArrowLeft":
            if (dir === "rtl") {
              if (values.length > 0 && (activeIndex !== -1 || loop)) {
                moveNext();
              }
            } else {
              if (values.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            }
            break;

          case "ArrowRight":
            if (dir === "rtl") {
              if (values.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            } else {
              if (values.length > 0 && (activeIndex !== -1 || loop)) {
                moveNext();
              }
            }
            break;

          case "Backspace":
          case "Delete":
            if (values.length > 0) {
              if (activeIndex !== -1 && activeIndex < values.length) {
                onValueChangeHandler(values[activeIndex]);
                moveCurrent();
              } else {
                if (target.selectionStart === 0) {
                  if (selectedValue === inputValue || isValueSelected) {
                    onValueChangeHandler(values[values.length - 1]);
                  }
                }
              }
            }
            break;

          case "Enter":
            setOpen(true);
            break;

          case "Escape":
            if (activeIndex !== -1) {
              setActiveIndex(-1);
            } else if (open) {
              setOpen(false);
            }
            break;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, inputValue, activeIndex, loop]
  );

  return (
    <MultiSelectContext.Provider
      value={{
        items,
        values,
        onValueChange: onValueChangeHandler,
        open,
        setOpen,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
        ref: inputRef,
        handleSelect,
      }}
    >
      <Command
        onKeyDown={handleKeyDown}
        className={cn(getMultiSelectClasses(), className)}
        dir={dir}
        {...props}
      >
        {children}
      </Command>
    </MultiSelectContext.Provider>
  );
};

export const MultiSelectTrigger = ({
  className,
  children,
  size,
  wide,
  outline,
  variant,
  disabled,
  ...props
}: MultiSelectTriggerProps) => {
  const { items, onValueChange, activeIndex } = useMultiSelect();

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div
      className={cn(
        getMultiSelectTriggerClasses({ size, wide, outline, variant, disabled }),
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <Badge
          key={item.value}
          className={cn(
            getMultiSelectTagClasses({ size }),
            "px-1 rounded-xl flex items-center gap-1",
            activeIndex === index && "ring-2 ring-muted-foreground "
          )}
          size={size}
          variant={variant === "default" ? "neutral" : variant}
        >
          <span className="text-xs">{item.label ?? item.value}</span>
          <button
            type="button"
            aria-label={`Remove ${item} option`}
            aria-roledescription="button to remove option"
            onMouseDown={handleMouseDown}
            onClick={() => onValueChange(item.value, item.label)}
            disabled={disabled}
          >
            <span className="sr-only">Remove {item.label ?? item.value} option</span>
            <Cross2Icon className="h-4 w-4 hover:stroke-destructive" />
          </button>
        </Badge>
      ))}
      {children}
    </div>
  );
};

MultiSelectTrigger.displayName = "MultiSelectTrigger";

const MultiSelectInput = ({ className, ...props }: MultiSelectInputProps) => {
  const {
    setOpen,
    inputValue,
    setInputValue,
    activeIndex,
    setActiveIndex,
    handleSelect,
    ref: inputRef,
  } = useMultiSelect();

  return (
    <CommandPrimitive.Input
      {...props}
      tabIndex={0}
      ref={inputRef}
      value={inputValue}
      onValueChange={activeIndex === -1 ? setInputValue : undefined}
      onSelect={handleSelect}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onClick={() => setActiveIndex(-1)}
      className={cn(
        "bg-transparent outline-none flex-1",
        className,
        activeIndex !== -1 && "caret-transparent"
      )}
    />
  );
};

MultiSelectInput.displayName = "MultiSelectInput";

const MultiSelectContent = forwardRef<HTMLDivElement, MultiSelectContentProps>(
  ({ children }, ref) => {
    const { open } = useMultiSelect();
    return (
      <div ref={ref} className="relative">
        {open && children}
      </div>
    );
  }
);

MultiSelectContent.displayName = "MultiSelectContent";

const MultiSelectList = forwardRef<ComponentRef<typeof Command.List>, MultiSelectListProps>(
  ({ className, size, children }, ref) => {
    return (
      <Command.List ref={ref} className={cn(getMultiSelectListClasses({ size }), className)}>
        {children}
        <Command.Empty>
          <span className="text-muted-foreground">No results found</span>
        </Command.Empty>
      </Command.List>
    );
  }
);

MultiSelectList.displayName = "MultiSelectList";

const MultiSelectItem = forwardRef<ComponentRef<typeof Command.Item>, MultiSelectItemProps>(
  ({ className, value, label, children, size, disabled, ...props }, ref) => {
    const { values: options, onValueChange, setInputValue } = useMultiSelect();

    const mousePreventDefault = useCallback((e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const included = options.includes(value);
    return (
      <Command.Item
        ref={ref}
        {...props}
        disabled={disabled}
        onSelect={() => {
          onValueChange(value, label);
          setInputValue("");
        }}
        className={cn(getMultiSelectItemClasses({ included, disabled, size }), className)}
        onMouseDown={mousePreventDefault}
      >
        {children}
        {included && <CheckIcon className="h-4 w-4" />}
      </Command.Item>
    );
  }
);

MultiSelectItem.displayName = "MultiSelectItem";

MultiSelect.Trigger = MultiSelectTrigger;
MultiSelect.Input = MultiSelectInput;
MultiSelect.Content = MultiSelectContent;
MultiSelect.List = MultiSelectList;
MultiSelect.Item = MultiSelectItem;

export { MultiSelect };

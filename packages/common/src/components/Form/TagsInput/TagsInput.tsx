"use client";

import type { ChangeEvent, ClipboardEvent, KeyboardEvent, MouseEvent, SyntheticEvent } from "react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import type { TagsInputProps } from "./types";
import { cn } from "../../../utilities";
import { Badge } from "../../Badge";
import { Input } from "../Input";
import {
  FORMATTING_REGEX,
  getTagClasses,
  getTagDeleteClasses,
  getTagsClasses,
  getTagsInputClasses,
  SPLITTER_REGEX,
} from "./constants";

export const TagsInput = forwardRef<HTMLDivElement, TagsInputProps>(
  (
    {
      onChange,
      defaultTags,
      placeholder,
      maxItems,
      minItems,
      className,
      dir,
      size,
      wide,
      outline,
      variant,
      disabled,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [inputValue, setInputValue] = useState("");
    const [disableInput, setDisableInput] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [isValueSelected, setIsValueSelected] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [tags, setTags] = useState<string[]>(defaultTags ?? []);

    const parseMinItems = minItems ?? 0;
    const parseMaxItems = maxItems ?? Infinity;

    useEffect(() => {
      if (onChange) {
        onChange(tags, inputValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tags]);

    useEffect(() => {
      const verifyDisable = () => {
        if (tags.length - 1 >= parseMinItems) {
          setDisableButton(false);
        } else {
          setDisableButton(true);
        }
        if (tags.length + 1 <= parseMaxItems) {
          setDisableInput(false);
        } else {
          setDisableInput(true);
        }
      };
      verifyDisable();
    }, [tags, parseMinItems, parseMaxItems]);

    const onValueChangeHandler = useCallback(
      (tag: string) => {
        if (!tags.includes(tag) && tags.length < parseMaxItems) {
          setTags([...tags, tag]);
        }
      },
      [tags, parseMaxItems]
    );

    const removeValue = useCallback(
      (tag: string) => {
        if (tags.includes(tag) && tags.length > parseMinItems) {
          setTags([...tags.filter((item) => item !== tag)]);
        }
      },
      [tags, parseMinItems]
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

    const handlePaste = useCallback(
      (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const items = e.clipboardData.getData("text").split(SPLITTER_REGEX);
        const newTags = [...tags];
        items.forEach((item) => {
          const parsedItem = item.replaceAll(FORMATTING_REGEX, "").trim();
          if (
            parsedItem.length > 0 &&
            !newTags.includes(parsedItem) &&
            newTags.length < parseMaxItems
          ) {
            newTags.push(parsedItem);
          }
        });
        setTags(newTags);
        setInputValue("");
      },
      [tags, parseMaxItems]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        const target = e.currentTarget;

        if (["ArrowLeft", "ArrowRight", "Backspace", "Delete", "Escape", "Enter"].includes(e.key)) {
          e.stopPropagation();

          const moveNext = () => {
            const nextIndex = activeIndex + 1 > tags.length - 1 ? -1 : activeIndex + 1;
            if (nextIndex === -1 && inputRef.current) {
              inputRef.current.focus();
              const inputLen = inputRef.current.value.length;
              inputRef.current.setSelectionRange(inputLen, inputLen);
            }
            setActiveIndex(nextIndex);
          };

          const movePrev = () => {
            const prevIndex = activeIndex - 1 < 0 ? tags.length - 1 : activeIndex - 1;
            setActiveIndex(prevIndex);
          };

          const moveCurrent = () => {
            const newIndex =
              activeIndex - 1 <= 0 ? (tags.length - 1 === 0 ? -1 : 0) : activeIndex - 1;
            setActiveIndex(newIndex);
          };

          switch (e.key) {
            case "ArrowLeft":
              if (dir === "rtl") {
                if (tags.length > 0 && activeIndex !== -1) {
                  moveNext();
                }
              } else {
                if (tags.length > 0 && target.selectionStart === 0) {
                  movePrev();
                }
              }
              break;

            case "ArrowRight":
              if (dir === "rtl") {
                if (tags.length > 0) {
                  movePrev();
                }
              } else {
                if (tags.length > 0 && activeIndex !== -1) {
                  moveNext();
                }
              }
              break;

            case "Backspace":
            case "Delete":
              if (tags.length > 0) {
                if (activeIndex !== -1 && activeIndex < tags.length) {
                  removeValue(tags[activeIndex]);
                  moveCurrent();
                } else {
                  if (target.selectionStart === 0) {
                    if (selectedValue === inputValue || isValueSelected) {
                      removeValue(tags[tags.length - 1]);
                    }
                  }
                }
              }
              break;

            case "Escape":
              setActiveIndex(activeIndex === -1 ? tags.length - 1 : -1);
              break;

            case "Enter":
              if (inputValue.trim() !== "") {
                e.preventDefault();
                onValueChangeHandler(inputValue);
                setInputValue("");
              }
              break;
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dir, activeIndex, tags, inputValue, removeValue]
    );

    const handleMouseDown = useCallback((e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    }, []);

    return (
      <div
        {...props}
        ref={ref}
        dir={dir}
        className={cn(getTagsClasses({ size, wide, outline, variant, disabled }), className)}
      >
        {tags.map((tag, index) => (
          <Badge
            tabIndex={activeIndex !== -1 ? 0 : activeIndex}
            key={tag}
            size={size}
            aria-disabled={disableButton}
            data-active={activeIndex === index}
            className={cn(getTagClasses({ size }), {
              "ring-1 ring-inset opacity-80": !disableButton && activeIndex === index,
            })}
            variant={variant === "default" ? "neutral" : variant}
          >
            <span className="truncate max-w-24">{tag}</span>
            <button
              type="button"
              aria-label={`Remove ${tag} option`}
              aria-roledescription="button to remove option"
              disabled={disableButton}
              onMouseDown={handleMouseDown}
              onClick={() => removeValue(tag)}
              className={cn(getTagDeleteClasses())}
            >
              <span className="sr-only">Remove {tag} option</span>
              <Cross2Icon className="h-4 w-4" />
            </button>
          </Badge>
        ))}
        <Input
          ref={inputRef}
          tabIndex={0}
          onSelect={handleSelect}
          aria-label={ariaLabel}
          disabled={disableInput}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          value={inputValue}
          onChange={activeIndex === -1 ? handleChange : undefined}
          placeholder={placeholder}
          onClick={() => setActiveIndex(-1)}
          className={cn(getTagsInputClasses({ size }), {
            "caret-transparent": activeIndex !== -1,
          })}
        />
      </div>
    );
  }
);

TagsInput.displayName = "TagsInput";

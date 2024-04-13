"use client";

import React, { MutableRefObject } from "react";
import {
  defaultCountries,
  usePhoneInput,
  FlagImage,
} from "react-international-phone";
import { type PhoneProps } from "./types";
import { Popover } from "../../Popover";
import { Command } from "../../Command";
import { cn } from "../../../utilities";
import { Button } from "../../Button";
import { Input } from "../Input";
import { getPhoneButtonClasses, getPhoneInputClasses } from "./constants";

const Phone = React.forwardRef<HTMLInputElement, PhoneProps>(
  (
    {
      disabled,
      defaultValue,
      className,
      placeholder,
      onChange,
      variant,
      outline,
      wide,
      size,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const {
      inputValue,
      handlePhoneValueChange,
      inputRef,
      country,
      setCountry,
    } = usePhoneInput({
      value: String(defaultValue) ?? "+231",
      defaultCountry: "lr",
      forceDialCode: true,
      inputRef: ref as MutableRefObject<HTMLInputElement | null>,
    });

    const options = defaultCountries.map((country) => ({
      label: country[0],
      value: country[1],
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handlePhoneValueChange(e);
      onChange?.(e);
    };

    return (
      <div className="join">
        <Popover open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              size={size}
              variant={variant}
              outline={outline}
              className={cn(getPhoneButtonClasses())}
              disabled={disabled}
            >
              <FlagImage
                iso2={country.iso2}
                size={["xs", "sm"].includes(size!) ? "20px" : "30px"}
              />
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-[200px] p-0">
            <Command>
              <Command.Input placeholder="Search country..." />
              <Command.Empty>No country found.</Command.Empty>
              <Command.List>
                <Command.Group>
                  {options.map((option) => (
                    <Command.Item
                      key={option.value}
                      value={option.value}
                      keywords={[option.label, option.value]}
                      onSelect={(currentValue) => {
                        setCountry(currentValue);
                        setOpen(false);
                      }}
                      className={cn({
                        "bg-base-300": country.iso2 === option.value,
                      })}
                    >
                      <FlagImage iso2={option.value} size="20px" />
                      <span className="truncate ml-2">{option.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </Popover.Content>
        </Popover>
        <Input
          type="text"
          ref={inputRef}
          value={inputValue}
          pattern="^\+\d{1,4}\s\d{6,}$"
          inputMode="numeric"
          placeholder={placeholder ?? " "}
          onChange={handleInputChange}
          size={size}
          wide={wide}
          variant={variant}
          outline={outline}
          disabled={disabled}
          className={cn(getPhoneInputClasses(), className)}
          {...props}
        />
      </div>
    );
  }
);
Phone.displayName = "Phone";

export { Phone };

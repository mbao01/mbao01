"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimatedCounterProps } from "./types";
import { cn } from "../../utilities";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Digit = ({ digit, className }: { digit: string; className?: string }) => {
  const numericDigit = parseInt(digit, 10);
  const isNumber = !isNaN(numericDigit);

  if (!isNumber) {
    return <span className={className}>{digit}</span>;
  }

  return (
    <span className={cn("relative inline-block h-[1em] w-[0.6em] overflow-hidden", className)}>
      <span
        className="absolute left-0 flex flex-col transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${numericDigit * 10}%)` }}
      >
        {DIGITS.map((d) => (
          <span key={d} className="flex h-[1em] items-center justify-center">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
};

const AnimatedCounter = ({
  value,
  className,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
  separator = true,
  ...props
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    prevValue.current = displayValue;
    setDisplayValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const formatted = separator
    ? displayValue.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : displayValue.toFixed(decimalPlaces);

  const chars = `${prefix}${formatted}${suffix}`.split("");

  return (
    <span className={cn("inline-flex tabular-nums", className)} {...props}>
      {chars.map((char, i) => (
        <Digit key={`${i}-${char}`} digit={char} />
      ))}
    </span>
  );
};

AnimatedCounter.displayName = "AnimatedCounter";

export { AnimatedCounter };

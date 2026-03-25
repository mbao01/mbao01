"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../utilities";
import type { NumberTickerProps } from "./types";

const NumberTicker = ({
  value,
  className,
  duration = 2,
  decimalPlaces = 0,
  delay = 0,
  ...props
}: NumberTickerProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setHasStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(eased * value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value, duration, hasStarted]);

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      {...props}
    >
      {displayValue.toFixed(decimalPlaces)}
    </span>
  );
};

NumberTicker.displayName = "NumberTicker";

export { NumberTicker };

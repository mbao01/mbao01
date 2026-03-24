"use client";

import { useCallback, useEffect, useState } from "react";
import type { CountdownTimerProps } from "./types";
import { cn } from "../../utilities";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const unitClasses = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
} as const;

const Unit = ({ value, unit, size }: { value: number; unit: string; size: "sm" | "md" | "lg" }) => (
  <div className="flex flex-col items-center">
    <span className="font-bold tabular-nums">{String(value).padStart(2, "0")}</span>
    <span className={cn("text-base-content/50 uppercase tracking-wider", unitClasses[size])}>
      {unit}
    </span>
  </div>
);

const Separator = () => <span className="self-start font-bold text-base-content/30 pt-0.5">:</span>;

const CountdownTimer = ({
  targetDate,
  className,
  label,
  onComplete,
  showSeconds = true,
  size = "md",
  ...props
}: CountdownTimerProps) => {
  const calcTimeLeft = useCallback((): TimeLeft => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const tl = calcTimeLeft();
      setTimeLeft(tl);
      if (tl.days === 0 && tl.hours === 0 && tl.minutes === 0 && tl.seconds === 0) {
        clearInterval(timer);
        onComplete?.();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [calcTimeLeft, onComplete]);

  const sizeClasses = {
    sm: "text-lg gap-1",
    md: "text-2xl gap-2",
    lg: "text-4xl gap-3",
  };

  return (
    <div className={cn("flex flex-col items-center gap-1", className)} {...props}>
      {label && <span className="text-sm text-base-content/60">{label}</span>}
      <div className={cn("flex items-center", sizeClasses[size])}>
        {timeLeft.days > 0 && (
          <>
            <Unit size={size} value={timeLeft.days} unit="days" />
            <Separator />
          </>
        )}
        <Unit size={size} value={timeLeft.hours} unit="hrs" />
        <Separator />
        <Unit size={size} value={timeLeft.minutes} unit="min" />
        {showSeconds && (
          <>
            <Separator />
            <Unit size={size} value={timeLeft.seconds} unit="sec" />
          </>
        )}
      </div>
    </div>
  );
};

CountdownTimer.displayName = "CountdownTimer";

export { CountdownTimer };

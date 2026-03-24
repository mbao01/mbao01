"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "../../utilities";
import type { CountdownTimerProps } from "./types";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

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

  const unitClasses = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  };

  const Unit = ({ value, unit }: { value: number; unit: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-bold tabular-nums">{String(value).padStart(2, "0")}</span>
      <span className={cn("text-base-content/50 uppercase tracking-wider", unitClasses[size])}>{unit}</span>
    </div>
  );

  const Separator = () => (
    <span className="self-start font-bold text-base-content/30 pt-0.5">:</span>
  );

  return (
    <div className={cn("flex flex-col items-center gap-1", className)} {...props}>
      {label && <span className="text-sm text-base-content/60">{label}</span>}
      <div className={cn("flex items-center", sizeClasses[size])}>
        {timeLeft.days > 0 && (
          <>
            <Unit value={timeLeft.days} unit="days" />
            <Separator />
          </>
        )}
        <Unit value={timeLeft.hours} unit="hrs" />
        <Separator />
        <Unit value={timeLeft.minutes} unit="min" />
        {showSeconds && (
          <>
            <Separator />
            <Unit value={timeLeft.seconds} unit="sec" />
          </>
        )}
      </div>
    </div>
  );
};

CountdownTimer.displayName = "CountdownTimer";

export { CountdownTimer };

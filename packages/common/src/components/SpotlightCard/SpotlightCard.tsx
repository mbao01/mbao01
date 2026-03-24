"use client";

import { useCallback, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { cn } from "../../utilities";
import type { SpotlightCardProps } from "./types";

const SpotlightCard = ({
  children,
  className,
  spotlightColor = "oklch(0.7 0.15 250 / 0.15)",
  spotlightSize = 400,
  ...props
}: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          {
            background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          } as CSSProperties
        }
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
};

SpotlightCard.displayName = "SpotlightCard";

export { SpotlightCard };

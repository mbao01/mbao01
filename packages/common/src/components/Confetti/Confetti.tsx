"use client";

import { useEffect, useMemo, useState } from "react";
import type { ConfettiProps } from "./types";

const DEFAULT_COLORS = [
  "oklch(0.7 0.25 250)",
  "oklch(0.7 0.2 330)",
  "oklch(0.75 0.2 150)",
  "oklch(0.8 0.15 60)",
  "oklch(0.7 0.25 25)",
  "oklch(0.7 0.15 200)",
];

const Confetti = ({
  active = false,
  count = 50,
  duration = 3,
  colors = DEFAULT_COLORS,
}: ConfettiProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration * 1000);
      return () => clearTimeout(timer);
    }
    setVisible(false);
  }, [active, duration]);

  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: duration * 0.6 + Math.random() * duration * 0.4,
        color: colors[i % colors.length],
        size: 4 + Math.random() * 6,
        rotation: Math.random() * 360,
      })),
    [count, duration, colors]
  );

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.x}%`,
            top: "-5%",
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            borderRadius: "1px",
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti-fall var(--tw-duration, 3s) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
};

Confetti.displayName = "Confetti";

export { Confetti };

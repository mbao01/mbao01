"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { ShinyButtonProps } from "./types";
import { cn } from "../../utilities";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
  },
} satisfies HTMLMotionProps<"button">;

const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out",
        "bg-[radial-gradient(circle_at_50%_0%,oklch(0.8_0.1_250/0.1)_0%,transparent_60%)]",
        "hover:shadow-[0_0_20px_oklch(0.7_0.15_250/0.3)]",
        "dark:bg-[radial-gradient(circle_at_50%_0%,oklch(0.8_0.15_250/0.15)_0%,transparent_60%)]",
        className
      )}
      {...props}
    >
      <span
        className="relative block size-full text-sm tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg, oklch(1 0 0) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), oklch(1 0 0) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(oklch(0 0 0), oklch(0 0 0)) content-box, linear-gradient(oklch(0 0 0), oklch(0 0 0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,oklch(1_0_0/0.1)_calc(var(--x)+20%),oklch(1_0_0/0.5)_calc(var(--x)+25%),oklch(1_0_0/0.1)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
};

ShinyButton.displayName = "ShinyButton";

export { ShinyButton };

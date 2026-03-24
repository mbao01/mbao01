"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utilities";
import type { AnimatedListProps } from "./types";

const AnimatedList = ({
  items,
  className,
  maxItems,
  staggerDelay = 100,
  ...props
}: AnimatedListProps) => {
  const visibleItems = maxItems ? items.slice(-maxItems) : items;

  return (
    <div className={cn("flex flex-col gap-2 overflow-hidden", className)} {...props}>
      <AnimatePresence initial={false}>
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              delay: index * (staggerDelay / 1000),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

AnimatedList.displayName = "AnimatedList";

export { AnimatedList };

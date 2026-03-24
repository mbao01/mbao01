"use client";

import type { Variant, Variants } from "framer-motion";
import { Children } from "react";
import { motion } from "framer-motion";
import type { AnimatedGroupPreset, AnimatedGroupProps } from "./types";
import { cn } from "../../utilities";

const presetVariants: Record<
  AnimatedGroupPreset,
  { container: { hidden: Variant; visible: Variant }; item: { hidden: Variant; visible: Variant } }
> = {
  fade: {
    container: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  },
  slide: {
    container: { hidden: {}, visible: {} },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: { hidden: {}, visible: {} },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: { hidden: {}, visible: {} },
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: { hidden: {}, visible: {} },
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 12 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
};

const AnimatedGroup = ({
  children,
  className,
  preset = "fade",
  variants: customVariants,
  staggerDelay = 0.1,
  transition,
  ...props
}: AnimatedGroupProps) => {
  const variants = customVariants ?? presetVariants[preset];
  const containerVariants = {
    hidden: variants.container?.hidden ?? {},
    visible: {
      ...(variants.container?.visible as Record<string, unknown>),
      transition: {
        staggerChildren: staggerDelay,
        ...transition,
      },
    },
  } as Variants;

  const itemVariants = {
    hidden: variants.item?.hidden ?? { opacity: 0 },
    visible: {
      ...((variants.item?.visible as Record<string, unknown>) ?? { opacity: 1 }),
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
        ...transition,
      },
    },
  } as Variants;

  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

AnimatedGroup.displayName = "AnimatedGroup";

export { AnimatedGroup };

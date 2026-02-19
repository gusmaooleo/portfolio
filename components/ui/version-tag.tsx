"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function VersionTag() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-full px-3 py-1 cursor-help overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <motion.span
        className="font-mono text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap"
        animate={{
          y: isHovered ? -20 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        v1.0.0-build
      </motion.span>

      <motion.span
        className="absolute font-mono text-[10px] text-orange-500 dark:text-orange-400 whitespace-nowrap"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isHovered ? 0 : 20,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        deployed: 2h ago
      </motion.span>
    </motion.div>
  );
}

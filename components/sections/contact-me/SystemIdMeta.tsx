"use client";

import { motion } from "framer-motion";

const metaLines = [
  { label: "ID", value: "LG-765x974" },
  { label: "ACCESS_LEVEL", value: "FULL_STACK" },
  { label: "STATUS", value: "OPEN_FOR_COLLABORATION" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function SystemIdMeta() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-1.5 font-mono text-[10px] tracking-widest uppercase select-none"
    >
      {metaLines.map((line) => (
        <motion.div
          key={line.label}
          variants={lineVariants}
          className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600"
        >
          <span className="text-zinc-300 dark:text-zinc-700">{">"}</span>
          <span>
            {line.label}:{" "}
            <span className="text-zinc-500 dark:text-zinc-500">
              {line.value}
            </span>
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";

export default function DotPulse() {
  return (
    <div className="relative w-2 h-2 flex items-center justify-center">
      <div className="w-2 h-2 bg-green-500 rounded-full z-10 shadow-[0_0_20px_rgba(249,207,22,0.6)]" />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-green-400/30 rounded-full"
          initial={{ width: 4, height: 4, opacity: 0.8 }}
          animate={{
            width: 32 + i * 20,
            height: 32 + i * 20,
            opacity: 0,
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SystemStatus() {
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDecimal = Math.floor(Math.random() * 10) + 90;
      setUptime(99 + randomDecimal / 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>SYSTEM STATUS: OPERATIONAL</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1 h-3 bg-zinc-300 dark:bg-zinc-700" />
        <motion.span
          key={uptime}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          UPTIME: {uptime.toFixed(3)}%
        </motion.span>
      </div>
    </div>
  );
}

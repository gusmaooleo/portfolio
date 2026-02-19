"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DotPulse from "./DotPulse";

export default function DynamicClock() {
  const [time, setTime] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setTime((prev) => {
        if (prev !== timeString && prev !== "") {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 300);
        }
        return timeString;
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="flex flex-col gap-1 text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 xl:absolute xl:top-20 tracking-tight opacity-0">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col gap-1 text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 xl:absolute xl:top-20 tracking-tight">
      <div className="opacity-50">devleoper</div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-orange-500 dark:text-orange-400">
          🇧🇷 br
        </span>
        <Globe className="w-3 h-3" />
        <div className="relative flex items-center">
          <AnimatePresence mode="wait">
            {isGlitching ? (
              <motion.span
                key="glitch"
                initial={{ opacity: 0.5, x: -1 }}
                animate={{ opacity: 1, x: 1 }}
                exit={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.05, repeat: 3 }}
                className="text-orange-500 dark:text-orange-400"
              >
                {time}
              </motion.span>
            ) : (
              <span className="tabular-nums">{time}</span>
            )}
          </AnimatePresence>
          <span className="text-xs ml-1 text-zinc-400">-3</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DotPulse />
        Worldwide
      </div>
    </div>
  );
}

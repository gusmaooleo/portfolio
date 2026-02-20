"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function formatClockTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  const ms = String(now.getMilliseconds()).padStart(3, "0");
  return `${h}:${m}:${s}.${ms}`;
}

function LiveClock() {
  const [time, setTime] = useState("00:00:00.000");
  const clockRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const isInViewRef = useRef(false);
  const isPageVisibleRef = useRef(true);

  const tick = useCallback(() => {
    setTime(formatClockTime());
  }, []);

  const syncClockLoop = useCallback(() => {
    const shouldRun = isInViewRef.current && isPageVisibleRef.current;

    if (shouldRun && intervalRef.current === null) {
      tick();
      intervalRef.current = window.setInterval(tick, 47);
      return;
    }

    if (!shouldRun && intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [tick]);

  useEffect(() => {
    const clockNode = clockRef.current;
    if (!clockNode) return;

    isPageVisibleRef.current = !document.hidden;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        syncClockLoop();
      },
      { rootMargin: "120px" },
    );
    observer.observe(clockNode);

    const handleVisibilityChange = () => {
      isPageVisibleRef.current = !document.hidden;
      syncClockLoop();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [syncClockLoop]);

  return (
    <span
      ref={clockRef}
      className="font-mono text-[10px] tabular-nums text-zinc-400 dark:text-zinc-600 tracking-wider"
    >
      {time}
    </span>
  );
}

export function FooterSystemBar() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
      }}
      className="w-full flex flex-wrap items-center justify-between gap-y-3 px-6 md:px-12 py-4
        border-t border-zinc-200/60 dark:border-zinc-800/40
        font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase select-none"
    >
      {/* Logo + version + clock */}
      <div className="flex items-center gap-4">
        <span className="font-serif font-bold text-sm text-orange-500 normal-case tracking-normal">
          {"<leo>"}
        </span>
        <span className="hidden sm:inline">v1.0.0-build</span>
        <LiveClock />
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-4">
        {/* Building badge */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full
            border border-orange-400/30 dark:border-orange-400/20
            bg-orange-500/[0.06] dark:bg-orange-500/[0.08]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
          </span>
          <span className="text-orange-500 dark:text-orange-400 normal-case tracking-wide text-[9px] font-medium">
            Building Petly & ChainedFile
          </span>
        </div>

        {/* Systems status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          <span>All systems operational</span>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        if (!cursorRef.current || !ringRef.current) return;

        cursorRef.current.style.transform = `translate3d(${positionRef.current.x - 4}px, ${positionRef.current.y - 4}px, 0)`;
        ringRef.current.style.transform = `translate3d(${positionRef.current.x - 16}px, ${positionRef.current.y - 16}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-zinc-400/80 dark:bg-zinc-500/80 pointer-events-none z-50 hidden md:block backdrop-blur-sm"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-zinc-400/50 dark:border-zinc-500/50 pointer-events-none z-50 hidden md:block"
      />
    </>
  );
}

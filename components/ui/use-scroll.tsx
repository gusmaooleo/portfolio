"use client";
import React from "react";

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);
  const scrolledRef = React.useRef(scrolled);
  const frameRef = React.useRef<number | null>(null);

  const onScroll = React.useCallback(() => {
    const next = window.scrollY > threshold;
    if (next === scrolledRef.current) return;
    scrolledRef.current = next;
    setScrolled(next);
  }, [threshold]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        onScroll();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [onScroll]);

  return scrolled;
}

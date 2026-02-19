"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export function PersonalBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible && (
        <Spline
          scene="https://prod.spline.design/PTJqVwJHZRdoIOwp/scene.splinecode"
          className="w-full h-full bg-transparent"
        />
      )}
    </div>
  );
}

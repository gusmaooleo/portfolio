"use client";

import { PixelTrail } from "../ui/pixel-trail";
import { PersonalBadge } from "./contact-me/PersonalBadge";
import { useEffect, useRef } from "react";

export function ContactMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="contact-me"
      className="flex h-screen flex-row w-screen relative"
    >
      <div ref={containerRef} className="h-full w-1/2 hidden md:block">
        <PersonalBadge />
      </div>
      <div className="h-full w-1/2 relative">
        <PixelTrail
          pixelSize={80}
          fadeDuration={0}
          delay={600}
          pixelClassName="rounded-full bg-[#ffa04f]"
        />
      </div>
      <div className="h-[60px] absolute bottom-0 w-full bg-zinc-50 dark:bg-zinc-950" />
    </section>
  );
}

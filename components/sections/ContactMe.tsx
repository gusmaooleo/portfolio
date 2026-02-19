"use client";

import { useEffect, useRef, useState } from "react";
import { PixelTrail } from "../ui/pixel-trail";
import { PersonalBadge } from "./contact-me/PersonalBadge";
import { SystemIdMeta } from "./contact-me/SystemIdMeta";
import { ContactCard } from "./contact-me/ContactCard";

export function ContactMe() {
  const badgeContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const container = badgeContainerRef.current;
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact-me"
      className="flex h-screen flex-row max-w-screen relative bg-zinc-50 dark:bg-zinc-950"
    >
      <div
        ref={badgeContainerRef}
        className="h-full w-1/2 hidden md:flex flex-col items-center justify-center relative"
      >
        <div className="flex-1 w-full">
          <PersonalBadge />
        </div>
        <div className="absolute bottom-20 left-8">
          <SystemIdMeta />
        </div>
      </div>

      <div className="h-full w-full md:w-1/2 relative flex items-center justify-center">
        {/* Pixel Trail Background */}
        {isSectionVisible && (
          <div className="absolute inset-0">
            <PixelTrail
              pixelSize={80}
              fadeDuration={0}
              delay={600}
              pixelClassName="rounded-full bg-[#ffa04f]"
            />
          </div>
        )}

        {/* Contact Card */}
        <div className="relative z-10 px-4 md:px-0">
          <ContactCard />
        </div>
      </div>

      {/* Footer Bar */}
      <div className="h-[60px] absolute bottom-0 w-full bg-zinc-50 dark:bg-zinc-950" />
    </section>
  );
}

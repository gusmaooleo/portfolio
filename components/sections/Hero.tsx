"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import HeroAnimation from "@/components/sections/hero/HeroAnimation";
import DynamicClock from "./hero/DynamicClock";
import { SystemStatus } from "./hero/SystemStatus";
import { CursorFollower } from "../ui/cursor-follower";
import TextScramble from "../ui/text-scramble";

export function Hero() {
  return (
    <section className="relative w-full min-h-[110vh] overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans -mt-16 md:-mt-20 transition-colors duration-500">
      <CursorFollower />
      <div className="relative w-full min-h-screen flex flex-col md:grid md:grid-cols-12 gap-[var(--grid-gutter)] pt-[var(--section-spacing-mobile)] md:pt-[var(--section-spacing)] px-6 md:px-0 max-w-[var(--container-max-width)] mx-auto z-10 transition-colors duration-500">
        <div className="flex flex-col justify-center h-full space-y-12 md:space-y-16 z-20 relative p-4 md:col-span-6 lg:col-start-2 lg:col-span-5">
          <DynamicClock />

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight leading-tight">
              Creating & <br />
              developing experiences.
            </h2>
            <div>
              <TextScramble className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 -ml-1 leading-[0.9]">
                Leonardo
              </TextScramble>

              <p className="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-300 mt-4 tracking-tight max-w-md leading-relaxed">
                Software & Product Engineer
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm md:text-base font-medium text-zinc-800 dark:text-zinc-200">
            <div className="flex flex-col items-start gap-6 select-none animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex flex-col gap-1">
                <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-2 ml-1">
                  Scroll down to
                </p>
                <div className="flex flex-col">
                  <p className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]">
                    see how can I
                  </p>
                  <p className="text-3xl md:text-4xl font-serif italic font-medium tracking-tight text-zinc-800 dark:text-zinc-200 leading-[1.1]">
                    solve your problem
                  </p>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mt-2 group cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                <ArrowDown className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 md:relative w-full h-full flex items-end justify-end md:items-center md:justify-center md:pb-0 md:pr-0 z-0 text-zinc-400 dark:text-zinc-600 pointer-events-none md:pointer-events-auto md:col-span-6 lg:col-span-6">
          <div className="absolute bottom-8 right-8 xl:absolute xl:bottom-30 xl:right-50">
            <SystemStatus />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <HeroAnimation />
      </div>
    </section>
  );
}

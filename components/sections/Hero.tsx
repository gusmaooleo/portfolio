"use client";

import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAnimation from "@/components/sections/hero/HeroAnimation";

export function Hero() {
  return (
    <section className="relative w-full min-h-[105vh] overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans -mt-16 md:-mt-20 transition-colors duration-500">
      <div className="relative w-full min-h-screen flex flex-col md:grid md:grid-cols-2 pt-24 px-6 md:px-12 z-10 transition-colors duration-500">
        <div className="flex flex-col justify-center h-full space-y-12 md:space-y-24 z-20 relative p-4 xl:pl-50">
          <div className="flex flex-col gap-1 text-xs md:text-sm font-mono text-zinc-500 dark:text-zinc-400 xl:absolute xl:top-20 tracking-tight">
            <div>devleoper</div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-orange-500 dark:text-orange-400">
                br
              </span>
              <Globe className="w-3 h-3" />
              <span>
                {new Date().toLocaleTimeString("pt-BR", { hour12: false })}{" "}
                <span className="text-xs">-3</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400"></span>
              Worldwide
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight">
              Creating & <br />
              developing experiences.
            </h2>
            <div>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 -ml-1">
                Leonardo
              </h1>
              <p className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mt-2 tracking-tight">
                Software & Product Engineer
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm md:text-base font-medium text-zinc-800 dark:text-zinc-200">
            <p>How can</p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="rounded-full px-6 py-5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-all duration-300 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:invert dark:hover:invert-0"
              >
                i solve
              </Button>
            </div>
            <p>
              your <span className="font-bold">problem</span>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 md:relative w-full h-full flex items-center justify-center p-8 md:p-0 z-0 text-zinc-400 dark:text-zinc-600">
          <div className="xl:absolute xl:top-20 xl:right-10 text-xs font-mono text-zinc-500 dark:text-zinc-500">
            personal portfolio&quot;
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <HeroAnimation />
      </div>
    </section>
  );
}

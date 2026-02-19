"use client";

import React from "react";
import { Globe, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAnimation from "@/components/sections/hero/HeroAnimation";

export function Hero() {
  return (
    <section className="relative w-full min-h-[105vh] overflow-hidden text-neutral-900 font-sans -mt-16 md:-mt-20">
      <div className="relative w-full min-h-screen flex flex-col md:grid md:grid-cols-2 pt-24 px-6 md:px-12 z-10">
        <div className="flex flex-col justify-center h-full space-y-12 md:space-y-24 z-20 relative">
          <div className="flex flex-col gap-1 text-xs md:text-sm font-mono text-neutral-500">
            <div>devleoper</div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-black">br</span>
              <Globe className="w-3 h-3" />
              <span>
                {new Date().toLocaleTimeString("pt-BR", { hour12: false })}{" "}
                <span className="text-xs">-3</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Worldwide
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-neutral-800">
              Creating & <br />
              developing experiences.
            </h2>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-900 -ml-1">
                Leonardo
              </h1>
              <p className="text-xl md:text-2xl font-medium text-neutral-700 mt-2">
                Software & Product Engineer
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm md:text-base font-medium text-neutral-800">
            <p>How can</p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="rounded-full px-6 py-5 bg-neutral-200 hover:bg-neutral-300 transition-all font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                i solve
              </Button>
            </div>
            <p>
              your <span className="font-bold">problem</span>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 md:relative w-full h-full flex items-center justify-center p-8 md:p-0 z-0 text-neutral-400">
          <div className="absolute top-20 right-10 text-xs font-mono text-neutral-500">
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

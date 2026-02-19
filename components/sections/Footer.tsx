"use client";

import { ContextCard } from "./footer/ContextCard";
import { ConnectionGrid } from "./footer/ConnectionGrid";
import { FooterSystemBar } from "./footer/FooterSystemBar";

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-50 dark:bg-zinc-950">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          {/* Left — Context Card */}
          <div className="w-full flex justify-center md:justify-start">
            <ContextCard />
          </div>

          {/* Right — Connection Grid */}
          <div className="w-full flex flex-col gap-10 md:pt-4">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase block mb-6">
                {"// navigation"}
              </span>
              <ConnectionGrid />
            </div>
          </div>
        </div>
      </div>

      {/* System Bar */}
      <FooterSystemBar />
    </footer>
  );
}

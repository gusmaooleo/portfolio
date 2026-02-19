"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "../ui/glowing-effect";

interface TechItem {
  name: string;
  snippet: string;
  active?: boolean;
}

interface StackCardProps {
  title: string;
  description: string;
  techs: TechItem[];
  index: number;
}

export function StackCard({
  title,
  description,
  techs,
  index,
}: StackCardProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col gap-5 p-6 md:p-8 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-zinc-900/70 transition-all duration-300"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      {/* Category Title */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tech Items */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="relative"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 cursor-default">
              {tech.active && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
              )}
              <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                {tech.name}
              </span>
            </div>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
                >
                  <div className="px-3 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 shadow-lg border border-zinc-700 dark:border-zinc-300 whitespace-nowrap">
                    <code className="font-mono text-[10px] text-green-400 dark:text-green-600">
                      {tech.snippet}
                    </code>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 border-b border-r border-zinc-700 dark:border-zinc-300" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

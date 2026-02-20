"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useDictionary } from "@/components/dictionary-provider";

export function ContextCard() {
  const { footer } = useDictionary();
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [4, -4]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-4, 4]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="relative w-full max-w-sm rounded-xl overflow-hidden
        border border-zinc-200/60 dark:border-zinc-800/50
        bg-zinc-100/60 dark:bg-zinc-900/60
        backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        select-none group"
    >
      {/* ── Feed viewport ── */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/so_nos_computers.webp"
          alt="Leonardo Gusmão"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 380px"
          priority
        />

        {/* Scanlines overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] dark:opacity-[0.1]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* REC indicator */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="font-mono text-[9px] tracking-widest text-red-400 uppercase font-medium">
            REC
          </span>
        </div>

        {/* Timestamp HUD */}
        <div className="absolute bottom-2 right-3 z-20">
          <span className="font-mono text-[9px] tracking-wider text-white/50">
            CAM_01 — LIVE
          </span>
        </div>
      </div>

      {/* ── Log-style caption ── */}
      <div className="px-4 py-3 border-t border-zinc-200/40 dark:border-zinc-800/40">
        <p className="font-mono text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-500 tracking-wide">
          <span className="text-zinc-400 dark:text-zinc-600">{">"}</span>{" "}
          {footer.contextCaption.replace(/^> /, "")}
        </p>
      </div>
    </motion.div>
  );
}

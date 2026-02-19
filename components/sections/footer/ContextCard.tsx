"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function ContextCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), {
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
      className="relative w-full max-w-sm rounded-2xl overflow-hidden
        border border-zinc-200/60 dark:border-zinc-800/50
        bg-zinc-100/50 dark:bg-zinc-900/50
        backdrop-blur-md
        shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        select-none"
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/so_nos_computers.webp"
          alt="Leonardo Gusmão"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 380px"
          priority
        />
      </div>

      <div className="p-5">
        <p className="font-sans text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Probably I am looking like this right now, but feel free to reach out
          and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    </motion.div>
  );
}

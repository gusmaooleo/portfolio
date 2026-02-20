"use client";

import { motion } from "framer-motion";
import { ContextCard } from "./footer/ContextCard";
import { NavigationMatrix } from "./footer/ConnectionGrid";
import { FooterSystemBar } from "./footer/FooterSystemBar";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0">
        <h1 className="text-6xl md:text-8xl font-black font-sans text-zinc-900 dark:text-zinc-100 opacity-100 mix-blend-multiply dark:mix-blend-overlay leading-[0.85]">
          Thank <br /> You.
        </h1>
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/[0.03] dark:bg-orange-500/[0.05] blur-[100px] z-0" />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent z-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-[var(--container-max-width)] mx-auto px-6 md:px-0 pt-[var(--section-spacing-mobile)] md:pt-[var(--section-spacing)] pb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--grid-gutter)]">
          <div className="md:col-span-12 lg:col-start-2 lg:col-span-10 text-right md:text-left">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 uppercase block mb-12"
            >
              {"// control_center"}
            </motion.span>
          </div>

          <div className="md:col-span-5 lg:col-start-2 lg:col-span-4">
            <ContextCard />
          </div>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
            className="w-full flex flex-col gap-8 md:col-span-7 lg:col-span-5 lg:col-start-7"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-600 uppercase"
            >
              {"// navigation_matrix"}
            </motion.span>
            <NavigationMatrix />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FooterSystemBar />
      </motion.div>
    </footer>
  );
}

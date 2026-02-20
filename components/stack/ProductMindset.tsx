"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { useDictionary } from "@/components/dictionary-provider";

const axes = [
  { label: "Interface", value: 90 },
  { label: "Core", value: 85 },
  { label: "Data", value: 80 },
  { label: "Infra", value: 75 },
  { label: "Low-Level", value: 60 },
  { label: "Product", value: 85 },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function RadarChart() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cx = 150;
  const cy = 150;
  const maxR = 110;
  const levels = 4;
  const angleStep = 360 / axes.length;

  // Generate grid rings
  const rings = useMemo(
    () =>
      Array.from({ length: levels }, (_, i) => {
        const r = (maxR / levels) * (i + 1);
        const points = axes
          .map((_, j) => {
            const { x, y } = polarToCartesian(cx, cy, r, j * angleStep);
            return `${x},${y}`;
          })
          .join(" ");
        return points;
      }),
    [angleStep],
  );

  // Generate data polygon
  const dataPoints = useMemo(
    () =>
      axes
        .map((axis, i) => {
          const r = (axis.value / 100) * maxR;
          const { x, y } = polarToCartesian(cx, cy, r, i * angleStep);
          return `${x},${y}`;
        })
        .join(" "),
    [angleStep],
  );

  // Generate axis lines
  const axisLines = useMemo(
    () =>
      axes.map((_, i) => {
        const { x, y } = polarToCartesian(cx, cy, maxR, i * angleStep);
        return { x1: cx, y1: cy, x2: x, y2: y };
      }),
    [angleStep],
  );

  // Generate label positions
  const labelPositions = useMemo(
    () =>
      axes.map((axis, i) => {
        const { x, y } = polarToCartesian(cx, cy, maxR + 18, i * angleStep);
        return { ...axis, x, y };
      }),
    [angleStep],
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 300"
      className="w-full max-w-[280px] md:max-w-[320px] h-auto"
    >
      {/* Grid rings */}
      {rings.map((points, i) => (
        <polygon
          key={`ring-${i}`}
          points={points}
          fill="none"
          className="stroke-zinc-200 dark:stroke-zinc-800"
          strokeWidth={0.5}
        />
      ))}

      {/* Axis lines */}
      {axisLines.map((line, i) => (
        <line
          key={`axis-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          className="stroke-zinc-200 dark:stroke-zinc-800"
          strokeWidth={0.5}
        />
      ))}

      {/* Data polygon */}
      <motion.polygon
        points={isInView ? dataPoints : axes.map(() => `${cx},${cy}`).join(" ")}
        className="fill-orange-500/10 dark:fill-orange-400/10 stroke-orange-500 dark:stroke-orange-400"
        strokeWidth={1.5}
        initial={false}
        animate={{
          points: isInView
            ? dataPoints
            : axes.map(() => `${cx},${cy}`).join(" "),
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Data points */}
      {axes.map((axis, i) => {
        const r = (axis.value / 100) * maxR;
        const { x, y } = polarToCartesian(cx, cy, r, i * angleStep);
        return (
          <motion.circle
            key={`dot-${i}`}
            cx={isInView ? x : cx}
            cy={isInView ? y : cy}
            r={3}
            className="fill-orange-500 dark:fill-orange-400"
            initial={false}
            animate={{
              cx: isInView ? x : cx,
              cy: isInView ? y : cy,
            }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        );
      })}

      {/* Labels */}
      {labelPositions.map((lbl, i) => (
        <text
          key={`label-${i}`}
          x={lbl.x}
          y={lbl.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-zinc-500 dark:fill-zinc-400 text-[9px] font-mono"
        >
          {lbl.label}
        </text>
      ))}
    </svg>
  );
}

export function ProductMindset() {
  const { stack } = useDictionary();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="col-span-full flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-gradient-to-br from-zinc-50/80 via-white/60 to-orange-50/30 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-orange-950/20"
    >
      {/* Quote Side */}
      <div className="flex-1 space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-[10px] tracking-widest text-orange-500 dark:text-orange-400 uppercase">
            {stack.productMindset.label}
          </span>
          <div className="w-8 h-px bg-orange-500/50 dark:bg-orange-400/50" />
        </div>

        <blockquote className="text-2xl md:text-3xl font-serif italic font-medium text-zinc-800 dark:text-zinc-200 leading-snug tracking-tight">
          {stack.productMindset.quote}
        </blockquote>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
          {stack.productMindset.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {["UX/UI", "Retention", "Conversion", "Sales Funnels"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full font-mono text-[11px] text-orange-600 dark:text-orange-400 bg-orange-100/60 dark:bg-orange-900/30 border border-orange-200/60 dark:border-orange-800/40"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Radar Side */}
      <div className="flex items-center justify-center flex-shrink-0">
        <RadarChart />
      </div>
    </motion.div>
  );
}

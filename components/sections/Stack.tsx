"use client";

import { motion } from "framer-motion";
import { StackCard } from "../stack/StackCard";
import { ProductMindset } from "../stack/ProductMindset";
import { LiquidGradient } from "../ui/flow-gradient-hero-section";

const stackCategories = [
  {
    title: "The Engine",
    description:
      "Core runtimes and languages that power every system I build — chosen for speed, reliability, and developer experience.",
    techs: [
      {
        name: "Node.js",
        snippet: 'process.env.NODE_ENV === "production"',
        active: true,
      },
      { name: "Deno", snippet: "Deno.serve(() => new Response())" },
      { name: "Bun", snippet: "bun run --hot index.ts" },
      {
        name: "TypeScript",
        snippet: "type Safety = NonNullable<T>",
        active: true,
      },
      { name: "Go", snippet: "go func() { ch <- result }()" },
    ],
  },
  {
    title: "The Interface",
    description:
      "The layer users see and feel. Frameworks and state management picked for performance and seamless UX.",
    techs: [
      {
        name: "Next.js",
        snippet: 'export const dynamic = "force-static"',
        active: true,
      },
      { name: "Angular", snippet: "@Component({ standalone: true })" },
      { name: "Zustand", snippet: "const useStore = create(() => ({}))" },
      { name: "Recoil", snippet: "atom({ key: 'state', default: 0 })" },
    ],
  },
  {
    title: "The Vault",
    description:
      "Where data lives. Databases and platforms selected for their query power and real-time capabilities.",
    techs: [
      {
        name: "PostgreSQL",
        snippet: "SELECT * FROM users WHERE active;",
        active: true,
      },
      { name: "MongoDB", snippet: "db.collection.aggregate([...])" },
      {
        name: "Supabase",
        snippet: "supabase.from('t').select('*')",
        active: true,
      },
    ],
  },
  {
    title: "The Watchtower",
    description:
      "Observability and infrastructure. Keeping systems healthy, measurable, and always deployable.",
    techs: [
      { name: "Docker", snippet: "docker compose up -d --build", active: true },
      { name: "AWS", snippet: "aws s3 sync ./dist s3://bucket" },
      { name: "Grafana", snippet: "rate(http_requests_total[5m])" },
      {
        name: "Prometheus",
        snippet: "histogram_quantile(0.99, ...)",
        active: true,
      },
      { name: "Alertmanager", snippet: "route: group_by: ['alertname']" },
    ],
  },
  {
    title: "The Bedrock",
    description:
      "Low-level foundations: systems programming, algorithms, and the understanding of how things actually work.",
    techs: [
      { name: "Rust", snippet: 'fn main() { println!("zero-cost"); }' },
      { name: "Python", snippet: "def dfs(node, visited=set()):" },
      { name: "Networks", snippet: "TCP/IP · DNS · HTTP/2 · TLS" },
      {
        name: "Linux",
        snippet: "systemctl status nginx.service",
        active: true,
      },
    ],
  },
  {
    title: "The Ledger",
    description:
      "Decentralized protocols and immutable storage layers. Building trustless environments with blockchain and permanent data.",
    techs: [
      {
        name: "Arweave",
        snippet: "await arweave.createTransaction({ data: file }, key);",
        active: true,
      },
      {
        name: "Smart Contracts",
        snippet: "pub struct Initialize<'info>",
      },
      {
        name: "Web 3.0",
        snippet: "const provider = new ethers.JsonRpcProvider();",
      },
    ],
  },
];

export function StackSection() {
  return (
    <section
      id="stack"
      className="relative py-[var(--section-spacing-mobile)] md:py-[var(--section-spacing)] px-6 md:px-0 bg-transparent transition-colors duration-500"
    >
      <LiquidGradient
        showPauseButton={false}
        className="absolute inset-0 opacity-25 -z-10"
      />
      <div className="max-w-[var(--container-max-width)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--grid-gutter)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 md:col-span-12 lg:col-start-2 lg:col-span-8"
        >
          <span className="font-mono text-xs tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block mb-4">
            Technologies & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
            Stack
          </h2>
          <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
            Tools and technologies, grouped by intent — from the runtime engine
            to the growth lever.
          </p>
        </motion.div>

        <div className="md:col-span-12 lg:col-start-2 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap-mobile)] md:gap-[var(--grid-gutter)]">
          {stackCategories.map((category, index) => (
            <StackCard
              key={category.title}
              title={category.title}
              description={category.description}
              techs={category.techs}
              index={index}
            />
          ))}

          <ProductMindset />
        </div>
      </div>
    </section>
  );
}

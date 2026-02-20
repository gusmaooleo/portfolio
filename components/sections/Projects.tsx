"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArchitectureDiagram } from "../projects/ArchitectureDiagram";
import { ProjectCard, ProjectCardProps } from "../projects/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    id: "saffira",
    title: "Saffira",
    description:
      "Multitenant Forest Intelligence System. Reducing response time to wildfires through computer vision and spherical trigonometry.",
    tags: ["Node.js", "Python", "YOLO", "Angular", "MongoDB", "OpenLayers"],
    color: "bg-green-500",
    link: "https://aton.com.br/servico/saffira/",
  },
  {
    id: "petly",
    title: "Petly",
    description:
      "P2P Donation Platform connecting donors directly to ONGs. Features recurring payments and transparency tracking.",
    tags: [
      "Node.js",
      "Stripe",
      "AbacatePay",
      "Cron Jobs",
      "Supabase",
      "Next.js",
      "PostgreSQL",
    ],
    color: "bg-yellow-500",
    link: "https://petly.care",
    github: "https://github.com/gusmaooleo/petly-frontend",
  },
  {
    id: "chainedfile",
    title: "ChainedFile",
    description:
      "Web3 Decentralized Storage Interface. Secure, permanent file storage using Arweave protocol with fiat on-ramping.",
    tags: ["Web3", "Arweave", "React", "Crypto"],
    color: "bg-blue-500",
    link: "https://chainedfile.xyz",
    github: "https://github.com/gusmaooleo/ChainedFile",
  },
  {
    id: "morpho",
    title: "Morpho",
    description:
      "Schema Intelligence CLI for MongoDB. Automatically infers structure, detects version changes, and generates migration scripts.",
    tags: ["CLI", "MongoDB", "Schema Inference", "DevTool"],
    color: "bg-emerald-500",
    link: "https://mongo-morpho.xyz",
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState("saffira");

  return (
    <section
      id="projects"
      className="relative bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-screen sticky top-0 border-r border-zinc-200 dark:border-zinc-800 z-10 hidden lg:block overflow-hidden">
          <ArchitectureDiagram activeProject={activeProject} />

          <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-1">
              Architecture Flow
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-bold text-zinc-600 dark:text-zinc-300">
                Live Simulation
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="max-w-2xl mx-auto px-6 md:px-12 py-[var(--section-spacing-mobile)] md:py-[var(--section-spacing)] pb-48">
            <div className="mb-24 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-mono">
                SELECTED WORKS 2024-2026
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Engineering <br />{" "}
                <span className="italic text-zinc-500">Solutions</span>
              </h2>
            </div>

            <div className="flex flex-col gap-0">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProject(project.id)}
                  className="py-12"
                >
                  <motion.div
                    onViewportEnter={() => setActiveProject(project.id)}
                    viewport={{ margin: "-50% 0px -50% 0px" }}
                  >
                    <ProjectCard {...project} index={index} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

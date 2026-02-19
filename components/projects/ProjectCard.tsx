import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  color: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  color,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index! * 0.1 }}
      className="group relative min-h-[60vh] flex flex-col justify-center p-8 md:p-12 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
    >
      <div
        className={cn(
          "absolute left-0 top-0 w-1 h-full transition-all duration-300 opacity-0 group-hover:opacity-100",
          color,
        )}
      />

      <div className="space-y-6 relative z-10">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">
          {title}
        </h3>

        <p className="text-xl md:text-2xl font-serif text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
          {description}
        </p>

        <div className="flex items-center gap-6 pt-4">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-sm font-mono font-medium hover:underline decoration-zinc-400 underline-offset-4"
            >
              <ExternalLink className="w-4 h-4" />
              VISIT PROJECT
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-sm font-mono font-medium hover:underline decoration-zinc-400 underline-offset-4"
            >
              <Github className="w-4 h-4" />
              SOURCE CODE
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

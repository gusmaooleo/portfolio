"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useDictionary } from "@/components/dictionary-provider";

interface FooterLink {
  label: string;
  href: string;
  download?: boolean;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

const linkGroups: LinkGroup[] = [
  {
    title: "Engineering",
    links: [
      { label: "GitHub", href: "https://github.com/gusmaooleo" },
      { label: "LeetCode", href: "https://leetcode.com/u/gusmaooleo/" },
      { label: "Resume", href: "/cv-leonardo-gusmao.pdf", download: true },
    ],
  },
  {
    title: "Design & Product",
    links: [
      { label: "Dribbble", href: "https://dribbble.com/gusmaooleo" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gusmaooleo/" },
    ],
  },
  {
    title: "Direct",
    links: [
      { label: "Telegram", href: "https://t.me/gusmaooleo" },
      { label: "Email", href: "mailto:leogusmaocf@gmail.com" },
    ],
  },
];

const cellVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export function NavigationMatrix() {
  const { footer } = useDictionary();

  const translatedGroups = linkGroups.map((group) => {
    const key =
      group.title === "Engineering"
        ? "engineering"
        : group.title === "Design & Product"
          ? "designProduct"
          : "direct";
    return { ...group, title: footer.nav[key as keyof typeof footer.nav] };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
      {translatedGroups.map((group, gi) => (
        <motion.div
          key={group.title}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: gi * 0.12 },
            },
          }}
          className="flex flex-col"
        >
          {/* Column title */}
          <div className="px-4 py-2.5 border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-100/30 dark:bg-zinc-900/30">
            <span className="font-serif italic text-sm text-zinc-700 dark:text-zinc-300 tracking-tight">
              {group.title}
            </span>
          </div>

          {/* Link cells */}
          {group.links.map((link) => (
            <motion.div key={link.label} variants={cellVariants}>
              <a
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download || undefined}
                className="group/cell flex items-center justify-between px-4 py-3
                  border border-zinc-200/40 dark:border-zinc-800/40
                  cursor-crosshair
                  transition-all duration-300
                  hover:bg-orange-500/[0.04] dark:hover:bg-orange-500/[0.06]
                  hover:border-orange-400/30 dark:hover:border-orange-400/20
                  hover:shadow-[inset_0_0_20px_rgba(255,160,79,0.04)]"
              >
                <span
                  className="font-mono text-xs text-zinc-500 dark:text-zinc-400
                    group-hover/cell:text-orange-500 dark:group-hover/cell:text-orange-400
                    transition-colors duration-300"
                >
                  {link.label}
                </span>
                <ArrowUpRight
                  className="w-3 h-3 text-zinc-300 dark:text-zinc-700
                    group-hover/cell:text-orange-500/70 dark:group-hover/cell:text-orange-400/70
                    group-hover/cell:translate-x-0.5 group-hover/cell:-translate-y-0.5
                    transition-all duration-300"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

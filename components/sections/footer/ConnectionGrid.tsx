"use client";

import { ArrowUpRight } from "lucide-react";

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
      {
        label: "GitHub",
        href: "https://github.com/gusmaooleo",
      },
      {
        label: "LeetCode",
        href: "https://leetcode.com/u/gusmaooleo/",
      },
      {
        label: "Resume",
        href: "/cv-leonardo-gusmao.pdf",
        download: true,
      },
    ],
  },
  {
    title: "Design & Product",
    links: [
      {
        label: "Dribbble",
        href: "https://dribbble.com/gusmaooleo",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gusmaooleo/",
      },
    ],
  },
  {
    title: "Direct",
    links: [
      {
        label: "Telegram",
        href: "https://t.me/gusmaooleo",
      },
      {
        label: "Email",
        href: "mailto:leogusmaocf@gmail.com",
      },
    ],
  },
];

export function ConnectionGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
      {linkGroups.map((group) => (
        <div key={group.title} className="flex flex-col gap-4">
          {/* Group title — Serif italic */}
          <h4 className="font-serif italic text-base text-zinc-900 dark:text-zinc-100 tracking-tight">
            {group.title}
          </h4>

          {/* Links — Mono */}
          <ul className="flex flex-col gap-2.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download ? true : undefined}
                  className="group inline-flex items-center gap-1.5 font-mono text-sm
                    text-zinc-500 dark:text-zinc-400
                    hover:text-orange-500 dark:hover:text-orange-400
                    transition-colors duration-300"
                >
                  {link.label}
                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-2px]
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0
                      transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

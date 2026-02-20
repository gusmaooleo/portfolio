"use client";

import Link from "next/link";
import { useDictionary } from "@/components/dictionary-provider";

export default function NotFound() {
  const { notFound } = useDictionary();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <h2 className="text-4xl font-serif mb-4">{notFound.title}</h2>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        {notFound.description}
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-mono text-sm hover:opacity-90 transition-opacity"
      >
        {notFound.cta}
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <h2 className="text-4xl font-serif mb-4">Not Found</h2>
      <p className="mb-4 text-zinc-600 dark:text-zinc-400">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-mono text-sm hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  );
}

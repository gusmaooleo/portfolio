export function SiteFooter() {
  return (
    <footer className="h-full w-full flex items-center justify-between px-6 md:px-12 font-mono text-[10px] tracking-widest text-zinc-400 dark:text-zinc-600 uppercase select-none">
      <span className="font-serif font-bold text-sm text-orange-500 normal-case tracking-normal">
        {"<leo>"}
      </span>

      <span>v1.0.0-build</span>

      <div className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
        </span>
        <span>All systems operational</span>
      </div>
    </footer>
  );
}

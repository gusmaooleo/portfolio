import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt-BR", label: "Português", flag: "🇧🇷" },
  { code: "zh-CN", label: "简体中文", flag: "🇨🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const LanguageSelectorDropdown = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
          "bg-white/60 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm",
          "border-gray-200 dark:border-neutral-700",
          "text-gray-800 dark:text-neutral-200",
          "hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all",
        )}
      >
        <span>{selected.flag}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={cn(
            "absolute w-48 rounded-xl overflow-hidden",
            // Mobile: Up and Right (aligned-left)
            "bottom-full mb-2 left-0 origin-bottom-left",
            // Desktop: Down and Left (aligned-right)
            "md:top-full md:mt-2 md:right-0 md:left-auto md:bottom-auto md:mb-0 md:origin-top-right",
            "bg-white/90 dark:bg-neutral-900/95 backdrop-blur-xl",
            "shadow-lg border border-gray-200 dark:border-neutral-700",
            "animate-fade-in",
          )}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors",
                selected.code === lang.code
                  ? "font-semibold text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800",
              )}
            >
              <span>{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {selected.code === lang.code && (
                <Check className="h-4 w-4 text-blue-500 dark:text-blue-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

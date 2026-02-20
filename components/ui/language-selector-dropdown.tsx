"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";

const languages = [
  { code: "en" as Locale, label: "English", flag: "🇺🇸" },
  { code: "pt" as Locale, label: "Português", flag: "🇧🇷" },
  { code: "cn" as Locale, label: "简体中文", flag: "🇨🇳" },
  { code: "es" as Locale, label: "Español", flag: "🇪🇸" },
  { code: "jp" as Locale, label: "日本語", flag: "🇯🇵" },
  { code: "de" as Locale, label: "Deutsch", flag: "🇩🇪" },
];

export const LanguageSelectorDropdown = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Derive current locale from URL
  const currentLocale =
    i18n.locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    ) ?? i18n.defaultLocale;

  const selected =
    languages.find((l) => l.code === currentLocale) ?? languages[0];

  useEffect(() => {
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
  }, []);

  const handleLanguageChange = (lang: Locale) => {
    // Replace the current locale segment in the path
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
    setOpen(false);
  };

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

      {/* Dropdown */}
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
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                lang.code === currentLocale
                  ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 font-medium"
                  : "text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800/50",
              )}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

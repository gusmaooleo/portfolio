import type { Locale } from "@/i18n-config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  jp: () => import("@/dictionaries/jp.json").then((m) => m.default),
  cn: () => import("@/dictionaries/cn.json").then((m) => m.default),
  de: () => import("@/dictionaries/de.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

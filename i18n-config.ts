export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pt", "es", "jp", "cn", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

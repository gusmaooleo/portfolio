import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionaries";
import { DictionaryProvider } from "@/components/dictionary-provider";
import { LangSetter } from "@/components/lang-setter";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <LangSetter lang={lang} />
      {children}
    </DictionaryProvider>
  );
}

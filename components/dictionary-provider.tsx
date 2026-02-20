"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/dictionary-type";

const DictionaryContext = createContext<Dictionary>({} as Dictionary);

export function useDictionary() {
  return useContext(DictionaryContext);
}

export function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

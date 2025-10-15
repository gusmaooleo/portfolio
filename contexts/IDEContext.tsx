"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { File, Folder } from "@/types/sidebar";
import { folders } from "@/lib/known-routes";

interface IDEContextProps {
  openTabs: Folder;
  activeTab?: File;
  openFile: (tab: File) => void;
  closeFile: (routeName: string) => void;
  setActiveTab: (routeName: string) => void;
}

const IDEContext = createContext<IDEContextProps | undefined>(undefined);

export function IDEProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState<Folder>([]);
  const [activeTab, setActiveTabState] = useState<File | undefined>();

  const openFile = (tab: File) => {
    setOpenTabs((prev) => {
      const exists = prev.some((t) => t.routeName === tab.routeName);
      if (!exists) return [...prev, tab];
      return prev;
    });
    setActiveTabState(tab);
    router.push(tab.routeName);
  };

  const closeFile = (routeName: string) => {
    setOpenTabs((prev) => prev.filter((t) => t.routeName !== routeName));
    if (activeTab?.routeName === routeName) {
      const remaining = openTabs.filter((t) => t.routeName !== routeName);
      const fallback = remaining.at(-1);
      if (fallback) {
        setActiveTabState(fallback);
        router.push(fallback.routeName);
      } else {
        setActiveTabState(undefined);
        router.push("/");
      }
    }
  };

  const setActiveTab = (routeName: string) => {
    const tab = openTabs.find((t) => t.routeName === routeName);
    if (tab) {
      setActiveTabState(tab);
      router.push(tab.routeName);
    }
  };

  useEffect(() => {
    if (!pathname) return;

    const match = folders.flat().find((f) => f.routeName === pathname);
    if (match) {
      setOpenTabs((prev) => {
        const exists = prev.some((t) => t.routeName === match.routeName);
        if (exists) return prev;
        return [...prev, match];
      });
      setActiveTabState(match);
    }
  }, [pathname]);

  return (
    <IDEContext.Provider
      value={{ openTabs, activeTab, openFile, closeFile, setActiveTab }}
    >
      {children}
    </IDEContext.Provider>
  );
}

export const useIDE = () => {
  const ctx = useContext(IDEContext);
  if (!ctx) throw new Error("useIDE must be used within IDEProvider");
  return ctx;
};

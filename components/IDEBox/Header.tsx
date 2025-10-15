"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import { useIDE } from "@/contexts/IDEContext";

export default function IDEBoxHeader() {
  const { openTabs, setActiveTab, closeFile } = useIDE();
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full border-b border-teal-900 font-mono font-semibold text-sm text-amber-100 items-center justify-between">
      <div className="flex flex-row items-center h-full">
        <div className="text-orange-400 flex items-center px-3 border-r border-teal-900 h-full">
          <SidebarTrigger
            className="cursor-pointer hover:bg-transparent hover:text-orange-500"
            icon={<Menu />}
          />
        </div>

        {openTabs.map((tab) => (
          <div
            onClick={() => setActiveTab(tab.routeName)}
            key={tab.routeName}
            className={`hover:bg-teal-950/50 duration-100 ease-in flex flex-row gap-2 text-center border-r border-teal-900 h-full py-2 px-4 ${
              pathname === tab.routeName
                ? " border-b-3 border-b-orange-500"
                : ""
            }`}
          >
            <Link href={tab.routeName}>
              <p>{tab.routeName}</p>
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeFile(tab.routeName);
              }}
              className="ml-2 hover:text-orange-500 cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center h-full">
        <div className="flex items-center border-l border-teal-900 h-full px-4 py-2">
          /contact-me
        </div>
        <div className="text-orange-400 gap-3 flex items-center border-l border-teal-900 h-full px-4 py-2">
          <p>@leonardo</p>
          <Image
            src={"/logo-portfolio.svg"}
            alt="logo"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
}

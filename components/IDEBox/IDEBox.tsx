import React from "react";
import { SidebarProvider } from "../ui/sidebar";
import IDEBoxFooter from "./Footer";
import IDEBoxHeader from "./Header";
import IDESidebar from "./Sidebar/Sidebar";
import { IDEProvider } from "@/contexts/IDEContext";

export default function IDEBox({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider className="relative min-h-0 h-full overflow-hidden">
      <div className="flex flex-col w-full h-full bg-teal-950/60 sm:rounded-xl backdrop-blur-[2px] sm:border border-teal-900 justify-between">
        <IDEProvider>
          <IDEBoxHeader />
          <div className="flex flex-row h-full">
            <IDESidebar />
            {children}
          </div>
        </IDEProvider>
        <IDEBoxFooter />
      </div>
    </SidebarProvider>
  );
}

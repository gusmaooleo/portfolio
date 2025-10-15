"use client";

import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import SidebarFolder from "./Folder";
import { folders } from "@/lib/known-routes";

export default function IDESidebar() {
  return (
    <Sidebar className="w-0 relative h-full flex duration-80">
      <SidebarContent className="w-[18rem] sm:w-[16rem] bg-teal-950/80 border-r-1 rounded-r-lg border-teal-900">
        <SidebarGroup>
          <div className="flex flex-col text-sm font-mono text-teal-200 p-1">
            {folders.map((file) => (
              <SidebarFolder key={file[0].routeName} files={file} />
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

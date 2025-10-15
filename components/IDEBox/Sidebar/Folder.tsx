import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIDE } from "@/contexts/IDEContext";
import { Folder } from "@/types/sidebar";
import { Folder as Fold, FolderOpen } from "lucide-react";
import { useState } from "react";

export default function SidebarFolder({ files }: { files: Folder }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { openFile } = useIDE();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="key-1">
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          {isOpen ? <FolderOpen size={16} /> : <Fold size={16} />}
          <AccordionTrigger className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            /me
          </AccordionTrigger>
        </div>
        <div className="ml-4 cursor-pointer">
          {files.map((file) => (
            <AccordionContent
              onClick={() => openFile(file)}
              className="pb-2"
              key={file.routeName}
            >
              {file.filename}
            </AccordionContent>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

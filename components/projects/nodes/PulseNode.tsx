import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { ScanFace } from "lucide-react";

interface PulseNodeProps {
  data: {
    label: string;
    description?: string;
  };
  selected?: boolean;
}

const PulseNode = ({ data, selected }: PulseNodeProps) => {
  return (
    <div className="relative group">
      {/* Pulse Effect */}
      <div className="absolute -inset-1 bg-red-500/20 dark:bg-red-500/10 rounded-xl blur-lg animate-pulse" />

      <div
        className={cn(
          "relative px-5 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 min-w-[200px]",
          "bg-white/95 dark:bg-zinc-900/95",
          "border-red-200 dark:border-red-900/30",
          selected && "ring-2 ring-red-500/20 box-border",
        )}
      >
        <Handle
          type="target"
          position={Position.Left}
          className="w-3 h-3 !bg-red-400 !border-2 !border-white dark:!border-zinc-950"
        />

        <div className="flex items-center gap-3 mb-2">
          <div className="p-1.5 rounded-md bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
            <ScanFace className="w-4 h-4" />
          </div>
          <div className="font-mono text-sm font-bold text-zinc-800 dark:text-zinc-100">
            {data.label}
          </div>
        </div>

        {data.description && (
          <div className="text-xs font-serif italic text-zinc-600 dark:text-zinc-400">
            {data.description}
          </div>
        )}

        <Handle
          type="source"
          position={Position.Right}
          className="w-3 h-3 !bg-red-400 !border-2 !border-white dark:!border-zinc-950"
        />
      </div>
    </div>
  );
};

export default memo(PulseNode);

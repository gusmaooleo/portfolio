import { Handle, Position } from "@xyflow/react";
import { memo } from "react";
import { cn } from "@/lib/utils";

interface ServiceNodeProps {
  data: {
    label: string;
    icon?: React.ReactNode;
    type?: "database" | "server" | "client" | "service";
    description?: string;
  };
  selected?: boolean;
}

const ServiceNode = ({ data, selected }: ServiceNodeProps) => {
  return (
    <div
      className={cn(
        "px-4 py-3 rounded-lg shadow-lg border backdrop-blur-md transition-all duration-300 min-w-[180px]",
        "bg-white/90 dark:bg-zinc-900/90",
        selected
          ? "border-zinc-500 dark:border-zinc-400 ring-2 ring-zinc-500/20"
          : "border-zinc-200 dark:border-zinc-800",
      )}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 !bg-zinc-400 dark:!bg-zinc-600 !border-2 !border-white dark:!border-zinc-950"
      />

      <div className="flex items-center gap-3 mb-2">
        {data.icon && (
          <div className="text-zinc-600 dark:text-zinc-400">{data.icon}</div>
        )}
        <div className="font-mono text-sm font-bold text-zinc-800 dark:text-zinc-100">
          {data.label}
        </div>
      </div>

      {data.description && (
        <div className="text-xs font-sans text-zinc-500 dark:text-zinc-400 leading-tight">
          {data.description}
        </div>
      )}

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 !bg-zinc-400 dark:!bg-zinc-600 !border-2 !border-white dark:!border-zinc-950"
      />
    </div>
  );
};

export default memo(ServiceNode);

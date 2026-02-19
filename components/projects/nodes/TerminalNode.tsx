import { Handle, Position } from "@xyflow/react";
import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalNodeProps {
  data: {
    label: string;
    commands: string[];
  };
}

const TerminalNode = ({ data }: TerminalNodeProps) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % data.commands.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [data.commands.length]);

  return (
    <div className="rounded-lg shadow-2xl overflow-hidden min-w-[240px] font-mono border border-zinc-800 bg-[#0d1117]">
      <div className="bg-zinc-800/50 px-3 py-1 flex items-center gap-1.5 border-b border-zinc-800">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="ml-2 text-[10px] text-zinc-400">{data.label}</div>
      </div>

      <div className="p-3 text-xs space-y-1 h-[80px] flex flex-col justify-end">
        <Handle type="target" position={Position.Left} className="!opacity-0" />

        {data.commands.map((cmd, i) => (
          <div
            key={i}
            className={cn(
              "transition-opacity duration-300 flex gap-2",
              i === currentLine
                ? "opacity-100 text-green-400"
                : "opacity-30 text-zinc-500",
            )}
          >
            <span className="text-zinc-600">$</span>
            <span>{cmd}</span>
          </div>
        ))}

        <Handle
          type="source"
          position={Position.Right}
          className="!opacity-0"
        />
      </div>
    </div>
  );
};

export default memo(TerminalNode);

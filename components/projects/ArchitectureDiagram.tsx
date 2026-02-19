"use client";

import { useEffect, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Edge,
  Background,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import ServiceNode from "./nodes/ServiceNode";
import PulseNode from "./nodes/PulseNode";
import TerminalNode from "./nodes/TerminalNode";

const nodeTypes = {
  service: ServiceNode,
  pulse: PulseNode,
  terminal: TerminalNode,
};

interface ArchitectureDiagramProps {
  activeProject: string;
}

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Initialize" },
    type: "service",
  },
];
const initialEdges: Edge[] = [];

// Define flows for each project
const projectFlows = {
  saffira: {
    nodes: [
      {
        id: "cam",
        type: "service",
        position: { x: 50, y: 100 },
        data: {
          label: "IoT Camera",
          type: "client",
          description: "Forest Monitoring",
        },
      },
      {
        id: "ai",
        type: "pulse",
        position: { x: 300, y: 100 },
        data: { label: "YOLO Service", description: "Fire Detection Logic" },
      },
      {
        id: "backend",
        type: "service",
        position: { x: 550, y: 100 },
        data: { label: "Node.js Backend", type: "server" },
      },
      {
        id: "db",
        type: "service",
        position: { x: 550, y: 250 },
        data: { label: "MongoDB", type: "database" },
      },
      {
        id: "dash",
        type: "service",
        position: { x: 800, y: 100 },
        data: {
          label: "Dashboard",
          type: "client",
          description: "Angular / OpenLayers",
        },
      },
      {
        id: "inf",
        type: "service",
        position: { x: 300, y: -50 },
        data: {
          label: "Prometheus",
          type: "service",
          description: "Metrics & Alerts",
        },
      },
    ],
    edges: [
      { id: "e1", source: "cam", target: "ai", animated: true },
      { id: "e2", source: "ai", target: "backend", animated: true },
      { id: "e3", source: "backend", target: "db" },
      { id: "e4", source: "backend", target: "dash", animated: true },
      {
        id: "e5",
        source: "inf",
        target: "backend",
        style: { strokeDasharray: "5,5" },
      },
    ],
  },
  petly: {
    nodes: [
      {
        id: "donor",
        type: "service",
        position: { x: 50, y: 150 },
        data: { label: "Donor", type: "client" },
      },
      {
        id: "pay",
        type: "service",
        position: { x: 300, y: 150 },
        data: { label: "Payment Gateway", description: "Stripe / AbacatePay" },
      },
      {
        id: "plat",
        type: "service",
        position: { x: 550, y: 150 },
        data: {
          label: "Petly Core",
          type: "server",
          description: "Node.js / Cron Jobs",
        },
      },
      {
        id: "ong",
        type: "service",
        position: { x: 800, y: 150 },
        data: { label: "ONG Dashboard", type: "client" },
      },
    ],
    edges: [
      { id: "e1", source: "donor", target: "pay", animated: true },
      { id: "e2", source: "pay", target: "plat", animated: true },
      { id: "e3", source: "plat", target: "ong", animated: true },
    ],
  },
  chainedfile: {
    nodes: [
      {
        id: "pass",
        type: "service",
        position: { x: 50, y: 100 },
        data: { label: "Passphrase", type: "client" },
      },
      {
        id: "wallet",
        type: "service",
        position: { x: 300, y: 100 },
        data: { label: "Wallet Gen", type: "service" },
      },
      {
        id: "fiat",
        type: "service",
        position: { x: 300, y: 250 },
        data: { label: "Fiat Gateway", description: "Pix / Card" },
      },
      {
        id: "arweave",
        type: "service",
        position: { x: 600, y: 100 },
        data: {
          label: "Arweave Protocol",
          type: "database",
          description: "Permanent Storage",
        },
      },
    ],
    edges: [
      { id: "e1", source: "pass", target: "wallet", animated: true },
      { id: "e2", source: "fiat", target: "wallet", animated: true },
      { id: "e3", source: "wallet", target: "arweave", animated: true },
    ],
  },
  morpho: {
    nodes: [
      {
        id: "mongo",
        type: "service",
        position: { x: 50, y: 150 },
        data: { label: "MongoDB Col", type: "database" },
      },
      {
        id: "cli",
        type: "terminal",
        position: { x: 300, y: 100 },
        data: {
          label: "Morpho CLI",
          commands: ["morpho init", "morpho up", "Generating schems..."],
        },
      },
      {
        id: "schema",
        type: "service",
        position: { x: 650, y: 100 },
        data: { label: "Schema Ver.", type: "service" },
      },
      {
        id: "mig",
        type: "service",
        position: { x: 650, y: 250 },
        data: { label: "Migration Script", type: "service" },
      },
    ],
    edges: [
      { id: "e1", source: "mongo", target: "cli", animated: true },
      { id: "e2", source: "cli", target: "schema", animated: true },
      { id: "e3", source: "cli", target: "mig", animated: true },
    ],
  },
};

function Flow({ activeProject }: ArchitectureDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { theme } = useTheme();
  const { fitView } = useReactFlow();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Determine which project flows to load
    const flow =
      projectFlows[activeProject as keyof typeof projectFlows] ||
      projectFlows.saffira;

    setNodes(flow.nodes);
    setEdges(
      flow.edges.map((edge) => ({
        ...edge,
        style: {
          stroke: theme === "dark" ? "#52525b" : "#d4d4d8", // zinc-700 : zinc-300 (do tailwind)
          strokeWidth: 2,
        },
      })),
    );

    setTimeout(() => {
      fitView({ duration: 800, padding: 0.2 });
    }, 100);
  }, [activeProject, theme, setNodes, setEdges, fitView]);

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500"
      >
        <Background color={theme === "dark" ? "#333" : "#ddd"} gap={20} />
      </ReactFlow>
    </div>
  );
}

export function ArchitectureDiagram({
  activeProject,
}: ArchitectureDiagramProps) {
  return (
    <ReactFlowProvider>
      <Flow activeProject={activeProject} />
    </ReactFlowProvider>
  );
}

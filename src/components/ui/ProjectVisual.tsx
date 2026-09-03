import React from "react";
import {
  MessageSquare,
  Sparkles,
  Workflow,
  Box,
  FolderTree,
  Eye,
  ArrowDown,
  TrendingUp,
  LineChart,
  BrainCircuit,
  History,
  MapPin,
  Camera,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface ProjectVisualProps {
  projectId: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId }) => {
  if (projectId === "nexus-ai") {
    const pipelineSteps = [
      {
        name: "User Prompt",
        desc: "Natural language project request",
        icon: <MessageSquare className="w-3.5 h-3.5 text-slate-400" />,
      },
      {
        name: "Gemini Agent",
        desc: "Plan schema, tools & file structure",
        icon: <Sparkles className="w-3.5 h-3.5 text-indigo-400" />,
      },
      {
        name: "Inngest Workflow",
        desc: "Durable multi-step execution loop",
        icon: <Workflow className="w-3.5 h-3.5 text-cyan-400" />,
      },
      {
        name: "E2B Sandbox",
        desc: "Isolated cloud microVM execution",
        icon: <Box className="w-3.5 h-3.5 text-emerald-400" />,
      },
      {
        name: "Generated Project",
        desc: "Automated files & database sync",
        icon: <FolderTree className="w-3.5 h-3.5 text-amber-400" />,
      },
      {
        name: "Live Preview",
        desc: "Instant real-time application test",
        icon: <Eye className="w-3.5 h-3.5 text-emerald-400" />,
      },
    ];

    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] shadow-xl p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <span className="font-mono text-slate-300 font-medium">
            System Architecture
          </span>
          <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
            Multi-Agent Sandbox Pipeline
          </span>
        </div>

        {/* Clean Architecture Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {pipelineSteps.map((step, idx) => (
            <div
              key={step.name}
              className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5 group hover:border-slate-700 transition-colors"
            >
              <div className="p-1.5 rounded-md bg-slate-800/80 shrink-0 mt-0.5">
                {step.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-200">
                    {step.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Labels */}
        <div className="pt-2 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <span className="text-slate-500 text-[11px]">Core Stack:</span>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="text-indigo-300">Gemini</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-300">Inngest</span>
            <span className="text-slate-600">·</span>
            <span className="text-emerald-300">E2B</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">tRPC</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Prisma</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Next.js</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "tradevision") {
    const modules = [
      {
        title: "Market Feeds & Charts",
        desc: "Real-time stock data streams and interactive price history.",
        icon: <LineChart className="w-4 h-4 text-cyan-400" />,
      },
      {
        title: "Gemini Market Intelligence",
        desc: "Multi-factor analysis combining technical indicators and news sentiment.",
        icon: <BrainCircuit className="w-4 h-4 text-indigo-400" />,
      },
      {
        title: "Trade History & Portfolio",
        desc: "Simulated order execution with paginated audit logs.",
        icon: <History className="w-4 h-4 text-emerald-400" />,
      },
    ];

    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] shadow-lg p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <span className="font-mono text-slate-300 font-medium">
            Platform Capabilities
          </span>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
            FastAPI + Gemini Core
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {modules.map((m) => (
            <div
              key={m.title}
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                {m.icon}
                <span className="truncate">{m.title}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === "samaadhan") {
    const steps = [
      {
        title: "Citizen Reporting",
        desc: "Automated GPS coordinates and photo upload.",
        icon: <Camera className="w-4 h-4 text-emerald-400" />,
      },
      {
        title: "Automated Routing",
        desc: "Category-based municipal department assignment.",
        icon: <Layers className="w-4 h-4 text-indigo-400" />,
      },
      {
        title: "Admin Triage & Audit",
        desc: "Dispatch dashboard with resolution tracking.",
        icon: <CheckCircle2 className="w-4 h-4 text-cyan-400" />,
      },
    ];

    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] shadow-lg p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
          <span className="font-mono text-slate-300 font-medium">
            Civic Resolution Workflow
          </span>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
            Geo-Triage Portal
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1"
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                {s.icon}
                <span className="truncate">{s.title}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

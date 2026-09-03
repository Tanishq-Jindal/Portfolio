import React from "react";
import { Terminal, Cpu, TrendingUp, MapPin, Activity, ShieldCheck, Play, Layers } from "lucide-react";

interface ProjectVisualProps {
  projectId: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ projectId }) => {
  if (projectId === "nexus-ai") {
    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0b0f19] shadow-2xl font-mono text-xs text-slate-300">
        {/* Mock Window Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-400 font-sans text-xs">nexus-ai :: cloud-sandbox-agent</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            E2B Sandbox Connected
          </div>
        </div>

        {/* Multi-pane view: Workflow Pipeline & Terminal Output */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 bg-slate-950/60">
          {/* Pipeline stages */}
          <div className="md:col-span-4 flex flex-col gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              Inngest 3-Stage Agent Loop
            </div>
            
            <div className="space-y-1.5 mt-1">
              <div className="p-2 rounded bg-indigo-950/40 border border-indigo-800/40 text-indigo-200">
                <div className="flex items-center justify-between text-[11px]">
                  <span>1. Prompt & Schema Gen</span>
                  <span className="text-indigo-400 text-[10px]">Gemini 1.5</span>
                </div>
              </div>

              <div className="p-2 rounded bg-slate-800/40 border border-indigo-500/30 text-white relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                    2. Tool Loop Iteration
                  </span>
                  <span className="text-indigo-300 text-[10px]">Turn 8/15</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  E2B MicroVM: executing npm build & test
                </div>
              </div>

              <div className="p-2 rounded bg-slate-900/30 border border-slate-800/60 text-slate-400">
                <div className="flex items-center justify-between text-[11px]">
                  <span>3. Preview Frame Sync</span>
                  <span className="text-emerald-400 text-[10px]">Live HMR</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
              <span>Stack: tRPC + Prisma + Clerk</span>
              <span className="text-indigo-400">Isolated Cloud VM</span>
            </div>
          </div>

          {/* Terminal & Code Stream */}
          <div className="md:col-span-8 p-3 rounded-lg bg-black/70 border border-slate-800 font-mono text-[11px] leading-relaxed space-y-1.5 overflow-hidden">
            <div className="text-slate-400 flex items-center gap-2 pb-1 border-b border-slate-800/80">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>sandbox-terminal :: bash (iteration_08)</span>
            </div>
            <p className="text-slate-400">
              <span className="text-emerald-400">agent@nexus-sandbox:~$</span> inngest step:execute_tool --tool=write_file
            </p>
            <p className="text-indigo-300">
              [Nexus-Agent] Created: <span className="text-yellow-300">src/server/routers/project.ts</span> (tRPC router)
            </p>
            <p className="text-slate-400">
              <span className="text-emerald-400">agent@nexus-sandbox:~$</span> pnpm prisma db push --schema=prisma/schema.prisma
            </p>
            <p className="text-emerald-400">
              ✔ PostgreSQL schema synchronized successfully via Prisma ORM
            </p>
            <p className="text-slate-400">
              <span className="text-emerald-400">agent@nexus-sandbox:~$</span> next build --experimental-app-only
            </p>
            <p className="text-cyan-300">
              ● Ready in 1.4s — Sandboxed preview live on port 3000
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "tradevision") {
    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0b0f19] shadow-xl font-mono text-xs text-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="font-sans font-medium text-slate-300">TradeVision Analytics Core</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
            <Activity className="w-3 h-3 animate-pulse" />
            FastAPI Stream Active
          </div>
        </div>

        {/* Dashboard Visual Grid */}
        <div className="p-4 space-y-3 bg-slate-950/60">
          {/* Ticker Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800/70">
              <div className="text-slate-400 text-[10px]">PORTFOLIO ALPHA</div>
              <div className="text-sm font-bold text-white mt-0.5">$28,450.00</div>
              <div className="text-[10px] text-emerald-400 font-semibold">+14.2% YTD</div>
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800/70">
              <div className="text-slate-400 text-[10px]">AI SENTIMENT INDEX</div>
              <div className="text-sm font-bold text-cyan-300 mt-0.5">Bullish (0.84)</div>
              <div className="text-[10px] text-slate-400">Gemini LLM NLP</div>
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800/70 col-span-2 sm:col-span-1">
              <div className="text-slate-400 text-[10px]">API LATENCY</div>
              <div className="text-sm font-bold text-white mt-0.5">24ms</div>
              <div className="text-[10px] text-emerald-400">FastAPI REST Core</div>
            </div>
          </div>

          {/* AI Signal Breakdown */}
          <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-1.5 text-[11px]">
            <div className="text-slate-300 font-sans font-semibold flex items-center justify-between pb-1 border-b border-slate-800/60">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Gemini Multi-Modal Signal Engine
              </span>
              <span className="text-[10px] text-cyan-400 font-mono">Confidence: 91.4%</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Synthesizing MACD crossover + RSI volume divergence with live financial news sentiment. Portfolio risk weight automatically balanced.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-[10px]">RSI: 58.4</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-[10px]">MACD: +0.42</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">Paginated Logs: 200 OK</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "samaadhan") {
    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0b0f19] shadow-xl font-mono text-xs text-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="font-sans font-medium text-slate-300">Samaadhan Civic Dispatch Grid</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
            <ShieldCheck className="w-3.5 h-3.5" />
            Automated Routing
          </div>
        </div>

        {/* Dashboard Visual Grid */}
        <div className="p-4 space-y-3 bg-slate-950/60">
          {/* Geo Triage Card */}
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ticket #SAM-3814: Road Surface Hazard
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px]">
                High Priority
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
              <div>Telemetry: <span className="text-slate-200">28.4595° N, 77.5140° E</span></div>
              <div>Municipal Dept: <span className="text-emerald-300">Public Works (PWD)</span></div>
              <div>Photo Verification: <span className="text-slate-200">Attached & Geo-tagged</span></div>
              <div>Workflow Status: <span className="text-amber-300">Dispatched to Field</span></div>
            </div>
          </div>

          {/* Admin Analytics Overview */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
              <div className="text-slate-400 text-[10px]">ISSUES RESOLVED</div>
              <div className="text-sm font-bold text-white mt-0.5">Municipal Log</div>
              <div className="text-[10px] text-emerald-400">Resolution Tracking</div>
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
              <div className="text-slate-400 text-[10px]">DEPARTMENT ROUTING</div>
              <div className="text-sm font-bold text-emerald-400 mt-0.5">Automated</div>
              <div className="text-[10px] text-slate-400">Category Matched</div>
            </div>
            <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
              <div className="text-slate-400 text-[10px]">CORE RUNTIME</div>
              <div className="text-sm font-bold text-white mt-0.5">Python + JS</div>
              <div className="text-[10px] text-slate-400">Interactive Maps</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

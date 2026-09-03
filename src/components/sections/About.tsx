import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Code,
  Sparkles,
  Server,
  Layers,
  GraduationCap,
  Target,
  ArrowUpRight,
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Engineering Mindset"
          title="About Me"
          description="A 3rd-year Computer Science student passionate about building real-world software systems and exploring the intersection of full-stack engineering and applied AI/ML."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Paragraphs (Left) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <p>
                I am a 3rd-year Computer Science undergraduate at{" "}
                <span className="text-white font-medium">Bennett University</span>{" "}
                (2024–2028) based in Greater Noida, India. As a Full Stack
                Developer and AI/ML enthusiast, my work centers around
                architecting end-to-end applications that solve genuine problems
                rather than superficial demos.
              </p>

              <p>
                My projects reflect an engineering-first philosophy. When building{" "}
                <span className="text-indigo-300 font-mono">Nexus-AI</span>, I
                engineered a durable 3-stage Gemini agent loop using Inngest and
                E2B sandboxes to run multi-step code generation inside isolated
                cloud microVMs. In{" "}
                <span className="text-cyan-300 font-mono">TradeVision</span>, I
                combined FastAPI backend architectures with financial ML signals
                and news sentiment. And in{" "}
                <span className="text-emerald-300 font-mono">Samaadhan</span>, I
                focused on geolocation telemetry and civic workflow routing.
              </p>

              <p>
                I am currently dedicating focused time to deepening my understanding
                of AI/ML fundamentals while continuously sharpening my Data
                Structures & Algorithms problem-solving skills. I am actively
                seeking software engineering internships and placement
                opportunities where I can contribute to production codebases and
                continue growing as a systems engineer.
              </p>
            </div>

            {/* Target roles badges */}
            <div className="pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Target Roles & Career Direction
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-xs font-mono text-indigo-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Technical Highlights (Right) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-white font-semibold">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm">Real-World Software Focus</h3>
                  <p className="text-xs text-slate-400 font-normal">
                    Production architectures over toy scripts
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing type safety, resilient background queues, relational
                schema modeling, and clean API design patterns.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-white font-semibold">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm">AI-Powered Systems</h3>
                  <p className="text-xs text-slate-400 font-normal">
                    Autonomous agents & multi-modal intelligence
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrating LLMs into durable execution state machines with tool
                iterations, sandboxed terminals, and contextual analysis.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-white font-semibold">
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm">Continuous Growth</h3>
                  <p className="text-xs text-slate-400 font-normal">
                    AI/ML + Data Structures & Algorithms
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combining foundational computer science principles with
                continuous hands-on project shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

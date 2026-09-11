import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Server, Sparkles, Target } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="About"
          description="Background, technical interests, and focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Narrative (Left) */}
          <div className="lg:col-span-7 space-y-3.5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-3">
              <p>
                I am a 3rd-year Computer Science undergraduate at{" "}
                <span className="text-white font-medium">Bennett University</span>{" "}
                (2024–2028) in Greater Noida, India. My focus is on building
                full-stack web applications and practical AI-powered tools with
                clean API design, resilient workflows, and solid database modeling.
              </p>

              <p>
                Through projects like{" "}
                <span className="text-indigo-300 font-medium">Nexus-AI</span>,{" "}
                <span className="text-cyan-300 font-medium">TradeVision</span>, and{" "}
                <span className="text-emerald-300 font-medium">Samaadhan</span>, I
                have built autonomous agent pipelines inside isolated cloud
                sandboxes, streaming financial dashboards, and civic tracking
                systems.
              </p>

              <p>
                Currently, I am expanding my knowledge in applied AI/ML systems
                while consistently practicing Data Structures & Algorithms,
                looking for software engineering and AI/ML internship
                opportunities.
              </p>
            </div>

            {/* Target roles badges */}
            <div className="pt-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Target Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Areas (Right) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                <div className="p-1.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                  <Server className="w-4 h-4" />
                </div>
                <span>Full-Stack Development</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Building with Next.js, React, TypeScript, FastAPI, PostgreSQL, and Prisma.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                <div className="p-1.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>AI/ML & Agent Systems</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Orchestrating autonomous AI agent loops, Inngest workflows, and isolated cloud execution sandboxes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2.5 text-white font-medium text-sm">
                <div className="p-1.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  <Target className="w-4 h-4" />
                </div>
                <span>Foundations & DSA</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">
                Strengthening algorithmic problem solving and core computer science fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

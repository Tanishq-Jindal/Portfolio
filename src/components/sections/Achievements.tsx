import React from "react";
import { hackathonsData, certificationsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, ShieldCheck, Cloud, Binary } from "lucide-react";

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Achievements"
          description="Certifications and technical milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Achievements / Certifications (Left) */}
          <div className="w-full min-w-0 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-2.5">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-4.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all backdrop-blur-sm flex items-center justify-between gap-4 group min-w-0 min-h-[58px]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
                      {cert.issuer.includes("AWS") ? (
                        <Cloud className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Binary className="w-4 h-4 text-indigo-400" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">
                        {cert.issuer} · {cert.type}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons (Right) */}
          <div className="w-full min-w-0 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Hackathons</span>
            </h3>

            <div className="space-y-2.5">
              {hackathonsData.map((item) => (
                <div
                  key={item.number}
                  className="p-4 sm:p-4.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all backdrop-blur-sm flex items-center justify-between gap-4 group min-w-0 min-h-[58px]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-mono text-xs font-semibold text-indigo-400 shrink-0 w-5">
                      {item.number}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>

                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 shrink-0 font-medium tracking-wide">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { achievementsData, certificationsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, ShieldCheck, Cloud, Binary, CheckCircle } from "lucide-react";

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Credentials & Milestones"
          title="Achievements & Certifications"
          description="Factual technical certifications and university-level competitive hackathon participation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hackathon Achievement (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Competitive Hackathons</span>
            </h3>

            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all backdrop-blur-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                    {item.year}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    University Level
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {item.context}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>University Internal Evaluation & Pitch</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications (Right) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verified Technical Certifications</span>
            </h3>

            <div className="space-y-3">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform mt-0.5">
                      {cert.issuer.includes("AWS") ? (
                        <Cloud className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Binary className="w-4 h-4 text-indigo-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Issuer:{" "}
                        <span className="text-slate-300 font-medium">
                          {cert.issuer}
                        </span>{" "}
                        · Field:{" "}
                        <span className="text-slate-400">{cert.type}</span>
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { BrainCircuit, Binary, ArrowRight } from "lucide-react";

export const CurrentFocus: React.FC = () => {
  const { currentFocus } = personalInfo;

  return (
    <section className="py-6 sm:py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/40 border border-slate-800/80 shadow-lg space-y-4 backdrop-blur-sm">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Current Focus
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentFocus.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentFocus.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            {currentFocus.areas.map((area, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1.5"
              >
                <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs sm:text-sm">
                  {index === 0 ? (
                    <BrainCircuit className="w-4 h-4 text-cyan-400" />
                  ) : index === 1 ? (
                    <Binary className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  )}
                  <span>{area.topic}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

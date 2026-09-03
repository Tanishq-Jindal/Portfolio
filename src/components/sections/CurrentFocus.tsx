import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { BrainCircuit, Binary, ArrowRight, Compass } from "lucide-react";

export const CurrentFocus: React.FC = () => {
  const { currentFocus } = personalInfo;

  return (
    <section className="py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-cyan-950/30 border border-indigo-500/20 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-indigo-900/60 border border-indigo-700/50 text-indigo-300">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              Active Learning Trajectory
            </div>

            {/* Title & Description */}
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Current Focus:{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  {currentFocus.title}
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentFocus.description}
              </p>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {currentFocus.areas.map((area, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 transition-colors space-y-2"
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
      </div>
    </section>
  );
};

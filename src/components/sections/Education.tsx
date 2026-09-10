import React from "react";
import { educationList } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Calendar } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Education"
          description="Computer Science education and academic background."
        />

        <div className="max-w-2xl space-y-4">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-3.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                  {item.status}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  {item.period && (
                    <>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-slate-600">·</span>
                    </>
                  )}
                  <span className="text-emerald-400 font-medium">
                    {item.grade}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-300">
                  <span className="font-semibold text-indigo-200">
                    {item.institution}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              {item.courseworkHighlights && item.courseworkHighlights.length > 0 && (
                <div className="pt-1 space-y-1.5">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Relevant Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.courseworkHighlights.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

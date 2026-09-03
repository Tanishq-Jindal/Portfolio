import React from "react";
import { educationData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          description="Formal academic curriculum and foundational computer science coursework."
        />

        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l border-indigo-500/30 space-y-6">
            {/* Academic Entry Timeline Marker */}
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                  {educationData.status}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationData.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-300">
                  <span className="font-semibold text-indigo-200">
                    {educationData.institution}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {educationData.location}
                  </span>
                </div>
              </div>

              {/* Core Coursework Highlights */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Key Foundational Coursework</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {educationData.courseworkHighlights.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

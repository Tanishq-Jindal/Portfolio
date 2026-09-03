import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code, Terminal, Layers, Cpu, CheckCircle2 } from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-indigo-400" />;
      case 1:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 3:
      default:
        return <Layers className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technologies"
          description="A factual overview of the programming languages, backend frameworks, core computer science fundamentals, and project technologies I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges / Grid */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800"
                          : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{category.skills.length} verified competencies</span>
                <span className="text-slate-400">Strictly non-fabricated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

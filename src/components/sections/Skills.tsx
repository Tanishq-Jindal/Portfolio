import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Code, Terminal, Layers, Cpu } from "lucide-react";

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
        return <Layers className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Skills"
          description="Technologies and concepts I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all backdrop-blur-sm group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {getCategoryIcon(index)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      skill.highlight
                        ? "bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-slate-600"
                        : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

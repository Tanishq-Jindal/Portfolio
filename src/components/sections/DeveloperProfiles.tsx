import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Github, Linkedin, Code2, Instagram, ExternalLink } from "lucide-react";

export const DeveloperProfiles: React.FC = () => {
  const profiles = [
    {
      name: "GitHub",
      handle: "@Tanishq-Jindal",
      description:
        "Repositories, full-stack architectures, and project codebases.",
      url: personalInfo.links.github,
      icon: <Github className="w-5 h-5 text-white" />,
      colorClass: "from-slate-900/60 to-slate-900/30 border-slate-800 hover:border-slate-600",
      accent: "text-slate-300",
    },
    {
      name: "LinkedIn",
      handle: "in/tanishq-jindal-117096325",
      description:
        "Professional network and software engineering internship inquiries.",
      url: personalInfo.links.linkedin,
      icon: <Linkedin className="w-5 h-5 text-cyan-400" />,
      colorClass: "from-slate-900/60 to-slate-900/30 border-slate-800 hover:border-cyan-800/60",
      accent: "text-cyan-300",
    },
    {
      name: "LeetCode",
      handle: "u/tanishqjindal10",
      description:
        "Data structures and algorithmic problem solving practice.",
      url: personalInfo.links.leetcode,
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      colorClass: "from-slate-900/60 to-slate-900/30 border-slate-800 hover:border-amber-800/60",
      accent: "text-amber-300",
    },
    {
      name: "Instagram",
      handle: "@tanishq_017",
      description:
        "AI-generated content, creative projects, and social updates.",
      url: personalInfo.links.instagram,
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      colorClass: "from-slate-900/60 to-slate-900/30 border-slate-800 hover:border-pink-800/60",
      accent: "text-pink-300",
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Profiles"
          description="Profiles across GitHub, LinkedIn, LeetCode, and Instagram."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-b ${p.colorClass} border transition-all duration-200 hover:scale-[1.01] flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {p.icon}
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {p.name}
                  </h3>
                  <p className={`text-xs font-mono mt-0.5 ${p.accent}`}>
                    {p.handle}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                <span>View Profile</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

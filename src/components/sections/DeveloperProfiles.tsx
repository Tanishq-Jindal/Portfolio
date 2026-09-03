import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";

export const DeveloperProfiles: React.FC = () => {
  const profiles = [
    {
      name: "GitHub",
      handle: "@Tanishq-Jindal",
      description:
        "Explore open-source repositories, full-stack architectures, and codebase commits.",
      url: personalInfo.links.github,
      icon: <Github className="w-6 h-6 text-white" />,
      colorClass: "from-slate-800 to-slate-900 border-slate-700/80 hover:border-slate-500",
      accent: "text-slate-300",
    },
    {
      name: "LinkedIn",
      handle: "in/tanishq-jindal-117096325",
      description:
        "Connect for software engineering internships, technical collaborations, and professional updates.",
      url: personalInfo.links.linkedin,
      icon: <Linkedin className="w-6 h-6 text-cyan-400" />,
      colorClass: "from-cyan-950/40 to-slate-900 border-cyan-800/40 hover:border-cyan-500",
      accent: "text-cyan-300",
    },
    {
      name: "LeetCode",
      handle: "u/tanishqjindal10",
      description:
        "Algorithmic problem solving across data structures, dynamic programming, and systems logic.",
      url: personalInfo.links.leetcode,
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      colorClass: "from-amber-950/40 to-slate-900 border-amber-800/40 hover:border-amber-500",
      accent: "text-amber-300",
    },
  ];

  return (
    <section className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Online Presence"
          title="Developer Profiles"
          description="Direct access to verified code repositories, professional network, and algorithmic practice profiles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl bg-gradient-to-b ${p.colorClass} border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group shadow-lg`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {p.name}
                  </h3>
                  <p className={`text-xs font-mono mt-0.5 ${p.accent}`}>
                    {p.handle}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
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

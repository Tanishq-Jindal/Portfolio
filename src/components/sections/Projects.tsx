import React from "react";
import { projectsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export const Projects: React.FC = () => {
  const featuredProject = projectsData.find((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Projects"
          description="Selected work across full-stack development and AI-powered systems."
        />

        {/* Featured Project: Nexus-AI */}
        {featuredProject && (
          <div className="mb-8">
            <div className="rounded-2xl p-5 sm:p-7 bg-slate-900/40 border border-indigo-500/20 shadow-xl relative overflow-hidden group backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Details (Left) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                        {featuredProject.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {featuredProject.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  {/* Objective, Approach, Results structured breakdown */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div>
                      <span className="font-semibold text-white block text-xs uppercase font-mono tracking-wider text-indigo-300 mb-0.5">
                        Objective
                      </span>
                      <p className="leading-relaxed text-slate-300">
                        {featuredProject.objective}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-white block text-xs uppercase font-mono tracking-wider text-indigo-300 mb-0.5">
                        Approach
                      </span>
                      <p className="leading-relaxed text-slate-300">
                        {featuredProject.approach}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-white block text-xs uppercase font-mono tracking-wider text-indigo-300 mb-0.5">
                        Results
                      </span>
                      <p className="leading-relaxed text-slate-300">
                        {featuredProject.results}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition-all hover:text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Simplified Architecture Visual (Right) */}
                <div className="lg:col-span-6">
                  <ProjectVisual projectId={featuredProject.id} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects: TradeVision & Samaadhan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-5 sm:p-6 bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between group backdrop-blur-sm space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    {project.subtitle}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-900/50 text-slate-300 hover:text-indigo-300 transition-colors"
                      aria-label={`${project.name} Live Demo`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Structured Breakdown */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div>
                    <span className="font-semibold text-indigo-300 font-mono text-[11px] uppercase tracking-wider block">
                      Objective
                    </span>
                    <p className="leading-relaxed text-slate-300">
                      {project.objective}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-indigo-300 font-mono text-[11px] uppercase tracking-wider block">
                      Approach
                    </span>
                    <p className="leading-relaxed text-slate-300">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-indigo-300 font-mono text-[11px] uppercase tracking-wider block">
                      Results
                    </span>
                    <p className="leading-relaxed text-slate-300">
                      {project.results}
                    </p>
                  </div>
                </div>

                {/* Clean Platform Visual */}
                <ProjectVisual projectId={project.id} />

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium border border-slate-700 transition-all hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

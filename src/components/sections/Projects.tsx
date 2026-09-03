import React from "react";
import { projectsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export const Projects: React.FC = () => {
  const featuredProject = projectsData.find((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Featured Engineering"
          title="Flagship Software Projects"
          description="Production-oriented full-stack applications, autonomous agent workflows, and civic infrastructure systems built with modern technology stacks."
        />

        {/* 1. Featured Flagship Project: Nexus-AI */}
        {featuredProject && (
          <div className="mb-16">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-[#080d1a] border border-indigo-500/30 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Details Column */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-700/50">
                      FLAGSHIP PROJECT
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700">
                      {featuredProject.subtitle}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {featuredProject.name}
                    </h3>
                    <p className="text-sm font-mono text-indigo-300">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features (Checklist) */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Key Features
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                      {featuredProject.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Highlights Box */}
                  <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300 uppercase">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Technical Architecture Highlights</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed list-disc list-inside">
                      {featuredProject.technicalHighlights.map((hl, idx) => (
                        <li key={idx} className="text-slate-300">
                          <span className="text-slate-200">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Application Demo</span>
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition-all hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Repository</span>
                    </a>
                  </div>
                </div>

                {/* Visual / Simulation Column */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-1">
                    <span>AGENT WORKFLOW & SANDBOX ARCHITECTURE</span>
                    <span className="text-indigo-400">Interactive Preview</span>
                  </div>
                  <ProjectVisual projectId={featuredProject.id} />

                  {/* Additional Architecture Callout */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
                    <div className="flex items-center justify-between text-slate-300 font-medium">
                      <span>Cloud Sandbox Execution Model</span>
                      <span className="text-emerald-400 font-mono">Isolated microVMs</span>
                    </div>
                    <p className="leading-relaxed">
                      Utilizes E2B runtime containers to securely spin up dynamic file trees, execute arbitrary shell operations, and stream compilation diagnostics back to Next.js clients over WebSockets and tRPC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Secondary Projects: TradeVision & Samaadhan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 sm:p-7 bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div className="space-y-5">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700">
                    {project.subtitle}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-900/50 text-slate-300 hover:text-indigo-300 transition-colors"
                      aria-label={`${project.name} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title and tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Visual Preview */}
                <ProjectVisual projectId={project.id} />

                {/* Technologies */}
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

                {/* Key Features */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Key Features
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {project.keyFeatures.slice(0, 6).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Highlights */}
                <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1 text-xs">
                  <span className="font-mono text-slate-400 uppercase text-[10px] block font-semibold">
                    Technical Implementation Highlights
                  </span>
                  <ul className="space-y-1 text-slate-300 list-disc list-inside leading-relaxed">
                    {project.technicalHighlights.map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/60">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium border border-slate-700 transition-all hover:text-white"
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

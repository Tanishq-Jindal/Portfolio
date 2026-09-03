"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  ArrowRight,
  Github,
  Linkedin,
  Code2,
  FileDown,
  MapPin,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Hero Content (Left) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Internships & Opportunities</span>
            </div>

            {/* Name and Professional Title */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                {personalInfo.role}
              </p>
            </div>

            {/* Concise Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Building full-stack applications and AI-powered developer tools while continuously strengthening my skills in AI/ML and Data Structures & Algorithms.
            </p>

            {/* University & Location Subtext */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-0.5">
              <span className="flex items-center gap-1 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                Bennett University (3rd Year, B.Tech CSE)
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Greater Noida, India
              </span>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-1.5 pl-1 sm:pl-2">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Clean Technical Profile Card (Right) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-5 sm:p-6 bg-slate-900/40 border border-slate-800/80 shadow-xl space-y-4 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-mono font-semibold text-white">
                    Technical Snapshot
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">
                  Available Now
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 font-mono block uppercase text-[10px]">
                    Current Direction
                  </span>
                  <span className="text-slate-200 font-medium text-sm">
                    AI/ML + Data Structures & Algorithms
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block uppercase text-[10px]">
                    Flagship Project
                  </span>
                  <span className="text-indigo-300 font-medium">
                    Nexus-AI
                  </span>
                  <span className="text-slate-400 text-[11px] block">
                    Autonomous full-stack AI builder with E2B cloud sandboxes
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block uppercase text-[10px]">
                    Core Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Next.js", "TypeScript", "FastAPI", "Python", "Gemini", "tRPC", "PostgreSQL"].map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Target Roles:</span>
                  <span className="text-slate-300">Software / Full Stack / AI-ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

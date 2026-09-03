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
  Terminal,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Bennett University</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">3rd Year B.Tech CSE</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-slate-500" />
                Greater Noida, India
              </span>
            </div>

            {/* Name and Professional Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                {personalInfo.role}
              </p>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.headline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Professional Profiles Row */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Profiles:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-amber-400 hover:border-slate-700 transition-all"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Technical Visual Element (Right) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-indigo-500/20 via-slate-800/40 to-transparent shadow-2xl">
              <div className="rounded-xl bg-[#090d16] border border-slate-800/90 p-5 space-y-4 font-mono text-xs shadow-inner">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span className="font-sans font-semibold text-slate-200">
                      developer_environment.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-emerald-400">ready</span>
                  </div>
                </div>

                {/* Simulated Spec Object */}
                <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                  <div>
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">institution:</span>{" "}
                    <span className="text-emerald-300">"Bennett University"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">year:</span>{" "}
                    <span className="text-amber-300">3</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">primaryCore:</span> [
                    <span className="text-cyan-300">"Full-Stack Systems"</span>,{" "}
                    <span className="text-cyan-300">"AI/ML Workflows"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">flagshipProject:</span> &#123;
                  </div>
                  <div className="pl-8 text-slate-400">
                    title: <span className="text-indigo-300">"Nexus-AI"</span>,
                  </div>
                  <div className="pl-8 text-slate-400">
                    loop: <span className="text-emerald-300">"Inngest 3-Stage Agent"</span>,
                  </div>
                  <div className="pl-8 text-slate-400">
                    sandbox: <span className="text-indigo-300">"E2B Cloud MicroVM"</span>,
                  </div>
                  <div className="pl-4">&#125;,</div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentTrajectory:</span>{" "}
                    <span className="text-emerald-300">
                      "AI/ML + Data Structures & Algorithms"
                    </span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Mini System Status */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">TARGET ROLES</span>
                    <span className="text-slate-300 font-medium">Full Stack / AI-ML</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block">AVAILABILITY</span>
                    <span className="text-emerald-400 font-medium">Internships & Placements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

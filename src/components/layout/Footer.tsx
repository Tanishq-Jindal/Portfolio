import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-8 sm:py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white">
                TJ
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {personalInfo.role}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Bennett University · B.Tech Computer Science (2024–2028)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© {currentYear} Tanishq Jindal. All rights reserved.</span>
            <a
              href="#hero"
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors inline-flex items-center justify-center"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

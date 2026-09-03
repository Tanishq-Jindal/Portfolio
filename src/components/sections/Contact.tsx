"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Create mailto link as fallback so recruiters can send email directly
    const subject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Hi Tanishq,\n\n${formState.message}\n\nBest regards,\n${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Get in Touch"
          title="Contact & Opportunities"
          description="Interested in discussing software engineering internships, technical collaborations, or full-stack/AI-ML roles? Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Card (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct Email
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Primary channel for internship & placement inquiries
                </p>
              </div>

              {/* Email Box with One-Click Copy */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-indigo-300 truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Status Note */}
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/30 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Seeking Opportunities
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Open to Summer 2025 / 2026 internships, research positions, and software engineering roles in Full Stack and AI/ML.
                </p>
              </div>

              {/* Connected Profiles List */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Professional Channels
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-white" />
                      <span>GitHub Repositories</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 text-xs text-slate-300 hover:text-amber-400 hover:border-amber-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      <span>LeetCode Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Inquiry Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/30 text-indigo-300 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Mail Client Triggered
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email draft has been generated. If your client didn't open automatically, you can always write to{" "}
                    <span className="text-indigo-300 font-mono">
                      {personalInfo.email}
                    </span>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-indigo-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono text-slate-300 block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono text-slate-300 block"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-mono text-slate-300 block"
                    >
                      Subject / Role
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Internship opportunity / Technical collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono text-slate-300 block"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Tanishq, I came across your Nexus-AI and TradeVision projects and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

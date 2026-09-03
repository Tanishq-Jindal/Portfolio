import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className,
  align = "left",
}) => {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10",
        align === "center" ? "text-center mx-auto max-w-xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium tracking-wide uppercase mb-2.5",
            "bg-indigo-950/40 border border-indigo-800/30 text-indigo-300"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

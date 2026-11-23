"use client";

import React, { useState } from "react";
import { projects, ProjectItem } from "~/data/portfolio";

export function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", "AI & ML", "Computer Vision", "Data Science", "Algorithms"] as const;

  const filtered = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <div className="mt-8">
      {/* Category switcher */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveTab(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === cat
                ? "bg-white text-black font-bold shadow-md"
                : "bg-[#141417] text-neutral-400 hover:text-white border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p) => {
          const isExpanded = expandedId === p.id;
          return (
            <div
              key={p.id}
              className="slit-frame rounded-xl p-6 sm:p-7 flex flex-col justify-between group hover:bg-[#121217]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#4d7cff] font-semibold">
                    {p.category}
                  </span>
                  {p.metrics && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#98ff38]/10 text-[#98ff38] border border-[#98ff38]/20">
                      {p.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {p.summary}
                </p>

                {isExpanded && (
                  <div className="mt-3 p-3.5 rounded-lg bg-[#08080b] border border-white/5 text-xs text-neutral-400 leading-relaxed animate-in fade-in">
                    {p.description}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : p.id)}
                    className="text-xs font-mono text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    {isExpanded ? "Collapse details ↑" : "Inspect architecture ↓"}
                  </button>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-outline !py-1 !px-3 !text-[11px]"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

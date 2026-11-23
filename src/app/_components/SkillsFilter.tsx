"use client";

import React, { useState } from "react";
import { skillCategories } from "~/data/portfolio";

export function SkillsFilter() {
  const categories = ["All", ...Object.keys(skillCategories)] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allSkills = Object.entries(skillCategories).flatMap(([category, skills]) =>
    skills.map((s) => ({ ...s, category }))
  );

  const filteredSkills = allSkills.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mt-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-[#141417] text-neutral-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[200px] max-w-xs">
          <input
            type="text"
            placeholder="Search skills (e.g. Python, NLP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121215] border border-white/15 rounded-lg px-3.5 py-1.5 text-xs text-white placeholder:text-neutral-500 outline-none focus:border-white/40 font-mono"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((s) => (
          <div
            key={`${s.category}-${s.name}`}
            className="slit-frame rounded-xl p-4 sm:p-5 flex flex-col justify-between group hover:bg-[#121217]"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="text-sm font-bold text-white group-hover:text-[#4d7cff] transition-colors">
                  {s.name}
                </h4>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider font-semibold ${
                    s.level === "Expert"
                      ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/30"
                      : s.level === "Advanced"
                      ? "bg-sky-950/80 text-sky-400 border border-sky-500/30"
                      : s.level === "Cadet"
                      ? "bg-amber-950/80 text-amber-400 border border-amber-500/30"
                      : "bg-neutral-800 text-neutral-300 border border-white/10"
                  }`}
                >
                  {s.level}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {s.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span>{s.category}</span>
              <span className="text-neutral-400 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 text-neutral-500 font-mono text-xs">
          No skills matching &quot;{searchQuery}&quot; found in category &quot;{selectedCategory}&quot;.
        </div>
      )}
    </div>
  );
}

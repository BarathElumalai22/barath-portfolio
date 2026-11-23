"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile, experience, education, skillCategories, activities, languages, resumeJson } from "~/data/portfolio";

export function ResumeViewer() {
  const [viewMode, setViewMode] = useState<"interactive" | "replica" | "json">("interactive");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(resumeJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="slit-top mt-20 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span className="meta">Official Credentials</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Curriculum Vitae &amp; Document Registry
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Directly parsed from official Resume.pdf with verified academic &amp; industrial credentials
          </p>
        </div>

        {/* View mode switcher tabs & Download PDF button */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex rounded-lg bg-[#141416] p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "interactive"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Interactive
            </button>
            <button
              type="button"
              onClick={() => setViewMode("replica")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "replica"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Resume Sheet
            </button>
            <button
              type="button"
              onClick={() => setViewMode("json")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
                viewMode === "json"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Raw JSON
            </button>
          </div>

          <a
            href="/Resume.pdf"
            download="Barath_E_Resume.pdf"
            className="btn-pill"
          >
            <span>Download PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Mode 1: Interactive Breakdown */}
      {viewMode === "interactive" && (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Summary & Identity Card */}
          <div className="slit-frame rounded-xl p-6 sm:p-7">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-xs font-mono text-[#98ff38] uppercase tracking-wider">
                  {profile.role}
                </p>
                <p className="text-xs text-neutral-400">{profile.location}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <h4 className="meta mb-2">Executive Summary</h4>
              <p className="text-sm leading-relaxed text-neutral-300">
                {profile.bio}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block uppercase">Email</span>
                <a href={`mailto:${profile.email}`} className="text-white hover:underline truncate block">
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase">Phone</span>
                <a href={`tel:${profile.phone}`} className="text-white hover:underline block">
                  {profile.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase">University</span>
                <span className="text-white block">Mewar University</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase">Academic Score</span>
                <span className="text-[#ffcf7a] font-bold block">{profile.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="slit-frame rounded-xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="meta">Professional Timeline</h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  3 INDUSTRIAL CREDENTIALS
                </span>
              </div>

              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.title} className="p-3.5 rounded-lg bg-[#0e0e11] border border-white/5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-white">{exp.title}</h4>
                        <p className="text-xs text-neutral-400 font-mono">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-300 bg-white/10 px-2 py-0.5 rounded">
                        {exp.status}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span>National Cadet Corps (NCC) Certified</span>
              <span className="text-white font-mono">2024 - 2028 Batch</span>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Authentic Resume Replica Paper Layout */}
      {viewMode === "replica" && (
        <div className="mx-auto max-w-[850px] bg-[#0c0c0e] border border-white/20 rounded-xl p-8 sm:p-12 shadow-2xl font-sans text-neutral-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/15 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-wider text-white">
                BARATH E
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#98ff38] uppercase mt-1">
                B.Tech Artificial Intelligence &amp; Machine Learning Student
              </p>
            </div>
            <div className="text-xs font-mono space-y-1 text-neutral-400 sm:text-right">
              <p>+91 8754605821 · Chennai, Tamil Nadu</p>
              <p>barath5366@gmail.com</p>
              <p className="text-sky-400">linkedin.com/in/barath-e-421a88380</p>
              <p className="text-sky-400">github.com/BarathElumalai22</p>
            </div>
          </div>

          {/* Two-Column Resume Grid matching Resume.pdf */}
          <div className="grid sm:grid-cols-2 gap-8 mt-6">
            {/* Left Column: Profile, Experience, Leadership */}
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Profile
                </h3>
                <p className="text-xs leading-relaxed text-neutral-300">
                  {profile.bio}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Experience
                </h3>
                <div className="space-y-3">
                  {experience.map((exp) => (
                    <div key={exp.title} className="text-xs">
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{exp.title}</span>
                      </div>
                      <div className="text-neutral-400 font-mono text-[11px]">{exp.company}</div>
                      <p className="text-neutral-400 text-[11px] mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Leadership &amp; Activities
                </h3>
                <div className="space-y-3 text-xs">
                  {activities.map((act) => (
                    <div key={act.title}>
                      <span className="font-bold text-white block">● {act.title}</span>
                      <ul className="list-disc pl-4 text-neutral-400 text-[11px] mt-1 space-y-0.5">
                        {act.bulletPoints.map((bp, i) => (
                          <li key={i}>{bp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education, Skills, Languages */}
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Education
                </h3>
                <div className="space-y-3 text-xs">
                  {education.map((edu) => (
                    <div key={edu.institution}>
                      <div className="font-bold text-white">{edu.institution}</div>
                      <div className="text-neutral-400 font-mono text-[11px]">{edu.duration}</div>
                      <div className="text-neutral-300 text-[11px]">{edu.degree}</div>
                      {edu.score && (
                        <div className="text-[#ffcf7a] font-mono text-[11px] font-semibold">
                          {edu.score}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Skills Matrix
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block">Programming</span>
                    <span className="text-neutral-200">Python, SQL, HTML, CSS, TypeScript</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block">AI &amp; Machine Learning</span>
                    <span className="text-neutral-200">Machine Learning, Artificial Intelligence, NLP, LLMs</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block">Data Science &amp; Vision</span>
                    <span className="text-neutral-200">Pandas, NumPy, Data Analysis, OpenCV</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block">Tools &amp; Platforms</span>
                    <span className="text-neutral-200">Git, GitHub, VS Code, PyCharm, Anaconda, Jupyter, Google Colab</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block">Core Concepts</span>
                    <span className="text-neutral-200">Data Structures &amp; Algorithms, Problem Solving, OOP</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-1.5 mb-2.5">
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {languages.map((l) => (
                    <div key={l.name} className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-neutral-300">{l.name}</span>
                      <span className="font-mono text-neutral-500 text-[10px]">{l.level.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Verified Document · Barath E</span>
            <a href="/Resume.pdf" download="Barath_E_Resume.pdf" className="text-sky-400 hover:underline">
              Download Original PDF ↗
            </a>
          </div>
        </div>
      )}

      {/* Mode 3: Raw JSON View */}
      {viewMode === "json" && (
        <div className="slit-frame rounded-xl p-5 sm:p-7 relative font-mono text-xs sm:text-sm">
          <div className="flex items-center justify-between mb-3 text-neutral-400">
            <span>barath-e/resume.json</span>
            <button
              type="button"
              onClick={handleCopyJson}
              className="text-xs text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors"
            >
              {copied ? "✓ Copied JSON" : "Copy JSON"}
            </button>
          </div>
          <pre className="overflow-x-auto p-4 rounded-lg bg-[#08080a] text-neutral-300 leading-relaxed border border-white/5">
            {JSON.stringify(resumeJson, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}

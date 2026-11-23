"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "~/data/portfolio";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"model" | "pipeline" | "specs">("model");
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative mx-auto max-w-[1140px] px-6 pt-8 pb-16 text-center sm:pt-16">
      {/* Gentle Soothing Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[650px] h-[350px] opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(77, 124, 255, 0.14), transparent 70%)",
        }}
      />

      {/* Top Status Pill */}
      <div className="inline-flex items-center gap-2.5 rounded-full bg-[#12131a]/80 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] tracking-[0.06em] text-neutral-300 uppercase border border-white/10 shadow-lg">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full pulse-dot bg-emerald-400" />
        <span>Open to AI &amp; ML Internships</span>
        <span className="text-neutral-600">·</span>
        <span className="text-neutral-400">Mewar University 2028</span>
        <span className="text-neutral-600">·</span>
        <span className="text-sky-400 font-semibold">Ex-Intern @ XtraGrad</span>
      </div>

      {/* Profile Photo & Hero Identity */}
      <div className="mt-8 flex flex-col items-center justify-center">
        {/* Photo Container with Subtle Rim Glow */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-500/30 to-indigo-500/20 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500" />
          
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-[#121216] transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 640px) 128px, 144px"
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#0d0f17]/95 border border-emerald-500/30 font-mono text-[10.5px] uppercase tracking-wider text-emerald-400 flex items-center gap-2 shadow-2xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="font-semibold text-emerald-300">Available For Work · AI &amp; ML</span>
          </div>
        </div>

        {/* Developer Name & Title */}
        <div className="w-full mt-2 max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white drop-shadow-sm">
            {profile.name}
          </h1>

          <div className="mt-3">
            <span className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-sky-200 to-indigo-300 tracking-tight">
              Artificial Intelligence &amp; Machine Learning Developer
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Engineering deep neural models, real-time computer vision systems, and intelligent data pipelines. 
            Active LeetCode problem solver committed to algorithmic optimization and clean production software.
          </p>

          {/* Quick Technical Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {[
              "Python",
              "Machine Learning",
              "Deep Learning",
              "Computer Vision",
              "NLP & LLMs",
              "LeetCode DSA",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-[#14141a] border border-white/10 text-xs font-mono text-neutral-300 shadow-sm hover:border-white/30 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/Resume.pdf"
              download="Barath_E_Resume.pdf"
              className="btn-pill shadow-[0_0_25px_rgba(255,255,255,0.3)] !px-6 !py-3 !text-xs !font-bold"
            >
              <span>Download Resume (PDF)</span>
              <span aria-hidden="true">↓</span>
            </a>

            <a href="#projects" className="btn-pill-outline !px-5 !py-3 !text-xs">
              <span>View AI Projects</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="btn-pill-outline !px-5 !py-3 !text-xs">
              <span>Get In Touch</span>
              <span aria-hidden="true">✉</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline !px-4 !py-3 !text-xs"
            >
              <span>GitHub ↗</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline !px-4 !py-3 !text-xs"
            >
              <span>LinkedIn ↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-pill-outline !px-4 !py-3 !text-xs"
            >
              <span>{copied ? "✓ Email Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* High-Tech AI Developer Terminal */}
        <div className="w-full max-w-3xl mx-auto mt-10 rounded-xl bg-[#09090d] border border-white/15 shadow-2xl overflow-hidden text-left">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111116] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
              <span className="ml-2 font-mono text-xs text-neutral-400 font-medium">
                barath@ai-core: ~/developer-profile
              </span>
            </div>

            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("model")}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === "model"
                    ? "bg-white/20 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Model Specs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pipeline")}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === "pipeline"
                    ? "bg-white/20 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ML Pipeline
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === "specs"
                    ? "bg-white/20 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                JSON Schema
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-[12.5px] sm:text-[13px] text-neutral-300 leading-relaxed min-h-[175px]">
            {activeTab === "model" && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <p className="text-neutral-500 font-medium"># AI Developer Profile Specifications</p>
                <p>
                  <span className="text-neutral-400">CANDIDATE:</span>{" "}
                  <span className="text-white font-bold">{profile.name}</span>
                </p>
                <p>
                  <span className="text-neutral-400">DEGREE:</span>{" "}
                  <span className="text-[#98ff38] font-semibold">{profile.role}</span>
                </p>
                <p>
                  <span className="text-neutral-400">INSTITUTION:</span>{" "}
                  <span className="text-sky-300">{profile.university} (Class of {profile.graduationYear})</span>
                </p>
                <p>
                  <span className="text-neutral-400">ACADEMIC STANDING:</span>{" "}
                  <span className="text-[#ffcf7a] font-bold">CGPA: {profile.cgpa} (up to Sem IV)</span>
                </p>
                <p>
                  <span className="text-neutral-400">INDUSTRY CERTIFICATIONS:</span>{" "}
                  <span className="text-amber-300">Ex-Intern @ XtraGrad · CTTC AI/ML Certified · CTTC Data Analysis Certified</span>
                </p>
                <p>
                  <span className="text-neutral-400">CORE COMPETENCIES:</span>{" "}
                  <span className="text-emerald-400 font-semibold">Deep Learning · Computer Vision · NLP · LeetCode Problem Solving</span>
                </p>
                <p>
                  <span className="text-neutral-400">HIRING STATUS:</span>{" "}
                  <span className="text-[#98ff38] font-bold">AVAILABLE FOR IMMEDIATE INTERNSHIP ROLES</span>
                  <span className="pulse-caret ml-1" />
                </p>
              </div>
            )}

            {activeTab === "pipeline" && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <p className="text-neutral-500 font-medium"># Applied Machine Learning Architecture</p>
                <p className="text-sky-300">├── [Data Wrangling] &gt;&gt; Pandas, NumPy, SQL, Feature Normalization &amp; EDA</p>
                <p className="text-indigo-300">├── [Model Training] &gt;&gt; Supervised/Unsupervised Learning, Neural Classifiers</p>
                <p className="text-purple-300">├── [Computer Vision] &gt;&gt; OpenCV, Contour Extraction, Object Tracking, Frame Preprocessing</p>
                <p className="text-emerald-300">├── [NLP &amp; LLMs] &gt;&gt; Tokenization, Vector Embeddings, RAG Information Retrieval</p>
                <p className="text-amber-300">└── [Algorithmic Rigor] &gt;&gt; LeetCode DSA Practice · O(N) Time / O(1) Space Optimization</p>
              </div>
            )}

            {activeTab === "specs" && (
              <pre className="text-xs text-neutral-300 leading-relaxed overflow-x-auto animate-in fade-in duration-200">
{`{
  "developer": "Barath E",
  "title": "Artificial Intelligence & Machine Learning Developer",
  "university": "Mewar University",
  "degree": "B.Tech AI & ML",
  "cgpa": "8.0 / 10.0",
  "location": "Chennai, Tamil Nadu, India",
  "stack": ["Python", "Machine Learning", "Data Analysis", "OpenCV", "NLP", "LLMs"],
  "focus": "Computer Vision & Deep Neural Networks",
  "openToWork": true
}`}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

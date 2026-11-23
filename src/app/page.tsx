import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { profile, experience, education, activities, languages } from "~/data/portfolio";
import { HeroSection } from "./_components/HeroSection";
import { StatsBar } from "./_components/StatsBar";
import { SkillsFilter } from "./_components/SkillsFilter";
import { ProjectsShowcase } from "./_components/ProjectsShowcase";
import { ResumeViewer } from "./_components/ResumeViewer";
import { RightDock } from "./_components/RightDock";
import { ContactArea } from "./_components/ContactArea";

const AiBackgroundCanvas = dynamic(
  () => import("./_components/AiBackgroundCanvas").then((mod) => mod.AiBackgroundCanvas),
  {
    ssr: false,
    loading: () => (
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#08090d]"
        aria-hidden="true"
      />
    ),
  }
);

function SectionHeader({
  meta,
  title,
  subtitle,
}: {
  meta: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <span className="meta">{meta}</span>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-neutral-400 mt-1.5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#f3f3f3] relative selection:bg-white selection:text-black">
      {/* Master Full-Screen AI/ML Neural & Tensor Canvas Background */}
      <AiBackgroundCanvas />

      {/* Foreground Container with Frosted Glass Components */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Header - Frosted Glass Modern Navigation Bar */}
        <header className="sticky top-0 z-40 bg-[#0d0d12]/80 backdrop-blur-xl slit-bottom transition-all">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-6">
          {/* Brand Identity with AI Badge */}
          <a href="#hero" className="flex items-center gap-3 no-underline group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-600 to-sky-400 p-[1px] shadow-[0_0_15px_rgba(77,124,255,0.35)] group-hover:shadow-[0_0_20px_rgba(77,124,255,0.6)] transition-all">
              <div className="w-full h-full bg-[#0e0e14] rounded-[7px] flex items-center justify-center font-mono font-bold text-white text-xs">
                BE
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="text-sm font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  Barath E
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#98ff38] pulse-dot" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                AI &amp; ML Developer
              </span>
            </div>
          </a>

          {/* Nav Items as Capsule Pills */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#14141a]/60 border border-white/10 shadow-inner">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Academics" },
              { href: "#leadership", label: "Leadership" },
              { href: "#resume", label: "Resume" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/15 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="/Resume.pdf"
              download="Barath_E_Resume.pdf"
              className="btn-pill !py-2 !px-4 !text-xs shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-1.5 font-bold"
            >
              <span>Resume PDF</span>
              <span aria-hidden="true" className="text-[11px]">↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative pb-24">
        {/* 1. AI/ML Developer Hero Section */}
        <HeroSection />

        {/* 2. Verified Metrics Strip */}
        <StatsBar />

        <div className="mx-auto max-w-[1140px] px-6 space-y-24 mt-12">
          {/* 3. About Section */}
          <section id="about" className="slit-top pt-10">
            <SectionHeader
              meta="Engineering Background"
              title="About Barath E"
              subtitle="Artificial Intelligence & Machine Learning Developer with strong analytical capabilities, hands-on deep learning workflows, and disciplined team leadership."
            />

            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <div className="slit-frame rounded-xl p-6 sm:p-8 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                  {profile.bio}
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Currently pursuing a Bachelor of Technology in AI &amp; Machine Learning at Mewar University with an academic CGPA of 8.0/10.0 (up to Semester IV). Dedicated to developing robust neural network models, exploratory data science pipelines, and computer vision systems.
                </p>

                <div className="pt-4 grid sm:grid-cols-2 gap-4 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">Location</span>
                    <span className="text-white font-medium">{profile.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">Academic Status</span>
                    <span className="text-[#98ff38] font-medium">B.Tech Sem IV Completed (CGPA 8.0)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">Engineering Focus</span>
                    <span className="text-sky-400 font-medium">Deep Learning &amp; Computer Vision</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">Algorithmic Practice</span>
                    <span className="text-amber-400 font-medium">Active LeetCode DSA Problem Solver</span>
                  </div>
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="slit-frame rounded-xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="meta mb-4">Linguistic Capabilities</h3>
                  <div className="space-y-3.5">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between border-b border-white/5 pb-2.5">
                        <div>
                          <span className="text-sm font-bold text-white block">{lang.name}</span>
                          <span className="text-xs text-neutral-400">{lang.level}</span>
                        </div>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                          {lang.flag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                  <span>Cross-Functional Readiness</span>
                  <span className="text-emerald-400 font-semibold">100% Team Sync</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Experience & Industrial Training Section */}
          <section id="experience" className="slit-top pt-10">
            <SectionHeader
              meta="Practical Experience"
              title="Experience &amp; Industrial Training"
              subtitle="Practical experience in Artificial Intelligence, predictive modeling, data analysis pipelines, and neural networks."
            />

            <div className="grid gap-6">
              {experience.map((exp) => (
                <div
                  key={exp.title}
                  className="slit-frame rounded-xl p-6 sm:p-8 hover:bg-[#121217] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#98ff38]/10 text-[#98ff38] border border-[#98ff38]/20">
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-[#4d7cff] mt-0.5">
                        {exp.company} · {exp.roleType}
                      </p>
                    </div>

                    <span className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1 rounded-full self-start sm:self-auto border border-white/10">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 mb-5 pl-2">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                        <span className="text-[#4d7cff] mt-0.5">▹</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0a0a0d] text-neutral-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Skills Section */}
          <section id="skills" className="slit-top pt-10">
            <SectionHeader
              meta="Technical Matrix"
              title="Skills &amp; Technologies"
              subtitle="Core programming languages, AI/ML frameworks, data manipulation libraries, computer vision tools, and discipline-strengthened soft skills."
            />
            <SkillsFilter />
          </section>

          {/* 6. Projects Showcase Section */}
          <section id="projects" className="slit-top pt-10">
            <SectionHeader
              meta="Engineering Portfolio"
              title="Featured AI &amp; Machine Learning Projects"
              subtitle="Applied solutions demonstrating deep learning, computer vision, data pipelines, and algorithmic efficiency."
            />
            <ProjectsShowcase />
          </section>

          {/* 7. Education Section */}
          <section id="education" className="slit-top pt-10">
            <SectionHeader
              meta="Academic Qualifications"
              title="Education &amp; Credentials"
              subtitle="Formal degree program and foundational schooling in mathematics and computational sciences."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="slit-frame rounded-xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                        {edu.duration}
                      </span>
                      {edu.score && (
                        <span className="text-xs font-mono text-[#ffcf7a] font-bold bg-[#ffcf7a]/10 px-2.5 py-0.5 rounded border border-[#ffcf7a]/20">
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mt-3">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#4d7cff] mt-1">
                      {edu.degree}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-neutral-300 leading-relaxed">
                      {edu.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Verified Academic Record</span>
                    <span className="text-emerald-400 font-medium">Active Full-Time Student</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Leadership & Activities Section */}
          <section id="leadership" className="slit-top pt-10">
            <SectionHeader
              meta="Character &amp; Discipline"
              title="Leadership &amp; Activities"
              subtitle="National Cadet Corps (NCC) training and consistent competitive problem solving on LeetCode."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {activities.map((act) => (
                <div
                  key={act.title}
                  className="slit-frame rounded-xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-[#98ff38] uppercase tracking-wider font-semibold">
                        ● {act.role}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                        {act.organization}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {act.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {act.summary}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-neutral-400">
                      {act.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#4d7cff] mt-0.5">▹</span>
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-500 font-mono flex items-center justify-between">
                    <span>Leadership &amp; Resilience</span>
                    <span className="text-white">Active Pursuit</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Resume Viewer Section */}
          <ResumeViewer />

          {/* 10. Contact & Opportunities Section */}
          <section id="contact" className="slit-top pt-10">
            <SectionHeader
              meta="Direct Communications"
              title="Get In Touch · Open For Collaborations"
              subtitle="Open to summer AI/ML internships, data engineering projects, and research collaborations."
            />

            <ContactArea />
          </section>
        </div>
      </main>

      {/* Signature Right Dock Navigation with Scrollspy & Smooth Jumps */}
      <RightDock />

      {/* Footer */}
      <footer className="slit-top mt-28 py-12 bg-[#09090b]/80 backdrop-blur-md text-neutral-400">
        <div className="mx-auto max-w-[1140px] px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-white">
              Barath E · AI &amp; Machine Learning Developer
            </p>
            <p className="text-xs font-mono text-neutral-500">
              B.Tech in Artificial Intelligence &amp; Machine Learning · Mewar University (Class of 2028)
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#hero" className="hover:text-white transition-colors">
              ↑ Back to Top
            </a>
            <a href="/Resume.pdf" download="Barath_E_Resume.pdf" className="hover:text-white transition-colors">
              Resume PDF
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

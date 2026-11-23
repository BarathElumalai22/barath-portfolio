"use client";

import React, { useState } from "react";
import { profile } from "~/data/portfolio";

export function ContactArea() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "AI/ML Internship Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as fallback so it opens email client directly
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "AI/ML Internship Opportunity",
        message: "",
      });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const testimonials = [
    {
      author: "Training Director",
      organization: "CTTC Bhubaneswar",
      badge: "AI & ML Certification Lead",
      content:
        "Barath demonstrated exceptional analytical thinking, a rigorous grasp of machine learning mathematical foundations, and high dedication to code quality throughout the advanced AI & Data Analysis training.",
      verified: true,
      period: "Industrial Training",
    },
    {
      author: "Project Lead",
      organization: "XtraGrad",
      badge: "Ex-Internship Mentor",
      content:
        "Demonstrated outstanding discipline, collaborative problem solving, and swift technical execution across computer vision pipelines and neural models. A fast learner and reliable engineer.",
      verified: true,
      period: "AI Internship",
    },
    {
      author: "Department Faculty",
      organization: "Mewar University",
      badge: "Academic Faculty",
      content:
        "A standout student maintaining an 8.0 CGPA while balancing intensive Data Structures & Algorithms practice on LeetCode with collaborative engineering discipline.",
      verified: true,
      period: "B.Tech AI & ML",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 4 Interactive Direct Channel Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Email Card */}
        <div className="slit-frame rounded-xl p-5 hover:bg-[#121217] transition-all group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="meta">Direct Email</span>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email, "email")}
                className="text-[10px] font-mono text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10"
              >
                {copiedEmail ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="block text-sm font-bold text-white group-hover:text-sky-400 truncate"
            >
              {profile.email} ↗
            </a>
          </div>
          <span className="text-xs text-neutral-400 mt-2 block">
            Response within 24 hours
          </span>
        </div>

        {/* GitHub Card */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="slit-frame rounded-xl p-5 hover:bg-[#121217] transition-all group flex flex-col justify-between block"
        >
          <div>
            <span className="meta">Source Repositories</span>
            <b className="block text-sm font-bold text-white group-hover:text-sky-400 mt-1">
              GitHub Profile ↗
            </b>
          </div>
          <span className="text-xs text-neutral-400 mt-2 block">
            Open-source AI &amp; DSA codebases
          </span>
        </a>

        {/* LinkedIn Card */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="slit-frame rounded-xl p-5 hover:bg-[#121217] transition-all group flex flex-col justify-between block"
        >
          <div>
            <span className="meta">Professional Network</span>
            <b className="block text-sm font-bold text-white group-hover:text-sky-400 mt-1">
              LinkedIn Profile ↗
            </b>
          </div>
          <span className="text-xs text-neutral-400 mt-2 block">
            Verified credentials &amp; connections
          </span>
        </a>

        {/* Phone Card */}
        <div className="slit-frame rounded-xl p-5 hover:bg-[#121217] transition-all group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="meta">Direct Call</span>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.phone, "phone")}
                className="text-[10px] font-mono text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/10"
              >
                {copiedPhone ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <a
              href={`tel:${profile.phone}`}
              className="block text-sm font-bold text-white group-hover:text-sky-400"
            >
              {profile.phoneDisplay} ↗
            </a>
          </div>
          <span className="text-xs text-neutral-400 mt-2 block">
            Chennai, Tamil Nadu (IST)
          </span>
        </div>
      </div>

      {/* Main Interactive Contact Grid: Form on Left, Testimonials on Right */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Left Column: Real Developer Contact Form */}
        <div className="slit-frame rounded-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>
          <p className="text-xs text-neutral-400 mb-6">
            Have an internship opening, research project, or want to discuss machine learning? Drop a note below.
          </p>

          {submitted ? (
            <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
              <div className="text-emerald-400 text-2xl font-bold">✓ Thank You!</div>
              <p className="text-xs text-neutral-200">
                Your message has been initiated. Barath will review your note and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Your Name / Recruiter
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d0d12] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-600 outline-none focus:border-white/40 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d0d12] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-600 outline-none focus:border-white/40 transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Subject / Inquiry Type
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0d0d12] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white outline-none focus:border-white/40 transition-colors font-mono cursor-pointer"
                >
                  <option value="AI/ML Internship Opportunity">AI/ML Internship Opportunity</option>
                  <option value="Data Science / Engineering Role">Data Science / Engineering Role</option>
                  <option value="Collaborative AI Research Project">Collaborative AI Research Project</option>
                  <option value="Freelance / Contract Development">Freelance / Contract Development</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Hi Barath, we came across your AI & Machine Learning profile and would love to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0d0d12] border border-white/10 rounded-lg p-3.5 text-xs text-white placeholder:text-neutral-600 outline-none focus:border-white/40 transition-colors font-mono resize-y"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-neutral-500">
                  Direct dispatch to {profile.email}
                </span>

                <button
                  type="submit"
                  className="btn-pill !py-2.5 !px-6 !text-xs shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Verified Mentor Endorsements & Peer Reviews */}
        <div className="slit-frame rounded-xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Mentor Endorsements</h3>
              <span className="meta">Verified Records</span>
            </div>
            <p className="text-xs text-neutral-400 mb-5">
              Feedback from certified industrial training mentors and academic supervisors.
            </p>

            <div className="space-y-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#0c0c10] border border-white/5 space-y-2 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{t.author}</span>
                        <span className="text-neutral-500 font-normal">· {t.organization}</span>
                      </h4>
                      <span className="text-[10px] font-mono text-sky-400 block mt-0.5">
                        {t.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {t.period}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Chennai, India (IST · UTC+5:30)</span>
            <span className="text-emerald-400 font-medium">Open to Relocation &amp; Remote</span>
          </div>
        </div>
      </div>
    </div>
  );
}

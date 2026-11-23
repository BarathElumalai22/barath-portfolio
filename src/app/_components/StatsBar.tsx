"use client";

import React, { useState } from "react";
import { stats } from "~/data/portfolio";

export function StatsBar() {
  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  const statDetails = [
    "Academic excellence across core computer science, discrete mathematics, and neural network engineering.",
    "Daily commitment to Data Structures & Algorithms on LeetCode with focus on optimal time & space complexity.",
    "Certified hands-on technical industrial trainings at CTTC Bhubaneswar & Artificial Intelligence Internship at XtraGrad.",
    "Specialized technical stack in Computer Vision, Deep Learning algorithms, and high-performance Python data pipelines.",
    "Multilingual communicator: Native Tamil, Professional English & Hindi, Basic conversational Arabic.",
  ];

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-6">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Verified Academic &amp; Engineering Metrics
        </h2>
        <p className="meta mt-1.5 normal-case">
          Mewar University · LeetCode Solutions · Industry Trainings · Core AI/ML Stack
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {stats.map((s, index) => {
          const isSelected = selectedStat === index;
          return (
            <button
              key={s.label}
              type="button"
              onClick={() => setSelectedStat(isSelected ? null : index)}
              className={`slit-frame flex-1 min-w-[150px] max-w-[210px] rounded-lg p-4 sm:p-5 text-left cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "ring-1 ring-[#4d7cff] bg-[#121217]"
                  : "hover:bg-[#121215]"
              }`}
            >
              <div className="text-2xl sm:text-[32px] leading-tight font-bold tracking-tight text-white">
                {s.value}
              </div>
              <div className="meta mt-2">{s.label}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
                {s.caption}
              </div>
              <div
                aria-hidden="true"
                className="mt-3.5 h-0.5 rounded-full transition-all duration-500"
                style={{
                  width: "100%",
                  backgroundImage: isSelected
                    ? "linear-gradient(90deg, #98ff38, #4d7cff)"
                    : "linear-gradient(90deg, var(--blue), transparent)",
                }}
              />
            </button>
          );
        })}
      </div>

      {selectedStat !== null && (
        <div className="mt-4 mx-auto max-w-2xl rounded-lg p-4 bg-[#121216] border border-[#4d7cff]/30 text-sm text-neutral-300 animate-in fade-in flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4d7cff] flex-shrink-0" />
            <span>{statDetails[selectedStat]}</span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedStat(null)}
            className="text-xs text-neutral-400 hover:text-white uppercase font-mono tracking-wider"
          >
            Close ✕
          </button>
        </div>
      )}
    </div>
  );
}

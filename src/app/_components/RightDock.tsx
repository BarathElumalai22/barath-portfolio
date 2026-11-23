"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

export interface DockItem {
  id: string;
  label: string;
  shortTag: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

const dockItems: DockItem[] = [
  {
    id: "hero",
    label: "Candidate Hub",
    shortTag: "Top",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About & Profile",
    shortTag: "Bio",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience & Training",
    shortTag: "Roles",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "AI & ML Skills",
    shortTag: "Stack",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "AI/ML Projects",
    shortTag: "Work",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "education",
    label: "Mewar University Degree",
    shortTag: "Studies",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "leadership",
    label: "Leadership & Activities",
    shortTag: "Lead",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "resume",
    label: "Official Resume & PDF",
    shortTag: "CV",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Direct Contact",
    shortTag: "Reach",
    icon: ({ className = "w-4 h-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
];

export function RightDock() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);
  const dockRef = useRef<HTMLElement>(null);

  // ScrollSpy with passive scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = dockItems.length - 1; i >= 0; i--) {
        const item = dockItems[i];
        if (!item) continue;
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Vertical scrub support (scrub rail)
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!isScrubbing || !dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    const relativeY = (e.clientY - rect.top) / rect.height;
    const clampedY = Math.max(0, Math.min(1, relativeY));
    const targetIndex = Math.floor(clampedY * dockItems.length);
    const targetItem = dockItems[Math.min(dockItems.length - 1, targetIndex)];
    if (targetItem && targetItem.id !== activeId) {
      scrollTo(targetItem.id);
    }
  };

  const DOCK_HEIGHT = 460;

  return (
    <>
      {/* The Right Dock Container - Pinned on the right side */}
      <aside
        ref={dockRef}
        aria-label="Portfolio Navigation Dock"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 select-none hidden md:flex items-center justify-end cursor-ns-resize group"
        style={{
          width: "60px",
          height: `${DOCK_HEIGHT}px`,
        }}
        onPointerDown={(e) => {
          setIsScrubbing(true);
          handlePointerMove(e);
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={() => setIsScrubbing(false)}
        onPointerLeave={() => {
          setIsScrubbing(false);
          setHoveredId(null);
        }}
      >
        {/* Curved Notch Backdrop - SVG with distinct acrylic glow & border */}
        <svg
          className="absolute right-0 top-0 h-full w-[60px] pointer-events-none drop-shadow-[-6px_0_24px_rgba(0,0,0,0.8)]"
          viewBox="0 0 60 460"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="notchBgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#121217" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#1a1a22" stopOpacity="0.99" />
            </linearGradient>
            <linearGradient id="notchBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          {/* Backdrop path */}
          <path
            d="M 60,0 C 60,42 6,48 6,95 L 6,365 C 6,412 60,418 60,460 Z"
            fill="url(#notchBgGradient)"
          />
          {/* Border stroke */}
          <path
            d="M 60,1 C 59,42 7,48 7,95 L 7,365 C 7,412 59,418 60,459"
            fill="none"
            stroke="url(#notchBorderGradient)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Vertical Items Rail */}
        <div className="relative w-full h-full flex flex-col justify-between py-4 pr-2 pl-2 z-20 pointer-events-auto">
          {dockItems.map((item) => {
            const isActive = item.id === activeId;
            const isHovered = item.id === hoveredId;

            return (
              <div
                key={item.id}
                className="relative flex items-center justify-end w-full"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Tooltip on Left */}
                <div
                  className={`absolute right-14 whitespace-nowrap pointer-events-none transition-all duration-200 z-50 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e0e14]/95 border border-white/20 shadow-2xl backdrop-blur-xl ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-3 pointer-events-none"
                  }`}
                >
                  <span className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider">
                    /{item.shortTag}
                  </span>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {item.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#98ff38] animate-pulse" />
                </div>

                {/* Tab Button */}
                <button
                  type="button"
                  aria-label={item.label}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollTo(item.id);
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer ${
                    isActive
                      ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.7)] ring-2 ring-white scale-110"
                      : "bg-[#181820]/80 text-neutral-300 hover:text-white hover:bg-white/20 hover:scale-105 border border-white/10"
                  }`}
                >
                  <item.icon className={isActive ? "w-4 h-4 text-black" : "w-4 h-4"} />
                </button>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Mobile Floating Bottom Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-1.5 p-1.5 rounded-full bg-[#0d0d12]/95 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.85)] max-w-[95vw] overflow-x-auto scrollbar-none"
      >
        {dockItems.slice(0, 6).map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`p-2 rounded-full transition-all ${
                isActive
                  ? "bg-white text-black shadow-md scale-105"
                  : "text-neutral-400 hover:text-white"
              }`}
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className={`p-2 rounded-full transition-all ${
            activeId === "contact"
              ? "bg-white text-black shadow-md scale-105"
              : "text-neutral-400 hover:text-white"
          }`}
          aria-label="Contact"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </nav>
    </>
  );
}

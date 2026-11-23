"use client";

import React, { useEffect, useRef, useState } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
  glow: string;
  pulsePhase: number;
  pulseSpeed: number;
  layer: number;
}

interface SynapsePulse {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  speed: number;
  color: string;
}

interface FormulaToken {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export function AiBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [hudStats, setHudStats] = useState({ nodes: 0, synapses: 0, fps: 60 });
  const [denseMode, setDenseMode] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Pure White nodes with subtle silver/white soft glow
    const nodeColor = "#ffffff";
    const nodeGlow = "rgba(255, 255, 255, 0.25)";

    // Generate Neurons
    const targetCount = Math.floor(Math.min(width, 1800) / (denseMode ? 18 : 26));
    const neurons: Neuron[] = [];

    for (let i = 0; i < targetCount; i++) {
      neurons.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.85,
        vy: (Math.random() - 0.5) * 0.85,
        baseRadius: Math.random() * 0.7 + 1.2, // refined and bit small (1.2px - 1.9px)
        color: nodeColor,
        glow: nodeGlow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.025 + Math.random() * 0.035,
        layer: i % 4,
      });
    }

    // High-visibility AI/ML Mathematical Expressions and Tokens
    const formulaStrings = [
      { text: "Attention(Q,K,V) = softmax(QKᵀ/√d)V", color: "#38bdf8" },
      { text: "∇_θ L(θ) = E[∇ log p_θ(x)]", color: "#00ff88" },
      { text: "Tensor[B=32, H=12, S=512, D=64]", color: "#818cf8" },
      { text: "Loss: 0.0012 ↓ (Converged)", color: "#00f0ff" },
      { text: "AdamW(lr=3e-4, β₁=0.9, β₂=0.999)", color: "#fbbf24" },
      { text: "ROC-AUC: 0.984 · Precision: 96.8%", color: "#34d399" },
      { text: "YOLOv8-Seg · 60 FPS · OpenCV dnn", color: "#38bdf8" },
      { text: "σ(W·x + b) · ReLU · LayerNorm", color: "#c084fc" },
      { text: "PyTorch 2.4 · CUDA Core Active", color: "#f472b6" },
      { text: "LeetCode DSA: Graph · DP · Tree O(N)", color: "#fbbf24" },
      { text: "Latent Space: z ~ N(0, I)", color: "#818cf8" },
      { text: "Softmax(zᵢ) = e^(zᵢ) / ∑ e^(zⱼ)", color: "#00ff88" },
      { text: "RAG Vector Similarity: cos(θ)=0.96", color: "#38bdf8" },
      { text: "Backprop: ∂L/∂W = (∂L/∂y)(∂y/∂W)", color: "#00f0ff" },
    ];

    const formulas: FormulaToken[] = formulaStrings.map((item, idx) => ({
      text: item.text,
      x: (width / formulaStrings.length) * idx + (Math.random() * 40 - 20),
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.25 - Math.random() * 0.25,
      opacity: Math.random() * 0.35 + 0.45,
      color: item.color,
    }));

    // Data Inference Signal Packets
    const pulses: SynapsePulse[] = [];
    let lastPulse = 0;

    // Shockwaves (Backpropagation Impulses)
    const shockwaves: Shockwave[] = [];

    // Mouse Attractor (Active Attention Focus)
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      radius: 220,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseDown = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Create shockwave ring
      shockwaves.push({
        x: clickX,
        y: clickY,
        radius: 12,
        maxRadius: 320,
        opacity: 0.9,
      });

      // Scatter and excite nearby neurons
      neurons.forEach((n) => {
        const dx = n.x - clickX;
        const dy = n.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 280 && dist > 1) {
          const force = ((280 - dist) / 280) * 4.2;
          n.vx += (dx / dist) * force;
          n.vy += (dy / dist) * force;
        }
      });

      // Spawn burst of signal packets outward
      const sorted = [...neurons].sort(
        (a, b) => Math.hypot(a.x - clickX, a.y - clickY) - Math.hypot(b.x - clickX, b.y - clickY)
      );

      for (let i = 0; i < Math.min(6, sorted.length); i++) {
        const from = sorted[i]!;
        for (let j = 0; j < neurons.length; j++) {
          const to = neurons[j]!;
          if (from !== to && Math.hypot(from.x - to.x, from.y - to.y) < 190) {
            pulses.push({
              fromX: from.x,
              fromY: from.y,
              toX: to.x,
              toY: to.y,
              progress: 0,
              speed: 0.045 + Math.random() * 0.035,
              color: "#00ff88",
            });
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Frame metrics
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 60;
    const maxDist = denseMode ? 165 : 135;

    // Main Canvas Render Loop
    const render = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (time - lastTime));
        frameCount = 0;
        lastTime = time;
        setHudStats({
          nodes: neurons.length,
          synapses: Math.floor(neurons.length * 3.2),
          fps,
        });
      }

      // 1. Clear & Draw Deep Cybernetic Radial Backdrop
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        40,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, "#0c1222"); // Deep indigo-blue glow
      bgGrad.addColorStop(0.45, "#080a11"); // Rich charcoal cyber
      bgGrad.addColorStop(1, "#050608"); // Midnight border
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. High-Tech AI Matrix Grid with Intersection Markers
      const gridSize = 90;
      ctx.strokeStyle = "rgba(77, 124, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersection Crosshairs (+)
      ctx.strokeStyle = "rgba(0, 240, 255, 0.16)";
      ctx.lineWidth = 1;
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
          ctx.stroke();
        }
      }

      // 3. Shockwave Rings (Backpropagation Waves)
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s]!;
        sw.radius += 7;
        sw.opacity *= 0.94;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 240, 255, ${sw.opacity * 0.85})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 16;
        ctx.stroke();

        // Inner harmonic ring
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 18), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 136, ${sw.opacity * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        if (sw.radius >= sw.maxRadius || sw.opacity < 0.02) {
          shockwaves.splice(s, 1);
        }
      }

      // 4. Floating AI Mathematical Formulas & Tensors
      ctx.save();
      ctx.font = "600 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      for (let f = 0; f < formulas.length; f++) {
        const form = formulas[f]!;
        form.x += form.vx;
        form.y += form.vy;

        if (form.y < -40) form.y = height + 30;
        if (form.x < -120) form.x = width + 80;
        if (form.x > width + 120) form.x = -80;

        ctx.fillStyle = form.color;
        ctx.globalAlpha = form.opacity;
        ctx.shadowColor = form.color;
        ctx.shadowBlur = 8;
        ctx.fillText(form.text, form.x, form.y);
      }
      ctx.restore();

      // 5. Automatic Inferences along Synapses
      if (time - lastPulse > 420 && pulses.length < 24) {
        lastPulse = time;
        const fromIdx = Math.floor(Math.random() * neurons.length);
        const fromNode = neurons[fromIdx]!;

        for (let j = 0; j < neurons.length; j++) {
          if (fromIdx !== j) {
            const toNode = neurons[j]!;
            const dist = Math.hypot(fromNode.x - toNode.x, fromNode.y - toNode.y);
            if (dist < maxDist) {
              pulses.push({
                fromX: fromNode.x,
                fromY: fromNode.y,
                toX: toNode.x,
                toY: toNode.y,
                progress: 0,
                speed: 0.025 + Math.random() * 0.025,
                color: Math.random() > 0.45 ? "#00f0ff" : "#00ff88",
              });
              break;
            }
          }
        }
      }

      // 6. Draw Synaptic Connections (Neural Weights)
      for (let i = 0; i < neurons.length; i++) {
        const nA = neurons[i]!;

        for (let j = i + 1; j < neurons.length; j++) {
          const nB = neurons[j]!;
          const dx = nB.x - nA.x;
          const dy = nB.y - nA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.52;

            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(nB.x, nB.y);

            const grad = ctx.createLinearGradient(nA.x, nA.y, nB.x, nB.y);
            grad.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
            grad.addColorStop(0.5, `rgba(129, 140, 248, ${alpha * 1.3})`);
            grad.addColorStop(1, `rgba(0, 255, 136, ${alpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Active Connection to Mouse Cursor (Attention Probe)
        if (mouse.active) {
          const mdx = mouse.x - nA.x;
          const mdy = mouse.y - nA.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.85;
            ctx.beginPath();
            ctx.moveTo(nA.x, nA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${mAlpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Attract neuron gently toward cursor attention node
            nA.vx += (mdx / mdist) * 0.05;
            nA.vy += (mdy / mdist) * 0.05;
          }
        }
      }

      // 7. Draw Signal Data Packets (Inference Beads)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p]!;
        pulse.progress += pulse.speed;

        if (pulse.progress <= 1) {
          const curX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
          const curY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

          ctx.save();
          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color;
          ctx.shadowColor = pulse.color;
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.restore();
        } else {
          pulses.splice(p, 1);
        }
      }

      // 8. Draw Neurons (Nodes with Glowing Halos)
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i]!;

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.985;
        n.vy *= 0.985;

        // Smooth viewport bounce
        if (n.x < 15) {
          n.x = 15;
          n.vx *= -1;
        } else if (n.x > width - 15) {
          n.x = width - 15;
          n.vx *= -1;
        }

        if (n.y < 15) {
          n.y = 15;
          n.vy *= -1;
        } else if (n.y > height - 15) {
          n.y = height - 15;
          n.vy *= -1;
        }

        n.pulsePhase += n.pulseSpeed;
        const currentR = n.baseRadius + Math.sin(n.pulsePhase) * 0.35;

        // Subtle soft halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR * 2.0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
        ctx.fill();

        // Inner Sharp Brilliant White Core (Bit Small & Crisp)
        ctx.save();
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
      }

      // 9. Draw Cursor Attention HUD Reticle (when cursor is on screen)
      if (mouse.active) {
        ctx.save();
        // Inner Target Reticle
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 255, 136, 0.95)";
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Outer Rotating Reticle
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.55)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Crosshairs
        ctx.beginPath();
        ctx.moveTo(mouse.x - 28, mouse.y);
        ctx.lineTo(mouse.x - 12, mouse.y);
        ctx.moveTo(mouse.x + 12, mouse.y);
        ctx.lineTo(mouse.x + 28, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 28);
        ctx.lineTo(mouse.x, mouse.y - 12);
        ctx.moveTo(mouse.x, mouse.y + 12);
        ctx.lineTo(mouse.x, mouse.y + 28);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.7)";
        ctx.stroke();

        // Label
        ctx.font = "bold 9.5px ui-monospace, monospace";
        ctx.fillStyle = "#00f0ff";
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 6;
        ctx.fillText("ATTENTION HEAD [h=12]", mouse.x + 16, mouse.y - 12);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, denseMode]);

  if (!mounted) {
    return (
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#08090d]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Full-Screen Interactive Neural & Tensor Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-100 transition-opacity duration-500 pointer-events-auto"
      />

      {/* Floating AI Diagnostic HUD Pill */}
      {mounted && (
        <div className="fixed bottom-4 left-6 z-40 pointer-events-auto hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0d16]/90 border border-sky-500/30 shadow-[0_0_25px_rgba(0,240,255,0.2)] text-[11.5px] font-mono text-neutral-300 backdrop-blur-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
          <span className="text-white font-bold tracking-wider">
            AI NEURAL FIELD
          </span>
          <span className="text-neutral-600">|</span>
          <span className="text-sky-300 font-semibold">{hudStats.nodes} Neurons</span>
          <span className="text-neutral-600">·</span>
          <span className="text-emerald-400 font-semibold">{hudStats.fps} FPS</span>
          <span className="text-neutral-600">|</span>
          <button
            type="button"
            onClick={() => setDenseMode(!denseMode)}
            className="px-2.5 py-0.5 rounded bg-sky-500/15 hover:bg-sky-500/30 text-sky-300 hover:text-white border border-sky-400/30 font-semibold transition-all cursor-pointer uppercase text-[10.5px]"
            title="Toggle Neural Density"
          >
            {denseMode ? "Density: High" : "Density: Ambient"}
          </button>
          <span className="text-neutral-600">|</span>
          <span className="text-neutral-400 text-[11px]">Click anywhere to pulse backprop</span>
        </div>
      )}
    </div>
  );
}

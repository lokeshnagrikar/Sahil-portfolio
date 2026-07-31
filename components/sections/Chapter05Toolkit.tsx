"use client";

import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { SOFTWARE_TOOLS } from "../../data/services";
import { sound } from "../../lib/sound";
import { Cpu, Wrench, ShieldCheck, Layers, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export default function Chapter05Toolkit() {
  const [hoveredSoftware, setHoveredSoftware] = useState<string | null>(null);

  return (
    <section id="toolkit" className="relative py-28 bg-surface/40 border-t border-zinc-800/80 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          chapter="Chapter 05 // Creative Arsenal"
          title="Industry-Standard Post-Production Software Stack"
          subtitle="Sahil leverages peak post-production software to execute frame-accurate cuts, advanced keyframe animation, and rich audio mixing."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: SOFTWARE PROFICIENCY STACK (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {SOFTWARE_TOOLS.map((tool) => (
              <div
                key={tool.name}
                onMouseEnter={() => {
                  sound.playClick();
                  setHoveredSoftware(tool.name);
                }}
                onMouseLeave={() => setHoveredSoftware(null)}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 ${
                  hoveredSoftware === tool.name
                    ? "border-keyframeCyan/60 bg-surfaceHover shadow-[0_0_20px_rgba(0,240,255,0.15)] translate-x-1"
                    : "border-zinc-800 bg-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Software Icon Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-keyframeCyan/10 border border-keyframeCyan/30 font-mono text-sm font-bold text-keyframeCyan shadow-inner">
                      {tool.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{tool.name}</h4>
                      <span className="font-mono text-xs text-keyframeCyan font-medium">{tool.badge}</span>
                    </div>
                  </div>

                  <span className="font-mono text-base font-bold text-keyframeCyan">
                    {tool.proficiency}%
                  </span>
                </div>

                {/* Capability Description */}
                <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                  {tool.description}
                </p>

                {/* Keyframe Cyan Progress Fill Bar */}
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-black/60 p-0.5 border border-zinc-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-keyframeCyan via-recordRed to-gradingAmber transition-all duration-1000 shadow-[0_0_8px_#00F0FF]"
                    style={{ width: `${tool.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: HARDWARE SPECIFICATIONS & WORKSTATION CARD (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surface shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 border border-keyframeCyan/30 text-keyframeCyan">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Post-Production Setup</h3>
                  <p className="font-mono text-[10px] text-zinc-500">HARDWARE & ACCELERATION</p>
                </div>
              </div>

              {/* Hardware Specs Grid */}
              <div className="space-y-4 font-mono text-xs text-zinc-300">
                <div className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-500">WORKSTATION</span>
                  <span className="text-white font-bold">High-Speed GPU Editing Suite</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-500">MAX RENDER RESOLUTION</span>
                  <span className="text-keyframeCyan font-bold">4K UHD @ 60 FPS</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-500">COLOR SCIENCE</span>
                  <span className="text-white font-bold">Rec.709 & DaVinci YRGB</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-500">AUDIO MASTERS</span>
                  <span className="text-recordRed font-bold">48kHz / 24-bit PCM</span>
                </div>

                <div className="flex justify-between pb-1">
                  <span className="text-zinc-500">DELIVERABLE FORMATS</span>
                  <span className="text-white font-bold">ProRes 422, H.264, MP4</span>
                </div>
              </div>

              {/* Organization Guarantee Badge */}
              <div className="rounded-2xl border border-keyframeCyan/20 bg-keyframeCyan/5 p-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-keyframeCyan">
                  <Sparkles className="h-4 w-4" />
                  <span>MODULAR PROJECT STRUCTURE</span>
                </div>
                <p className="mt-2 text-zinc-400 leading-relaxed text-[11px]">
                  Every project file is organized with color-coded multi-track labels, nested proxies, and modular After Effects assets for rapid client revisions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

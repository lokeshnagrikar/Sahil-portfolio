"use client";

import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { sound } from "../../lib/sound";
import {
  Sparkles,
  Film,
  Zap,
  Volume2,
  Palette,
  CheckCircle2,
  Sliders,
  Layers,
  Award,
  ArrowRight,
  TrendingUp,
  Activity,
  Clock,
  UserCheck,
} from "lucide-react";

export default function Chapter02About() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "Raw Ingest & Proxy Setup",
      subtitle: "Multi-cam alignment & 4K proxy generation",
      description:
        "Organizing 4K RAW camera footage, multi-track audio sync, and generating ultra-fast editing proxies for zero-lag timeline scrubbing.",
    },
    {
      step: "02",
      title: "Assembly & Pacing Cut",
      subtitle: "Trimming dead space & building narrative hooks",
      description:
        "Eliminating filler words, crafting story arcs, and establishing dynamic cutting rhythm that keeps audience attention locked.",
    },
    {
      step: "03",
      title: "Kinetic Motion & Pattern Interrupts",
      subtitle: "After Effects keyframing & lower thirds",
      description:
        "Inserting custom motion graphics, animated pop-up callouts, emojis, and pattern interrupt zooms every 2 to 4 seconds.",
    },
    {
      step: "04",
      title: "DaVinci Color Science",
      subtitle: "Skin retouching & film look grade",
      description:
        "DaVinci Resolve node balancing, skin frequency smoothing, highlight control, and applying rich atmospheric color grades.",
    },
    {
      step: "05",
      title: "Audio Mastering & 4K Export",
      subtitle: "Spatial SFX, sound design & ProRes export",
      description:
        "Layering acoustic risers, whooshes, vocal noise reduction, background music ducking, and rendering high-bitrate 4K master files.",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-background border-t border-zinc-800/80 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          chapter="Chapter 02 // The Story"
          title="Engineering Retention Through Cinematic Precision"
          subtitle="Discover Sahil Anil Kamdi's post-production philosophy, story-driven workflow, and audience retention framework."
        />

        {/* TOP ROW: PHILOSOPHY & IMPACT METRICS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          
          {/* PHILOSOPHY DECK (7 Cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surface flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-keyframeCyan/30 bg-keyframeCyan/10 px-3.5 py-1 text-xs font-mono font-bold text-keyframeCyan">
                <Sparkles className="h-3.5 w-3.5" />
                <span>POST-PRODUCTION VISION</span>
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl leading-snug">
                Turning Static Video Footage Into High-Growth Digital Assets
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                In today&apos;s digital economy, attention is the most valuable currency. Video editing is no longer just about joining raw clips together—it&apos;s about engineering visual pattern interrupts, pacing storytelling arcs, and layering audio cues that keep viewers locked into your content from frame 1 to the end screen.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether editing long-form YouTube commentary documentaries or punchy 9:16 vertical Instagram Reels and Shorts, Sahil treats every timeline track as a living canvas designed for maximum watch time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-zinc-800/80 pt-6 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px]">PRIMARY NLE</span>
                <span className="text-white font-bold">Adobe Premiere Pro & DaVinci</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">LOCATION</span>
                <span className="text-keyframeCyan font-bold">Gondia, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* 4 CORE EDITING PILLARS (5 Cols) */}
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass-card rounded-2xl p-5 border border-zinc-800 bg-surface transition-all hover:border-keyframeCyan/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 text-keyframeCyan border border-keyframeCyan/30">
                  <Film className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Story-Driven Pacing</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Cuts match narrative beat drops.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-zinc-800 bg-surface transition-all hover:border-recordRed/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-recordRed/10 text-recordRed border border-recordRed/30">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Retention Hooks</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">0.5s scroll-stopping visual graphics.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-zinc-800 bg-surface transition-all hover:border-gradingAmber/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradingAmber/10 text-gradingAmber border border-gradingAmber/30">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Color Science & Retouching</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">DaVinci Resolve node balancing.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-zinc-800 bg-surface transition-all hover:border-keyframeCyan/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 text-keyframeCyan border border-keyframeCyan/30">
                  <Volume2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Spatial Sound Design</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Acoustic risers, whooshes & ducking.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: INTERACTIVE 5-STEP POST-PRODUCTION TIMELINE PIPELINE */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-surface/60 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-keyframeCyan">
              <Activity className="h-4 w-4" />
              <span>THE 5-STEP TIMELINE PRODUCTION PIPELINE</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-500 font-bold hidden sm:inline">
              [ CLICK STEPS TO INSPECT WORKFLOW ]
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            
            {/* STEP SELECTOR BUTTONS (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {workflowSteps.map((item, idx) => (
                <button
                  key={item.step}
                  onClick={() => {
                    sound.playClick();
                    setActiveStep(idx);
                  }}
                  className={`w-full flex items-center justify-between rounded-2xl p-4 font-mono text-xs transition-all text-left border ${
                    activeStep === idx
                      ? "border-keyframeCyan bg-keyframeCyan/10 text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                      : "border-zinc-800 bg-black/40 text-zinc-400 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${activeStep === idx ? "text-keyframeCyan" : "text-zinc-500"}`}>
                      {item.step}
                    </span>
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${activeStep === idx ? "translate-x-1 text-keyframeCyan" : "opacity-0"}`} />
                </button>
              ))}
            </div>

            {/* ACTIVE STEP DETAIL DISPLAY (7 Cols) */}
            <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 bg-black/80 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <span className="font-mono text-xs font-bold text-keyframeCyan">
                  PIPELINE PHASE // {workflowSteps[activeStep].step}
                </span>
                <span className="font-mono text-[10px] text-zinc-500">
                  STANDARD OPERATING PROCEDURE
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">
                {workflowSteps[activeStep].title}
              </h4>
              <p className="font-mono text-xs text-keyframeCyan">
                {workflowSteps[activeStep].subtitle}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {workflowSteps[activeStep].description}
              </p>

              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="h-4 w-4 text-keyframeCyan shrink-0" />
                <span>Quality Tested & Approved for High-Retention Exports</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

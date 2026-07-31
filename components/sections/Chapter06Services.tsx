"use client";

import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { SERVICES } from "../../data/services";
import { sound } from "../../lib/sound";
import { ArrowUpRight, Youtube, Smartphone, Layers, Palette, Flame, Volume2, Check } from "lucide-react";

export default function Chapter06Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Youtube":
        return <Youtube className="h-6 w-6 text-recordRed" />;
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-keyframeCyan" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-accentViolet" />;
      case "Palette":
        return <Palette className="h-6 w-6 text-gradingAmber" />;
      case "Flame":
        return <Flame className="h-6 w-6 text-recordRed" />;
      case "Volume2":
        return <Volume2 className="h-6 w-6 text-keyframeCyan" />;
      default:
        return <Youtube className="h-6 w-6 text-keyframeCyan" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-background border-t border-zinc-800/80 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          chapter="Chapter 06 // Services"
          title="Specialized Video & Post-Production Offerings"
          subtitle="Explore Sahil's video editing services engineered for creators, influencers, and digital brands focused on high audience retention."
        />

        {/* 6-Card Symmetrical Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => {
                sound.playClick();
                setHoveredService(service.id);
              }}
              onMouseLeave={() => setHoveredService(null)}
              className={`glass-card group relative flex flex-col justify-between rounded-3xl border bg-surface p-6 sm:p-8 transition-all duration-300 ${
                hoveredService === service.id
                  ? "border-keyframeCyan/50 shadow-[0_15px_35px_rgba(0,240,255,0.15)] -translate-y-2"
                  : "border-zinc-800"
              }`}
            >
              <div>
                {/* Header Icon & Service ID Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black/60 shadow-inner group-hover:border-keyframeCyan/40 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 font-bold">
                    SERVICE // {service.id.toUpperCase()}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-keyframeCyan transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-keyframeCyan font-medium">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2 border-t border-zinc-800/80 pt-4">
                  <span className="font-mono text-[11px] font-bold text-zinc-300 uppercase tracking-wider">
                    DELIVERABLES INCLUDED:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {service.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-keyframeCyan shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience Tag */}
                <div className="mt-4 rounded-xl border border-zinc-800/60 bg-black/40 p-2.5 font-mono text-[11px] text-zinc-400">
                  <span className="text-zinc-500 font-bold">RECOMMENDED:</span> {service.recommendedFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 border-t border-zinc-800/80 pt-4">
                <a
                  href="#contact"
                  className="flex items-center justify-between rounded-full border border-zinc-800 bg-black/60 px-5 py-3 text-xs font-bold text-white transition-all group-hover:border-keyframeCyan group-hover:bg-keyframeCyan group-hover:text-black group-hover:shadow-[0_0_15px_#00F0FF]"
                >
                  <span>REQUEST QUOTE</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

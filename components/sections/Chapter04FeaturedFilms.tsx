"use client";

import React, { useState, useRef } from "react";
import SectionTitle from "../shared/SectionTitle";
import VideoModal from "../shared/VideoModal";
import { PROJECTS } from "../../data/projects";
import { Project, ProjectCategory } from "../../types";
import { sound } from "../../lib/sound";
import { Play, Film, Sparkles, Clock, CheckCircle2, Youtube, ExternalLink, ShieldCheck } from "lucide-react";

export default function Chapter04FeaturedFilms() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "YouTube Videos",
    "Talking Head",
    "Instagram Reels",
    "Shorts",
    "Motion Graphics",
    "Colour Grading",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="films" className="relative py-28 bg-background border-t border-zinc-800/80 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Screening Room Section Header */}
        <SectionTitle
          chapter="Chapter 04 // Featured Films"
          title="The Screening Room & Visual Case Studies"
          subtitle="Watch Sahil's official YouTube features below, or scrub through the case study grid."
        />

        {/* 🎬 DEDICATED FEATURED YOUTUBE CREATOR SHOWCASE DECK */}
        <div className="mb-16 rounded-3xl border border-zinc-800 bg-surface/70 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-recordRed">
              <Youtube className="h-5 w-5 text-recordRed" />
              <span>OFFICIAL YOUTUBE CREATOR SHOWCASE</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-400 font-bold border border-zinc-800 bg-black/60 px-3 py-1 rounded-full">
              LIVE EMBEDDED PLAYERS
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* 16:9 WIDESCREEN YOUTUBE FEATURE (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="viewport-frame overflow-hidden rounded-2xl border border-zinc-800 bg-black aspect-video shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/5bTyMXmMnx0?rel=0"
                  title="Sahil Kamdi Long-Form YouTube Feature"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0 rounded-2xl"
                />
              </div>

              <div className="flex items-center justify-between font-mono text-xs pt-1">
                <div>
                  <h4 className="font-bold text-white text-base">Long-Form YouTube Feature</h4>
                  <p className="text-zinc-400 text-xs">Pacing cut, kinetic captions & b-roll assembly</p>
                </div>
                <a
                  href="https://youtu.be/5bTyMXmMnx0"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center gap-1.5 rounded-full border border-recordRed/50 bg-recordRed/10 px-4 py-2 text-xs font-bold text-recordRed hover:bg-recordRed hover:text-white transition-all shadow-[0_0_15px_rgba(255,59,48,0.2)]"
                >
                  <span>WATCH ON YOUTUBE</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* 9:16 VERTICAL YOUTUBE SHORT (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="viewport-frame overflow-hidden rounded-2xl border border-zinc-800 bg-black aspect-[9/16] max-h-[380px] mx-auto shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/BCB2eJuuSaQ?rel=0"
                  title="Sahil Kamdi YouTube Short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0 rounded-2xl"
                />
              </div>

              <div className="flex items-center justify-between font-mono text-xs pt-1">
                <div>
                  <h4 className="font-bold text-white text-base">Vertical YouTube Short</h4>
                  <p className="text-zinc-400 text-xs">0.5s retention hook & fast cuts</p>
                </div>
                <a
                  href="https://youtube.com/shorts/BCB2eJuuSaQ"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center gap-1.5 rounded-full border border-recordRed/50 bg-recordRed/10 px-4 py-2 text-xs font-bold text-recordRed hover:bg-recordRed hover:text-white transition-all shadow-[0_0_15px_rgba(255,59,48,0.2)]"
                >
                  <span>OPEN SHORTS</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat);
              }}
              className={`rounded-full px-5 py-2 font-mono text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-keyframeCyan text-black shadow-[0_0_20px_rgba(0,240,255,0.5)] scale-105"
                  : "border border-zinc-800 bg-surface text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ScreeningRoomCard
              key={project.id}
              project={project}
              onClick={() => {
                sound.playWhoosh();
                setActiveModalProject(project);
              }}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Cinema Lightbox Modal */}
      <VideoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

// Awwwards-Level 3D Screening Room Project Card
function ScreeningRoomCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D tilt angles (-8deg to +8deg)
    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playClick();
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor="play"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="glass-card group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-surface transition-transform duration-200 ease-out cursor-pointer shadow-xl hover:border-keyframeCyan/40 hover:shadow-[0_15px_35px_rgba(0,240,255,0.15)]"
    >
      {/* Viewport Frame Container */}
      <div className={`viewport-frame relative w-full overflow-hidden bg-black ${project.aspectRatio === "9:16" ? "aspect-[9/16] max-h-[420px]" : "aspect-video"}`}>
        {/* Direct Video preview frame */}
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover transition-all duration-500 ${isHovered ? "scale-105 filter brightness-105" : "scale-100 filter brightness-90"}`}
        />

        {/* Play Button Overlay Badge */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-keyframeCyan/60 bg-black/80 text-keyframeCyan shadow-[0_0_20px_#00F0FF] backdrop-blur-md">
            <Play className="h-6 w-6 fill-keyframeCyan ml-0.5" />
          </div>
        </div>

        {/* Viewport Header Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="rounded-md border border-zinc-800 bg-black/80 px-2.5 py-1 font-mono text-[10px] font-bold text-keyframeCyan backdrop-blur-md">
            {project.category}
          </span>
          <span className="rounded-md border border-zinc-800 bg-black/80 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-md">
            {project.duration}
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-keyframeCyan">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-xs text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Software & Results Metadata */}
        <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 font-mono text-[11px]">
          <div className="flex flex-wrap gap-1 text-zinc-400">
            {project.software.slice(0, 2).map((sw) => (
              <span key={sw} className="rounded bg-zinc-900 px-2 py-0.5 text-zinc-300 border border-zinc-800">
                {sw}
              </span>
            ))}
          </div>
          <span className="font-bold text-recordRed">{project.results}</span>
        </div>
      </div>
    </div>
  );
}

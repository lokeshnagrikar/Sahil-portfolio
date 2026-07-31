"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, ExternalLink } from "lucide-react";
import { Project } from "../../types";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const directYoutubeLink = project.youtubeUrl
    ? project.youtubeUrl.includes("BCB2eJuuSaQ")
      ? "https://youtube.com/shorts/BCB2eJuuSaQ"
      : "https://youtu.be/5bTyMXmMnx0"
    : null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto select-none"
    >
      {/* Modal Card Container */}
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-zinc-800 bg-surface p-4 sm:p-8 shadow-2xl space-y-5">
        
        {/* Prominent Mobile-Friendly Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-keyframeCyan bg-black text-keyframeCyan shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:bg-keyframeCyan hover:text-black transition-all active:scale-95"
          aria-label="Close Project Modal"
        >
          <X className="h-6 w-6 stroke-[2.5]" />
        </button>

        {/* Video Player (Supports both 16:9 Widescreen & 9:16 Vertical Shorts with playsInline) */}
        <div className="viewport-frame overflow-hidden rounded-2xl border border-zinc-800 bg-black flex justify-center mt-2">
          {project.youtubeUrl ? (
            <div className={`relative w-full ${project.aspectRatio === "9:16" ? "aspect-[9/16] max-w-[320px] h-[55vh] sm:h-[65vh] mx-auto" : "aspect-video max-h-[50vh] sm:max-h-[60vh]"}`}>
              <iframe
                src={`${project.youtubeUrl}?autoplay=1&rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0 rounded-2xl"
              />
            </div>
          ) : (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              playsInline
              className="h-full max-h-[50vh] sm:max-h-[60vh] w-full object-contain"
            />
          )}
        </div>

        {/* Project Technical Metadata & Specs */}
        <div className="flex flex-col gap-5 pt-1">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800/80 pb-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-keyframeCyan font-bold">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.duration}</span>
              </div>
              <h3 className="mt-1 text-xl sm:text-3xl font-bold text-white flex flex-wrap items-center gap-3">
                <span>{project.title}</span>
                {directYoutubeLink && (
                  <a
                    href={directYoutubeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-recordRed/50 bg-recordRed/10 px-3 py-1 font-mono text-[11px] font-bold text-recordRed hover:bg-recordRed hover:text-white transition-all shrink-0"
                  >
                    <span>OPEN ON YOUTUBE</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </h3>
              {project.client && (
                <p className="mt-0.5 text-xs sm:text-sm text-zinc-400">Client: {project.client}</p>
              )}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-recordRed/30 bg-recordRed/10 px-4 py-1.5 text-xs font-mono font-bold text-recordRed">
              <ShieldCheck className="h-4 w-4" />
              <span>{project.results}</span>
            </div>
          </div>

          {/* Detailed Narrative (Overview, Challenge, Solution) */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  // PROJECT OVERVIEW
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  // THE CHALLENGE
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  // THE EDITING SOLUTION
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                  // SOFTWARE UTILIZED
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.software.map((sw) => (
                    <span
                      key={sw}
                      className="rounded-md border border-zinc-800 bg-black/60 px-3 py-1 font-mono text-xs text-zinc-300"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

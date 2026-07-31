"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  videoUrl: string;
  posterUrl?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "RAW UN-GRADED LOG FOOTAGE",
  afterLabel = "SAHIL'S CINEMATIC COLOR GRADE & RETOUCH",
  videoUrl,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoGradedRef = useRef<HTMLVideoElement>(null);
  const videoRawRef = useRef<HTMLVideoElement>(null);

  // Synchronize playback frame timecode between both videos continuously
  useEffect(() => {
    const graded = videoGradedRef.current;
    const raw = videoRawRef.current;
    if (!graded || !raw) return;

    const syncTime = () => {
      if (Math.abs(graded.currentTime - raw.currentTime) > 0.02) {
        raw.currentTime = graded.currentTime;
      }
    };

    graded.addEventListener("timeupdate", syncTime);
    return () => graded.removeEventListener("timeupdate", syncTime);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      data-cursor="drag"
      className="viewport-frame relative my-8 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black select-none cursor-ew-resize shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* 1. AFTER VIDEO (Color Graded - Full base layer) */}
      <video
        ref={videoGradedRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover filter contrast-[1.1] saturate-[1.25]"
      />
      <div className="absolute bottom-4 right-4 z-20 rounded-md border border-keyframeCyan/30 bg-black/80 px-3 py-1.5 font-mono text-[11px] font-bold text-keyframeCyan backdrop-blur-md">
        {afterLabel}
      </div>

      {/* 2. BEFORE VIDEO (RAW LOG - Clipped natively with GPU CSS inset clipPath) */}
      <video
        ref={videoRawRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        className="absolute inset-0 h-full w-full object-cover filter grayscale contrast-75 brightness-110 opacity-85 z-10"
      />
      <div
        className="absolute bottom-4 left-4 z-20 whitespace-nowrap rounded-md border border-zinc-700 bg-black/80 px-3 py-1.5 font-mono text-[11px] font-bold text-zinc-300 backdrop-blur-md"
        style={{
          opacity: sliderPosition > 10 ? 1 : 0,
        }}
      >
        {beforeLabel}
      </div>

      {/* SLIDER DIVIDER PLAYHEAD */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-keyframeCyan shadow-[0_0_15px_#00F0FF] z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-keyframeCyan bg-black/90 text-keyframeCyan shadow-[0_0_20px_#00F0FF]">
          <span className="font-mono text-xs font-bold">◄►</span>
        </div>
      </div>

      {/* Floating Viewport Metadata Header */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-3 font-mono text-[10px] text-zinc-400">
        <span className="flex items-center gap-1.5 rounded-sm bg-black/70 px-2.5 py-1 border border-zinc-800 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-recordRed animate-pulse" />
          REC 00:00:14:00
        </span>
        <span className="rounded-sm bg-black/70 px-2.5 py-1 border border-zinc-800 text-keyframeCyan backdrop-blur-md font-bold">
          DAVINCI COLOR NODE
        </span>
      </div>
    </div>
  );
}

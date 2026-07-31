"use client";

import React, { useEffect, useState } from "react";

export default function TimelinePlayhead() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [activeChapter, setActiveChapter] = useState("CH.01 HERO");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setScrollProgress(progress);

      // Generate frame-accurate timecode calculation based on scroll %
      const totalFrames = Math.floor((progress / 100) * 1800); // 30 sec reel @ 60fps = 1800 frames
      const mins = String(Math.floor(totalFrames / (60 * 60))).padStart(2, "0");
      const secs = String(Math.floor((totalFrames % (60 * 60)) / 60)).padStart(2, "0");
      const frames = String(totalFrames % 60).padStart(2, "0");
      setTimecode(`00:${mins}:${secs}:${frames}`);

      // Chapter tracking based on scroll %
      if (progress < 15) setActiveChapter("CH.01 // HERO");
      else if (progress < 30) setActiveChapter("CH.02 // ABOUT");
      else if (progress < 45) setActiveChapter("CH.03 // PROCESS");
      else if (progress < 65) setActiveChapter("CH.04 // FILMS");
      else if (progress < 80) setActiveChapter("CH.05 // ARSENAL");
      else if (progress < 90) setActiveChapter("CH.06 // SERVICES");
      else setActiveChapter("CH.07 // EXPORT");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-0 bottom-0 z-40 hidden xl:flex flex-col justify-between py-12 pointer-events-none select-none">
      {/* Timeline Header Tag */}
      <div className="flex flex-col gap-1 text-[10px] font-mono text-zinc-500">
        <div className="flex items-center gap-1.5 text-keyframeCyan">
          <span className="keyframe-node animate-pulse" />
          <span className="font-bold tracking-widest">TIMELINE // V1</span>
        </div>
        <span className="text-zinc-400 font-bold">{timecode}</span>
      </div>

      {/* Vertical Track Line */}
      <div className="relative h-2/3 w-[1px] bg-zinc-800 self-center my-4">
        {/* Active Scroll Fill */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-keyframeCyan via-recordRed to-gradingAmber transition-all duration-75 shadow-[0_0_8px_#00F0FF]"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Playhead Marker Node */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-keyframeCyan rotate-45 shadow-[0_0_12px_#00F0FF] transition-all duration-75"
          style={{ top: `${scrollProgress}%` }}
        />
      </div>

      {/* Timeline Footer Chapter Tag */}
      <div className="flex flex-col gap-1 text-[10px] font-mono text-zinc-500">
        <span className="text-zinc-600">SEQUENCE STATUS</span>
        <span className="text-keyframeCyan font-bold tracking-wider">{activeChapter}</span>
      </div>
    </div>
  );
}

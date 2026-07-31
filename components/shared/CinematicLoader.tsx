"use client";

import React, { useEffect, useState } from "react";
import { sound } from "../../lib/sound";

export default function CinematicLoader() {
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    sound.playWhoosh();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentVal = Math.min(100, next);

        // Frame-accurate timecode counter calculation
        const totalFrames = Math.floor((currentVal / 100) * 900); // 300 frames @ 60fps
        const secs = String(Math.floor(totalFrames / 60)).padStart(2, "0");
        const frames = String(totalFrames % 60).padStart(2, "0");
        setTimecode(`00:00:${secs}:${frames}`);

        return currentVal;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black p-8 font-mono transition-opacity duration-700 ease-in-out">
      {/* Top Status Header */}
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-keyframeCyan animate-ping" />
          <span className="font-bold text-keyframeCyan tracking-widest">
            SAHIL KAMDI // EDIT SUITE 01
          </span>
        </div>
        <span>[ SYSTEM BOOT ]</span>
      </div>

      {/* Center Timecode Counter & Waveform Progress */}
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="rounded-2xl border border-zinc-800 bg-surface/80 p-8 backdrop-blur-xl shadow-2xl">
          <div className="text-4xl font-extrabold tracking-widest text-white sm:text-6xl text-gradient">
            {timecode}
          </div>

          <p className="mt-4 text-xs tracking-widest text-zinc-400">
            INITIALIZING TIMELINE SEQUENCE... {progress}%
          </p>

          {/* Oscilloscope Progress Wave Line */}
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-zinc-900 mx-auto">
            <div
              className="h-full bg-gradient-to-r from-keyframeCyan via-recordRed to-gradingAmber transition-all duration-75 shadow-[0_0_12px_#00F0FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between text-[11px] text-zinc-600">
        <span>PREMIERE PRO & AFTER EFFECTS READY</span>
        <span>60 FPS // RENDER ENGINE</span>
      </div>
    </div>
  );
}

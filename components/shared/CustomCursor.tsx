"use client";

import React, { useEffect, useState } from "react";
import { sound } from "../../lib/sound";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "play" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastTarget: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      if (target !== lastTarget) {
        if (
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-cursor]")
        ) {
          sound.playClick();
        }
        lastTarget = target;
      }

      if (target.closest("[data-cursor='play']")) {
        setCursorType("play");
      } else if (target.closest("[data-cursor='drag']")) {
        setCursorType("drag");
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {cursorType === "default" && (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-keyframeCyan shadow-[0_0_10px_#00F0FF]" />
        </div>
      )}

      {cursorType === "hover" && (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border border-keyframeCyan bg-keyframeCyan/20 backdrop-blur-sm transition-all duration-200" />
        </div>
      )}

      {cursorType === "play" && (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-full bg-keyframeCyan px-3 py-1.5 text-[11px] font-bold tracking-wider text-black shadow-lg">
            <span>PLAY</span>
            <svg className="h-3 w-3 fill-black" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {cursorType === "drag" && (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="flex items-center gap-1 rounded-full bg-recordRed px-3 py-1.5 text-[11px] font-bold text-white shadow-lg">
            <span>◄ SCRUB ►</span>
          </div>
        </div>
      )}
    </div>
  );
}

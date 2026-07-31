"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] w-full bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-keyframeCyan via-recordRed to-gradingAmber transition-all duration-75 shadow-[0_0_10px_#00F0FF]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

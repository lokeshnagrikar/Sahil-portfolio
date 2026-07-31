"use client";

import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  cinemaMode: boolean;
  gridOverlay: boolean;
  toggleCinemaMode: () => void;
  toggleGridOverlay: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  cinemaMode: false,
  gridOverlay: false,
  toggleCinemaMode: () => {},
  toggleGridOverlay: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [cinemaMode, setCinemaMode] = useState(false);
  const [gridOverlay, setGridOverlay] = useState(false);

  const toggleCinemaMode = () => setCinemaMode((prev) => !prev);
  const toggleGridOverlay = () => setGridOverlay((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{ cinemaMode, gridOverlay, toggleCinemaMode, toggleGridOverlay }}
    >
      {/* Cinema Mode Anamorphic Letterbox Black Bars Overlay */}
      {cinemaMode && (
        <div className="pointer-events-none fixed inset-0 z-50 flex flex-col justify-between">
          <div className="h-12 w-full bg-black shadow-2xl transition-all duration-500" />
          <div className="h-12 w-full bg-black shadow-2xl transition-all duration-500" />
        </div>
      )}

      {/* Editor Alignment Rule-of-Thirds Grid Overlay */}
      {gridOverlay && (
        <div className="pointer-events-none fixed inset-0 z-30 grid grid-cols-3 grid-rows-3 opacity-20 border border-keyframeCyan">
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
          <div className="border border-keyframeCyan/30" />
        </div>
      )}

      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

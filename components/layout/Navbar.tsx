"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Play, ArrowUpRight, Volume2, VolumeX, Film, Grid } from "lucide-react";
import { sound } from "../../lib/sound";
import { useTheme } from "../providers/ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { cinemaMode, gridOverlay, toggleCinemaMode, toggleGridOverlay } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Films", href: "#films" },
    { name: "Arsenal", href: "#toolkit" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3.5 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand Tag */}
          <a
            href="#"
            onMouseEnter={() => sound.playClick()}
            className="group flex items-center gap-2.5 font-mono text-sm font-bold tracking-wider text-white transition-opacity hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-keyframeCyan/10 border border-keyframeCyan/30 text-keyframeCyan transition-transform group-hover:scale-105">
              <Play className="h-3.5 w-3.5 fill-keyframeCyan" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white">SAHIL KAMDI</span>
              <span className="text-[10px] font-mono text-zinc-400 font-normal tracking-widest">
                VIDEO & MOTION EDITOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => sound.playClick()}
                className="text-xs font-mono tracking-widest text-zinc-400 transition-colors hover:text-keyframeCyan"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Desktop Controls (SFX Toggle, Cinema Mode, Hire Button) */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Cinema Mode Toggle */}
            <button
              onClick={() => {
                sound.playSnap();
                toggleCinemaMode();
              }}
              title="Toggle Anamorphic Cinema Mode (2.39:1)"
              className={`flex h-8 items-center gap-1.5 rounded-full border px-3 text-[11px] font-mono font-bold transition-all ${
                cinemaMode
                  ? "border-keyframeCyan bg-keyframeCyan/20 text-keyframeCyan"
                  : "border-zinc-800 bg-surface text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              <Film className="h-3.5 w-3.5" />
              <span>CINEMA</span>
            </button>

            {/* Grid Overlay Toggle */}
            <button
              onClick={() => {
                sound.playSnap();
                toggleGridOverlay();
              }}
              title="Toggle Editor Rule-of-Thirds Grid Overlay"
              className={`flex h-8 items-center gap-1.5 rounded-full border px-3 text-[11px] font-mono font-bold transition-all ${
                gridOverlay
                  ? "border-keyframeCyan bg-keyframeCyan/20 text-keyframeCyan"
                  : "border-zinc-800 bg-surface text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              <Grid className="h-3.5 w-3.5" />
              <span>GRID</span>
            </button>

            {/* UI Sound SFX Toggle */}
            <button
              onClick={handleAudioToggle}
              title="Toggle UI Acoustic Sound Effects"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-surface text-zinc-400 transition-colors hover:border-keyframeCyan hover:text-keyframeCyan"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-keyframeCyan" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onMouseEnter={() => sound.playClick()}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2 text-xs font-bold tracking-wider text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 flex flex-col bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-zinc-800 pb-3 text-lg font-mono tracking-widest text-zinc-300 hover:text-keyframeCyan"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-keyframeCyan py-3 text-center text-sm font-bold text-black"
            >
              HIRE ME NOW
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Play, ArrowUpRight, Volume2, VolumeX, Film, Grid, Instagram } from "lucide-react";
import { sound } from "../../lib/sound";
import { useTheme } from "../providers/ThemeProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { cinemaMode, gridOverlay, toggleCinemaMode, toggleGridOverlay } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(targetElement, { offset: -80, duration: 1.4 });
      } else {
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-black py-3 border-b border-zinc-800 shadow-2xl"
          : "bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 md:py-6 border-b border-zinc-800/40 md:border-b-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand Tag */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
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

          {/* Desktop Navigation Link Deck with Lenis Smooth Scroll */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
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
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2 text-xs font-bold tracking-wider text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Right Action Area (Audio Toggle + Menu Button) */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={handleAudioToggle}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-keyframeCyan" />}
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-keyframeCyan" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 100% SOLID DARK BLACK MOBILE MENU OVERLAY WITH SMOOTH SCROLL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] z-50 flex flex-col bg-black p-6 overflow-y-auto md:hidden animate-in fade-in duration-200 min-h-screen">
          <nav className="flex flex-col gap-4 font-mono pb-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between border-b border-zinc-800/80 pb-3.5 text-base font-bold text-white hover:text-keyframeCyan transition-colors"
              >
                <span>{link.name.toUpperCase()}</span>
                <ArrowUpRight className="h-4 w-4 text-keyframeCyan" />
              </a>
            ))}

            {/* Mobile Tool Toggles */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  sound.playSnap();
                  toggleCinemaMode();
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-mono font-bold ${
                  cinemaMode
                    ? "border-keyframeCyan bg-keyframeCyan/20 text-keyframeCyan"
                    : "border-zinc-800 bg-zinc-900 text-zinc-300"
                }`}
              >
                <Film className="h-4 w-4" />
                <span>CINEMA MODE</span>
              </button>

              <button
                onClick={() => {
                  sound.playSnap();
                  toggleGridOverlay();
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-xs font-mono font-bold ${
                  gridOverlay
                    ? "border-keyframeCyan bg-keyframeCyan/20 text-keyframeCyan"
                    : "border-zinc-800 bg-zinc-900 text-zinc-300"
                }`}
              >
                <Grid className="h-4 w-4" />
                <span>GRID OVERLAY</span>
              </button>
            </div>

            {/* Instagram Direct Link */}
            <a
              href="https://www.instagram.com/sahilkamdi_?igsh=MW5nNmIxYXg3dXBxYw=="
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-keyframeCyan/40 bg-keyframeCyan/10 py-3.5 text-xs font-bold text-keyframeCyan"
            >
              <Instagram className="h-4 w-4" />
              <span>INSTAGRAM (@sahilkamdi_)</span>
            </a>

            {/* Primary Hire CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white py-4 text-center text-xs font-bold tracking-wider text-black hover:bg-keyframeCyan transition-all shadow-lg"
            >
              <span>HIRE ME FOR YOUR PROJECT</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

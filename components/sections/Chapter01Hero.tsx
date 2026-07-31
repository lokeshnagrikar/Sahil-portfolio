"use client";

import React, { useEffect, useState, useRef } from "react";
import MagneticButton from "../shared/MagneticButton";
import { sound } from "../../lib/sound";
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

export default function Chapter01Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const sahilSlides = [
    {
      url: "/images/hero1.jpg",
      objectPosition: "70% 20%",
      badge: "SAHIL KAMDI // EDIT SUITE 01",
      headlinePrefix: "Crafting High-Retention",
      headlineGradient: "Videos & Motion Graphics",
      subtitle: "Transforming raw footage into engaging visual stories through cinematic pacing, color science, sound design, and motion graphics for creators, influencers, and digital brands.",
    },
    {
      url: "/images/hero2.jpg",
      objectPosition: "center 25%",
      badge: "MOTION GRAPHICS SPECIALIST",
      headlinePrefix: "Transforming Raw Footage Into",
      headlineGradient: "Engaging Visual Stories",
      subtitle: "Eliminating filler words, crafting story arcs, and inserting After Effects keyframe animations for top-tier creators.",
    },
    {
      url: "/images/hero3.jpg",
      objectPosition: "85% 45%",
      badge: "DAVINCI COLOR SCIENCE",
      headlinePrefix: "Cinematic Color Grading &",
      headlineGradient: "Pacing Mastery",
      subtitle: "Node balancing, primary exposure correction, skin frequency retouching, and atmospheric teal-and-orange LUT tones.",
    },
    {
      url: "/images/hero4.jpg",
      objectPosition: "70% 20%",
      badge: "CREATOR CONTENT STRATEGIST",
      headlinePrefix: "Engineering 90%+ Retention For",
      headlineGradient: "YouTube & Instagram Reels",
      subtitle: "0.5s scroll-stopping hooks, kinetic captions, whip-cut sound design, and rhythm-synced audio stingers.",
    },
    {
      url: "/images/hero5.webp",
      objectPosition: "center 25%",
      badge: "PREMIERE PRO & AFTER EFFECTS",
      headlinePrefix: "Dynamic Keyframing &",
      headlineGradient: "Whip-Cut Sound Design",
      subtitle: "Multi-cam alignment, spatial audio ducking, custom vector lower thirds, and high-bitrate 4K ProRes exports.",
    },
    {
      url: "/images/hero6.jpg",
      objectPosition: "70% 25%",
      badge: "AVAILABLE FOR COMMISSIONS",
      headlinePrefix: "Let's Build Your Next",
      headlineGradient: "Viral Video Campaign",
      subtitle: "Ready to elevate your YouTube channel or Reel campaign? Export your project parameters for a 24-hour response.",
    },
  ];

  // Auto-advance photo carousel every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sahilSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sahilSlides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-background pt-28 sm:pt-36 pb-12 sm:pb-16 select-none"
    >
      {/* ADAPTIVE BACKGROUND PHOTO LAYER: 100% CLEAR FACE VISIBILITY ON MOBILE & DESKTOP */}
      <div
        className="absolute top-0 bottom-0 right-0 w-full lg:w-1/2 overflow-hidden pointer-events-none z-0"
        style={{
          maskImage: "radial-gradient(ellipse 95% 95% at 70% 40%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 95% at 70% 40%, black 50%, transparent 100%)",
        }}
      >
        {sahilSlides.map((slide, idx) => (
          <div
            key={slide.url}
            style={{
              transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0) scale(1.04)`,
              opacity: currentSlide === idx ? 1 : 0,
              transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s ease-out",
            }}
            className="absolute inset-0"
          >
            <img
              src={slide.url}
              alt="Sahil Kamdi"
              style={{ objectPosition: slide.objectPosition }}
              className="h-full w-full object-cover filter brightness-110 contrast-105"
            />
          </div>
        ))}

        {/* Soft Linear Left Gradient for readable text contrast on mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 lg:via-background/40 to-transparent" />
      </div>

      {/* HEADINGS & CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-6 text-left">

          {/* Active Carousel Badge Header */}
          <div className="inline-flex items-center gap-2 rounded-full bg-keyframeCyan/10 px-3.5 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs font-bold text-keyframeCyan backdrop-blur-md transition-all duration-300 border border-keyframeCyan/20">
            <span className="h-2 w-2 rounded-full bg-keyframeCyan animate-ping" />
            <span className="truncate">{sahilSlides[currentSlide].badge}</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            <span>{sahilSlides[currentSlide].headlinePrefix} </span>
            <span className="block mt-1 bg-gradient-to-r from-keyframeCyan via-white to-keyframeCyan bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              {sahilSlides[currentSlide].headlineGradient}
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <p className="max-w-xl text-sm text-zinc-300 sm:text-lg leading-relaxed font-sans min-h-0 lg:min-h-[4.5rem]">
            {sahilSlides[currentSlide].subtitle}
          </p>

          {/* Responsive Call-to-Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <MagneticButton>
              <a
                href="#contact"
                onMouseEnter={() => sound.playClick()}
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3.5 font-mono text-xs font-bold tracking-wider text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] w-full sm:w-auto"
              >
                <span>HIRE ME FOR YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#films"
                onMouseEnter={() => sound.playClick()}
                className="flex items-center justify-center gap-2 rounded-full bg-zinc-900/90 px-6 sm:px-7 py-3.5 font-mono text-xs font-bold tracking-wider text-white backdrop-blur-md transition-all hover:bg-zinc-800 hover:text-keyframeCyan border border-zinc-800 w-full sm:w-auto"
              >
                <Play className="h-4 w-4 fill-keyframeCyan text-keyframeCyan" />
                <span>EXPLORE FEATURED WORK</span>
              </a>
            </MagneticButton>
          </div>

          {/* Carousel Controls */}
          <div className="pt-2 sm:pt-4 flex items-center justify-between sm:justify-start gap-4 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setCurrentSlide((prev) => (prev === 0 ? sahilSlides.length - 1 : prev - 1));
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 hover:bg-keyframeCyan hover:text-black transition-colors border border-zinc-800"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {sahilSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playClick();
                      setCurrentSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${currentSlide === idx ? "w-6 sm:w-8 bg-keyframeCyan shadow-[0_0_10px_#00F0FF]" : "w-2 bg-zinc-800 hover:bg-zinc-600"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setCurrentSlide((prev) => (prev + 1) % sahilSlides.length);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 text-zinc-300 hover:bg-keyframeCyan hover:text-black transition-colors border border-zinc-800"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <span className="font-mono text-[11px] text-zinc-500">
              0{currentSlide + 1} / 0{sahilSlides.length}
            </span>
          </div>

          {/* Key Performance Stats Row */}
          <div className="pt-5 sm:pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-keyframeCyan">1.16M+</span>
              <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">TOTAL VIEWS</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">92%</span>
              <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">AVG RETENTION</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-recordRed">50+</span>
              <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">VIDEOS EDITED</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-gradingAmber">100%</span>
              <span className="block text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">ON-TIME DELIVERY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

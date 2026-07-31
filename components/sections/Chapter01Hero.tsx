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
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG20250209131407.jpg.jpeg",
      badge: "SAHIL KAMDI // EDIT SUITE 01",
      headlinePrefix: "Crafting High-Retention",
      headlineGradient: "Videos & Motion Graphics",
    },
    {
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG20250209153930.jpg.jpeg",
      badge: "MOTION GRAPHICS SPECIALIST",
      headlinePrefix: "Transforming Raw Footage Into",
      headlineGradient: "Engaging Visual Stories",
    },
    {
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG20250209163353.jpg.jpeg",
      badge: "DAVINCI COLOR SCIENCE",
      headlinePrefix: "Cinematic Color Grading &",
      headlineGradient: "Pacing Mastery",
    },
    {
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG_20250209_160545.jpg.jpeg",
      badge: "CREATOR CONTENT STRATEGIST",
      headlinePrefix: "Engineering 90%+ Retention For",
      headlineGradient: "YouTube & Instagram Reels",
    },
    {
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG_20250209_165800_718.webp",
      badge: "PREMIERE PRO & AFTER EFFECTS",
      headlinePrefix: "Dynamic Keyframing &",
      headlineGradient: "Whip-Cut Sound Design",
    },
    {
      url: "/refernce-images-for-portfolio/sahilskamdi-images/IMG_20250802_110732.jpg.jpeg",
      badge: "AVAILABLE FOR COMMISSIONS",
      headlinePrefix: "Let's Build Your Next",
      headlineGradient: "Viral Video Campaign",
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
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const activeSlide = sahilSlides[currentSlide];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 select-none bg-background"
    >
      {/* 1. RIGHT-ALIGNED BACKGROUND PHOTO CAROUSEL SEAMLESSLY MERGED INTO LEFT BLACK BG */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 h-full overflow-hidden transition-transform duration-700 ease-out"
        style={{
          transform: `scale(1.03) translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`,
        }}
      >
        {sahilSlides.map((slide, index) => (
          <div
            key={slide.url}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.url}
              alt={`Sahil Kamdi Background ${index + 1}`}
              className="h-full w-full object-cover object-center filter brightness-105 contrast-105 saturate-110"
            />
          </div>
        ))}

        {/* SEAMLESS GRADIENT BLEND: Softly fades left edge of Sahil's photo into the solid black background */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-background via-background/80 to-transparent w-full lg:w-3/4" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/30 to-black/20" />
      </div>

      {/* 2. CAMERA VIEWFINDER CORNER MARKINGS */}
      <div className="pointer-events-none absolute inset-8 z-20 hidden sm:block">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-keyframeCyan/50" />
        <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-keyframeCyan/50" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-keyframeCyan/50" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-keyframeCyan/50" />
      </div>

      {/* 3. HERO CONTENT CONTAINER (On Left Solid Black Canvas) */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div
          className="max-w-2xl flex flex-col items-start text-left space-y-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
          }}
        >
          {/* Status Indicator Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-keyframeCyan/40 bg-black/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.15)]">
            <span className="h-2 w-2 rounded-full bg-keyframeCyan animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-keyframeCyan">
              {activeSlide.badge}
            </span>
          </div>

          {/* Kinetic Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
            {activeSlide.headlinePrefix} <br />
            <span className="bg-gradient-to-r from-white via-keyframeCyan to-recordRed bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              {activeSlide.headlineGradient}
            </span>
          </h1>

          {/* Subheading Narrative */}
          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Transforming raw footage into engaging visual stories through cinematic pacing, color science, sound design, and motion graphics for creators, influencers, and digital brands.
          </p>

          {/* Magnetic CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact">
              <div className="group flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]">
                <span>HIRE ME FOR YOUR PROJECT</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </MagneticButton>

            <MagneticButton href="#films">
              <div className="flex items-center gap-2.5 rounded-full border border-zinc-700 bg-black/80 px-7 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:border-keyframeCyan hover:bg-zinc-900">
                <Play className="h-4 w-4 fill-keyframeCyan text-keyframeCyan" />
                <span>EXPLORE FEATURED WORK</span>
              </div>
            </MagneticButton>
          </div>

          {/* Metric Proof Badges */}
          <div className="pt-6 w-full grid grid-cols-2 gap-4 border-t border-zinc-800/80 sm:grid-cols-4">
            <div className="flex flex-col">
              <span className="font-mono text-2xl font-black text-keyframeCyan sm:text-3xl">1.5M+</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">TOTAL VIEWS</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-2xl font-black text-white sm:text-3xl">92%</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">AVG RETENTION</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-2xl font-black text-recordRed sm:text-3xl">50+</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">VIDEOS EDITED</span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-2xl font-black text-gradingAmber sm:text-3xl">100%</span>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">ON-TIME DELIVERY</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BACKGROUND CAROUSEL CONTROLS (Floating Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 rounded-full border border-zinc-700 bg-black/90 p-2 backdrop-blur-md">
        <button
          onClick={() => {
            sound.playClick();
            setCurrentSlide((prev) => (prev === 0 ? sahilSlides.length - 1 : prev - 1));
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 hover:border-keyframeCyan hover:text-keyframeCyan transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span className="font-mono text-[10px] font-bold text-keyframeCyan tracking-wider px-1">
          SHOT 0{currentSlide + 1} / 0{sahilSlides.length}
        </span>

        <button
          onClick={() => {
            sound.playClick();
            setCurrentSlide((prev) => (prev + 1) % sahilSlides.length);
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 hover:border-keyframeCyan hover:text-keyframeCyan transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

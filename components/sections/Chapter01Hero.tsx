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
      badge: "SAHIL KAMDI // EDIT SUITE 01",
      headlinePrefix: "Crafting High-Retention",
      headlineGradient: "Videos & Motion Graphics",
    },
    {
      url: "/images/hero2.jpg",
      badge: "MOTION GRAPHICS SPECIALIST",
      headlinePrefix: "Transforming Raw Footage Into",
      headlineGradient: "Engaging Visual Stories",
    },
    {
      url: "/images/hero3.jpg",
      badge: "DAVINCI COLOR SCIENCE",
      headlinePrefix: "Cinematic Color Grading &",
      headlineGradient: "Pacing Mastery",
    },
    {
      url: "/images/hero4.jpg",
      badge: "CREATOR CONTENT STRATEGIST",
      headlinePrefix: "Engineering 90%+ Retention For",
      headlineGradient: "YouTube & Instagram Reels",
    },
    {
      url: "/images/hero5.webp",
      badge: "PREMIERE PRO & AFTER EFFECTS",
      headlinePrefix: "Dynamic Keyframing &",
      headlineGradient: "Whip-Cut Sound Design",
    },
    {
      url: "/images/hero6.jpg",
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
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-background pt-24 pb-16 select-none"
    >
      {/* 3D PARALLAX BACKGROUND PHOTO CAROUSEL */}
      {sahilSlides.map((slide, idx) => (
        <div
          key={slide.url}
          style={{
            transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0) scale(1.05)`,
            opacity: currentSlide === idx ? 0.38 : 0,
            transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s ease-out",
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none filter brightness-110 contrast-105"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center 25%",
            }}
          />
        </div>
      ))}

      {/* Sleek Dark Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/90 pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Active Carousel Badge Header */}
          <div className="inline-flex items-center gap-2 rounded-full border border-keyframeCyan/40 bg-keyframeCyan/10 px-4 py-1.5 font-mono text-xs font-bold text-keyframeCyan shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
            <span className="h-2 w-2 rounded-full bg-keyframeCyan animate-ping" />
            <span>{sahilSlides[currentSlide].badge}</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
            <span>{sahilSlides[currentSlide].headlinePrefix} </span>
            <span className="bg-gradient-to-r from-keyframeCyan via-white to-keyframeCyan bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              {sahilSlides[currentSlide].headlineGradient}
            </span>
          </h1>

          <p className="max-w-2xl text-base text-zinc-300 sm:text-lg leading-relaxed font-sans">
            Post-production specialist mastering story-driven pacing, kinetic typography, retention hooks, and DaVinci Resolve color grading for top-tier creators & brands.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="#films"
                onMouseEnter={() => sound.playClick()}
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-mono text-xs font-bold tracking-wider text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] scale-105"
              >
                <Play className="h-4 w-4 fill-black transition-transform group-hover:scale-110" />
                <span>EXPLORE FEATURED FILMS</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                onMouseEnter={() => sound.playClick()}
                className="flex items-center gap-2 rounded-full border border-zinc-700 bg-surface/80 px-8 py-4 font-mono text-xs font-bold tracking-wider text-white backdrop-blur-md transition-all hover:border-keyframeCyan hover:text-keyframeCyan hover:shadow-[0_0_20px_#00F0FF]"
              >
                <span>EXPORT PROJECT BRIEF</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div>

          {/* Carousel Manual Controls */}
          <div className="pt-8 flex items-center gap-4 font-mono text-xs text-zinc-400">
            <button
              onClick={() => {
                sound.playClick();
                setCurrentSlide((prev) => (prev === 0 ? sahilSlides.length - 1 : prev - 1));
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-black/60 hover:border-keyframeCyan hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {sahilSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.playClick();
                    setCurrentSlide(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? "w-8 bg-keyframeCyan shadow-[0_0_10px_#00F0FF]" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setCurrentSlide((prev) => (prev + 1) % sahilSlides.length);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-black/60 hover:border-keyframeCyan hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

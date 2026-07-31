"use client";

import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { sound } from "../../lib/sound";
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, ArrowUpRight, MessageSquare, Instagram, Sparkles } from "lucide-react";

export default function Chapter07Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "YouTube Video Editing",
    budget: "₹15,000 - ₹35,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playWhoosh();
    setIsRendering(true);

    let current = 0;
    const interval = setInterval(() => {
      current += 15;
      setRenderProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsRendering(false);
          setSubmitted(true);
          sound.playSnap();
        }, 300);
      }
    }, 60);
  };

  return (
    <section id="contact" className="relative py-28 bg-surface/40 border-t border-zinc-800/80 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          chapter="Chapter 07 // Final Export"
          title="Let's Create Something Cinematic Together"
          subtitle="Have a video project, YouTube series, or Reel campaign in mind? Export your project brief below for instant project consultation."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          
          {/* LEFT COLUMN: DIRECT CONTACT DETAILS & INSTAGRAM (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surface shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 border border-keyframeCyan/30 text-keyframeCyan">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Direct Communication</h3>
                  <p className="font-mono text-[10px] text-zinc-500">24-HOUR RESPONSE GUARANTEE</p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Official Instagram Profile */}
                <a
                  href="https://www.instagram.com/sahilkamdi_?igsh=MW5nNmIxYXg3dXBxYw=="
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-keyframeCyan/40 bg-keyframeCyan/5 p-4 transition-all hover:bg-keyframeCyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/20 text-keyframeCyan shrink-0">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-keyframeCyan text-[10px] font-bold">INSTAGRAM DIRECT DM</span>
                      <p className="text-white font-bold text-sm">@sahilkamdi_</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-keyframeCyan" />
                </a>

                {/* Email Trigger */}
                <a
                  href="mailto:sahilkamdi414@gmail.com"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-black/60 p-4 transition-all hover:border-keyframeCyan hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 text-keyframeCyan shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px]">EMAIL ADDRESS</span>
                    <p className="text-white font-bold">sahilkamdi414@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp Trigger */}
                <a
                  href="https://wa.me/919325827865"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-black/60 p-4 transition-all hover:border-recordRed hover:shadow-[0_0_15px_rgba(255,59,48,0.2)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-recordRed/10 text-recordRed shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px]">PHONE / WHATSAPP</span>
                    <p className="text-white font-bold">+91 9325827865</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-black/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradingAmber/10 text-gradingAmber shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px]">LOCATION</span>
                    <p className="text-white font-bold">Gondia, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Downloadable PDF Resume Button */}
              <div className="pt-4 border-t border-zinc-800/80">
                <a
                  href="#"
                  onMouseEnter={() => sound.playClick()}
                  className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 py-3.5 text-xs font-bold font-mono text-white transition-all hover:border-keyframeCyan hover:text-keyframeCyan hover:shadow-[0_0_15px_#00F0FF]"
                >
                  <FileText className="h-4 w-4" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MEDIA ENCODER INSPIRED INQUIRY FORM (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 bg-surface shadow-2xl">
              
              {submitted ? (
                /* EXPORT COMPLETE CONFIRMATION STATE */
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-keyframeCyan/20 text-keyframeCyan border border-keyframeCyan shadow-[0_0_25px_#00F0FF]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="font-mono text-xs font-bold text-keyframeCyan tracking-widest">
                    [ EXPORT STAMP #2026-08 // SUCCESS ]
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Brief Rendered & Sent!</h3>
                  <p className="max-w-md text-xs text-zinc-400 leading-relaxed">
                    Thank you for reaching out. Sahil has received your project parameters and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "YouTube Video Editing",
                        budget: "₹15,000 - ₹35,000",
                        message: "",
                      });
                    }}
                    className="mt-4 rounded-full bg-white px-6 py-2.5 font-mono text-xs font-bold text-black transition-all hover:bg-keyframeCyan"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                /* INQUIRY BRIEF FORM */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                    <h3 className="text-xl font-bold text-white">Project Brief Render Panel</h3>
                    <span className="font-mono text-[10px] text-keyframeCyan font-bold">
                      [ EXPORT PRESET: INQUIRY ]
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-keyframeCyan focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@creator.com"
                        className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-keyframeCyan focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">
                        EXPORT PRESET (PROJECT TYPE)
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white focus:border-keyframeCyan focus:outline-none transition-colors"
                      >
                        <option>YouTube Video Editing</option>
                        <option>Instagram Reels & Shorts</option>
                        <option>Talking Head Commentary</option>
                        <option>Motion Graphics & Logo Reveal</option>
                        <option>Cinematic Colour Grading</option>
                        <option>Promotional Commercial Ad</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">
                        ESTIMATED BUDGET (INR)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white focus:border-keyframeCyan focus:outline-none transition-colors font-mono"
                      >
                        <option>₹5,000 - ₹15,000</option>
                        <option>₹15,000 - ₹35,000</option>
                        <option>₹35,000 - ₹75,000</option>
                        <option>₹75,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">
                      PROJECT VISION & LINKS *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your video project, channel goals, target deadline, and reference video links..."
                      className="w-full rounded-xl border border-zinc-800 bg-black/60 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-keyframeCyan focus:outline-none transition-colors"
                    />
                  </div>

                  {/* MEDIA ENCODER RENDER SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isRendering}
                    className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-white px-8 py-4 font-mono text-xs font-bold tracking-wider text-black transition-all hover:bg-keyframeCyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] disabled:opacity-75"
                  >
                    {isRendering ? (
                      <span className="flex items-center gap-2 text-black font-bold">
                        <Sparkles className="h-4 w-4 animate-spin text-black" />
                        RENDERING BRIEF... {renderProgress}%
                      </span>
                    ) : (
                      <>
                        <span>EXPORT PROJECT BRIEF</span>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import BeforeAfterSlider from "../shared/BeforeAfterSlider";
import { Sliders, Eye, Palette, Sparkles } from "lucide-react";

export default function Chapter03ProcessSlider() {
  return (
    <section id="process" className="relative py-24 bg-surface/50 border-y border-zinc-800/60 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          chapter="Chapter 03 // The Process"
          title="From Raw Camera Footage to Masterpiece Finish"
          subtitle="Drag the scrubber below to compare raw unedited LOG footage against Sahil's final DaVinci Resolve color grade and beauty skin retouching."
        />

        {/* Interactive Before & After Video Comparison Slider */}
        <BeforeAfterSlider
          beforeLabel="RAW UN-GRADED LOG FOOTAGE"
          afterLabel="SAHIL'S CINEMATIC COLOR GRADE & RETOUCH"
          videoUrl="https://vviqrirtcmsfh29o.public.blob.vercel-storage.com/insta.mp4"
          posterUrl="/refernce-images-for-portfolio/sahilskamdi-images/IMG20250209131407.jpg.jpeg"
        />

        {/* Process Breakdown Highlights */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="glass-card rounded-2xl p-6 border border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keyframeCyan/10 text-keyframeCyan border border-keyframeCyan/30 mb-4">
              <Palette className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">01. Color Correction & Balance</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Standardizing white balance, exposure curve, shadow detail recovery, and primary color science.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-recordRed/10 text-recordRed border border-recordRed/30 mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">02. Beauty & Skin Frequency</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Softening dermal blemishes, removing glare highlights, and preserving natural skin texture.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradingAmber/10 text-gradingAmber border border-gradingAmber/30 mb-4">
              <Eye className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">03. Cinematic Look & Grain</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Injecting atmospheric teal-and-orange LUT tones, subtle organic 35mm film grain, and vignette depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

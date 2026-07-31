import React from "react";

interface SectionTitleProps {
  chapter: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  chapter,
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start text-left"}`}>
      {/* Chapter Tag */}
      <div className="flex items-center gap-2 rounded-full border border-keyframeCyan/20 bg-keyframeCyan/5 px-3 py-1 text-[11px] font-mono tracking-widest text-keyframeCyan">
        <span className="keyframe-node" />
        <span>{chapter.toUpperCase()}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

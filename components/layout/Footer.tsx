import React from "react";
import { Play, Instagram, Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-background py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-keyframeCyan/10 border border-keyframeCyan/30 text-keyframeCyan">
                <Play className="h-3 w-3 fill-keyframeCyan" />
              </span>
              <span>SAHIL KAMDI</span>
            </a>
            <p className="max-w-xs text-xs text-zinc-400">
              Professional Video Editor & Motion Graphics Editor crafting high-retention content.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:sahilkamdi414@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-surface text-zinc-400 hover:border-keyframeCyan hover:text-keyframeCyan transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-surface text-zinc-400 hover:border-keyframeCyan hover:text-keyframeCyan transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-surface text-zinc-400 hover:border-keyframeCyan hover:text-keyframeCyan transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-surface text-zinc-400 hover:border-recordRed hover:text-recordRed transition-all"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          {/* System Status Tag */}
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-black/60 px-3.5 py-1 font-mono text-[11px] text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-keyframeCyan animate-pulse" />
            <span>SYSTEM: 60 FPS // RENDER READY</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-zinc-900 pt-6 text-center font-mono text-[11px] text-zinc-400">
          © {new Date().getFullYear()} Sahil Anil Kamdi. All Rights Reserved. Crafted for High Retention.
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { fontSans, fontMono } from "../lib/fonts";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import SmoothScrollProvider from "../components/providers/SmoothScrollProvider";
import ScrollProgress from "../components/shared/ScrollProgress";
import CustomCursor from "../components/shared/CustomCursor";
import TimelinePlayhead from "../components/layout/TimelinePlayhead";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Sahil Kamdi | Professional Video Editor & Motion Graphics Specialist",
  description:
    "High-retention video editing and motion graphics for YouTubers, Instagram Reels, Shorts, and Brands. Expert in Adobe Premiere Pro, After Effects, and DaVinci Resolve.",
  keywords: [
    "Video Editor",
    "Motion Graphics Editor",
    "YouTube Video Editor",
    "Instagram Reels Editor",
    "Shorts Editing",
    "Colour Grading",
    "DaVinci Resolve",
    "Sahil Kamdi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-background text-white antialiased selection:bg-keyframeCyan selection:text-black">
        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Top Edge Scroll Progress Bar */}
            <ScrollProgress />

            {/* Adaptive Custom Cursor */}
            <CustomCursor />

            {/* Vertical Timeline Playhead Margin Indicator */}
            <TimelinePlayhead />

            {/* Glassmorphism Navigation Header */}
            <Navbar />

            {/* Main Application Content Container */}
            <main className="relative z-10">{children}</main>

            {/* Studio Footer */}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

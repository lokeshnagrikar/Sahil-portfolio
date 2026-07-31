import { Service, SoftwareTool } from "../types";

export const SERVICES: Service[] = [
  {
    id: "youtube-editing",
    title: "YouTube Video Editing",
    tagline: "Retention-Focused Storytelling",
    description: "Full-service editing designed to maximize Average Percentage Viewed (APV). Includes pattern interrupts, sound design, animated subtitles, zooms, and engaging B-roll overlays.",
    iconName: "Youtube",
    deliverables: ["High-Retention Cut", "Custom Animated Intro/Outro", "Sound Design & Vocal FX", "1080p / 4K Export"],
    recommendedFor: "YouTubers, Educators, Podcasters",
  },
  {
    id: "reels-shorts",
    title: "Instagram Reels & Shorts",
    tagline: "0.5s Scroll-Stopping Vertical Edits",
    description: "Fast-paced 9:16 vertical content engineered for TikTok, Instagram Reels, and YouTube Shorts. Built with kinetic text, pop-up graphics, and rhythm-matched transitions.",
    iconName: "Smartphone",
    deliverables: ["Animated Subtitles", "Pop-up Graphics & Emojis", "Sound FX Layering", "9:16 Vertical Master"],
    recommendedFor: "Influencers, Personal Brands, Coaches",
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics & Animation",
    tagline: "Custom After Effects Keyframing",
    description: "Elevate your videos with bespoke logo reveals, vector graphics, animated lower thirds, screen recording mockups, and visual callouts.",
    iconName: "Layers",
    deliverables: ["Animated Lower Thirds", "Logo Reveal Animations", "Kinetic Typography", "AE Asset Package"],
    recommendedFor: "SaaS Startups, Marketing Agencies, YouTube Channels",
  },
  {
    id: "colour-grading",
    title: "Cinematic Colour Grading",
    tagline: "Professional Film Color Science",
    description: "Transform flat LOG or standard camera footage into rich, moody cinematic visuals. Precise skin tone balancing, shot matching, and custom LUT application.",
    iconName: "Palette",
    deliverables: ["Color Correction", "Cinematic LUT Grade", "Skin Tone Retouching", "Shot-to-Shot Matching"],
    recommendedFor: "Commercial Ads, Music Videos, Documentaries",
  },
  {
    id: "promotional-ads",
    title: "Promotional & Social Ads",
    tagline: "High-Converting Commercial Edits",
    description: "Dynamic ad edits crafted to grab buyer attention in the first 3 seconds, highlight key product benefits, and push high click-through rates.",
    iconName: "Flame",
    deliverables: ["Hook Variations", "Call-to-Action Overlays", "Background Track Sync", "Multi-Ratio Exports"],
    recommendedFor: "E-Commerce Brands, Businesses, Product Launches",
  },
  {
    id: "sound-design",
    title: "Sound Design & Audio Mixing",
    tagline: "Immersive Acoustic Enhancement",
    description: "Clean voiceover noise reduction, spatial audio placement, impact risers, whooshes, and multi-track audio leveling.",
    iconName: "Volume2",
    deliverables: ["Voice Noise Reduction", "Spatial SFX Placement", "BGM Ducking & Leveling", "Master Audio Track"],
    recommendedFor: "All Video Creators & Production Studios",
  },
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    name: "Adobe Premiere Pro",
    proficiency: 95,
    badge: "Primary NLE",
    description: "Timeline multi-track assembly, pacing, sound sync, color balancing, and high-retention cutting.",
  },
  {
    name: "Adobe After Effects",
    proficiency: 90,
    badge: "Motion Graphics",
    description: "Keyframe compositing, 2D/3D tracking, vector animations, kinetic text, and custom VFX.",
  },
  {
    name: "DaVinci Resolve",
    proficiency: 88,
    badge: "Color Grading",
    description: "Node-based color science, LOG film emulation, beauty retouching, and shot matching.",
  },
  {
    name: "Adobe Photoshop",
    proficiency: 85,
    badge: "Thumbnail & Assets",
    description: "High-CTR thumbnail design, cutout masking, color enhancement, and graphic assets.",
  },
  {
    name: "CapCut Pro",
    proficiency: 92,
    badge: "Vertical Reels",
    description: "Rapid vertical reel editing, trending sound sync, auto-captions, and social effects.",
  },
];

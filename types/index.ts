export type ProjectCategory =
  | "All"
  | "YouTube Videos"
  | "Talking Head"
  | "Instagram Reels"
  | "Shorts"
  | "Motion Graphics"
  | "Promotional Ads"
  | "Colour Grading";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  description: string;
  challenge: string;
  solution: string;
  software: string[];
  duration: string;
  results: string;
  videoUrl: string;
  youtubeUrl?: string;
  thumbnailUrl: string;
  featured?: boolean;
  aspectRatio?: "16:9" | "9:16";
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  recommendedFor: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface SoftwareTool {
  name: string;
  proficiency: number;
  badge: string;
  description: string;
}

import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  role?: string;
  description: string;
}

export interface Badge {
  title: string;
  year: string;
  organization: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
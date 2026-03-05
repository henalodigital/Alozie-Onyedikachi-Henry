import { BarChart3, Workflow, BookOpen, Linkedin, Mail, Phone } from "lucide-react";
import { Service, Project, Badge, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "ALOZIE ONYEDIKACHI HENRY",
  headline: "Business Analyst | Training Operations Specialist | Digital Strategist",
  subHeadline: "Bridging the gap between complex data, corporate training, and operational efficiency.",
  email: "henalodigital@gmail.com",
  phone: "+234 808 145 2065",
  copyright: "© 2026 Henalo Digital Enterprise. All rights reserved."
};

export const SERVICES: Service[] = [
  {
    title: "Business Intelligence & Data Visualization",
    description: "Transforming raw data into clear, actionable insights using Power BI, SQL, and Advanced Excel dashboards.",
    icon: BarChart3
  },
  {
    title: "Digital Workflow Automation",
    description: "Streamlining business operations by integrating AI tools (ChatGPT, Gemini, Gamma AI) and designing efficient process maps (BPMN).",
    icon: Workflow
  },
  {
    title: "Corporate Training Systems",
    description: "End-to-end management of Learning Management Systems (LMS), training documentation (CDTS), and virtual logistics for large cohorts.",
    icon: BookOpen
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Digital Tax Automation System",
    description: "Led a BA team to design a tax filing automation framework, mapping \"As-Is\" and \"To-Be\" processes to improve user adoption."
  },
  {
    title: "NCDMB Project 350",
    description: "Coordinated logistics and resource management for a major national capacity-building initiative, ensuring zero downtime for training sessions."
  },
  {
    title: "Science Tech Summit (STS) Publicity",
    description: "Executed a digital media strategy that increased event participation by 35% through targeted student outreach."
  }
];

export const SKILLS = [
  "Microsoft Power BI",
  "SQL",
  "Excel",
  "Google Workspace",
  "Confluence",
  "BPMN",
  "LMS Administration",
  "AI Prompt Engineering"
];

export const BADGES: Badge[] = [
  {
    title: "Man of the Year",
    year: "2023",
    organization: "NASS LASUED",
    icon: "🏆"
  },
  {
    title: "Most Outstanding Intern",
    year: "2025",
    organization: "Hommaston Limited",
    icon: "⭐"
  }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/henalodigital",
    icon: Linkedin
  },
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail
  }
];
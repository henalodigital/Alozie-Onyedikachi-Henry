import { BarChart3, Workflow, BookOpen, Linkedin, Mail, Phone } from "lucide-react";
import { Service, Project, Badge, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "ALOZIE ONYEDIKACHI HENRY",
  headline: "Business Analyst | Corporate Training Specialist | Statistician",
  subHeadline: "Forward-thinking Business Analyst and Training Operations Specialist with expertise in statistics, AI-driven process automation, and digital media strategy. Proven track record of improving efficiency in corporate and educational environments, supporting national-scale capacity-building projects, and translating complex data into actionable insights.",
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
    description: "Designed automation framework for tax filings; developed 'As-Is' and 'To-Be' process maps and functional requirements to improve user adoption and efficiency."
  },
  {
    title: "NCDMB Project 350",
    description: "Core support for NCDMB Project 350, coordinating daily attendance, resource distribution, and facility setup for large trainee cohorts."
  },
  {
    title: "Science Tech Summit (STS) Publicity",
    description: "Led publicity campaigns, coordinating content creation and outreach that increased event participation by 35%."
  }
];

export const SKILLS = [
  "Requirement Gathering",
  "Process Mapping (BPMN)",
  "Data Visualization",
  "Stakeholder Management",
  "Power BI",
  "SQL",
  "LMS Administration",
  "Prompt Engineering"
];

export const BADGES: Badge[] = [
  {
    title: "Most Outstanding Intern",
    year: "2025",
    organization: "Hommaston Limited",
    icon: "⭐"
  },
  {
    title: "Man of the Year",
    year: "2023",
    organization: "NASS LASUED Chapter",
    icon: "🏆"
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
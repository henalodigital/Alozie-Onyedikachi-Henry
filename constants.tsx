import { Monitor, ShieldAlert, Award, FileText, Share2, Compass, Cpu, Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react";
import { Service, Experience, Education, Badge, SocialLink } from "./types";

export interface ProjectHeader {
  title: string;
  subtitle: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "ALOZIE ONYEDIKACHI HENRY",
  headline: "Highly Organized Virtual Assistant | AI Implementation Strategist | Project Coordinator",
  subHeadline: "Highly organized and results-driven Virtual Assistant and AI Implementation Strategist with a strong foundation in digital operations, front-end development, and business analysis. Highly proficient in leveraging AI tools — including ChatGPT, Gemini, Microsoft 365 (M365), and Copilot — to automate complex workflows, streamline administrative processes, design dynamic web environments, and scale office productivity. Experienced in providing comprehensive virtual assistance including calendar management, inbox management, CRM system administration, and spreadsheet maintenance. Skilled at coordinating technical training programs, managing complex stakeholder communications, and leading high-profile technology summits. Recognized for a hands-on approach to problem-solving, delivering rapid, end-to-end digital solutions — from initial UI/UX design to live deployment.",
  email: "henalodigital@gmail.com",
  phone: "+234 808 145 2065, 0902 6450 406",
  linkedin: "linkedin.com/in/henalodigital",
  copyright: "© 2026 Henalo Digital Enterprise. All rights reserved."
};

// 3-Column Core Expertise Cards
export const SERVICES: Service[] = [
  {
    title: "AI Implementation & Automation",
    description: "Leveraging diverse AI toolsets for rapid workflow automation, administrative scaling, and digital project execution.",
    icon: Cpu
  },
  {
    title: "Digital Ops & Coordination",
    description: "Managing complex stakeholder communications, training programs, and executing seamless onboarding processes.",
    icon: Compass
  },
  {
    title: "Front-End Web Deployment",
    description: "Designing dynamic, responsive portfolio websites and deploying end-to-end digital solutions.",
    icon: Monitor
  }
];

// Core Competencies Bullet Tags
export const CORE_COMPETENCIES = [
  "Virtual Assistance & Remote Operations",
  "Calendar, Inbox & CRM Management",
  "AI-Assisted Workflow Automation",
  "Advanced Prompt Engineering & Digital Design",
  "Project Management & Training Coordination",
  "Digital Communication Strategies",
  "AI Tools: ChatGPT, Gemini, M365 & Copilot",
  "Spreadsheet Maintenance & Data Entry",
  "Front-End Web Development (Vercel)",
  "Executive CV & Portfolio Optimization",
  "Business Analysis & Digital Workflows",
  "Time Management & Multitasking"
];

// Timeline Experiences
export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance Digital Consultant / Founder",
    company: "Henalo Digital Enterprise | Lagos",
    date: "Nov 2025 – Present",
    responsibilities: [
      "Develop and deploy professional portfolio websites for industry clients and executives, managing the full development lifecycle from AI-assisted design to live online hosting.",
      "Provide comprehensive virtual assistant services including calendar management, inbox management, CRM updates, and spreadsheet maintenance for remote clients across multiple industries.",
      "Leverage AI tools including ChatGPT, Gemini, and Microsoft 365 (M365) for rapid administrative scaling, high-quality content generation, and seamless digital project execution.",
      "Optimize executive CVs, branding documents, and professional portfolios, successfully helping clients secure actionable career results and improve market visibility."
    ]
  },
  {
    role: "Training Support Staff",
    company: "Hommaston Limited | Lagos",
    date: "Jan 2026 – Present",
    responsibilities: [
      "Conducted a comprehensive department-by-department AI needs assessment for a team of 23 staff members to develop a 90-day strategic rollout plan for digital efficiency using ChatGPT and M365 Copilot.",
      "Manage executive calendars, coordinate meeting schedules, and maintain organized digital filing systems to ensure seamless daily operations.",
      "Handle inbox management and coordinate complex communication between cross-functional teams and users to ensure smooth service delivery and seamless onboarding processes.",
      "Maintain accurate CRM records, operational databases, and system updates, ensuring complete quality assurance and data integrity."
    ]
  },
  {
    role: "Project Support Intern — NCDMB Project 350 Lead",
    company: "Hommaston Limited | Lagos",
    date: "Aug 2025 – Dec 2025",
    responsibilities: [
      "Served as the program lead in Lagos for the 'NCDMB Project 350,' ensuring seamless execution, logistical coordination, and stakeholder alignment.",
      "Assisted in managing complex schedules and ensuring highly effective communication between key executives and program participants.",
      "Maintained organized, data-driven records and tracked participant information to measure and report on program effectiveness.",
      "Awarded 'Most Outstanding Intern (2025)' for exceptional operational support and issue resolution during critical training sessions."
    ]
  },
  {
    role: "Training Intern",
    company: "Hommaston Limited | Lagos",
    date: "Sept 2024 – Dec 2024",
    responsibilities: [
      "Supported daily administrative operations and provided rapid response to participant inquiries during early training cohorts.",
      "Assisted senior training staff with digital documentation and the smooth delivery of organizational learning objectives."
    ]
  },
  {
    role: "Sales Branch Manager",
    company: "Great Lots Nigeria Limited | Lagos",
    date: "Sept 2019 – June 2021",
    responsibilities: [
      "Supervised full-cycle sales operations and coordinated branch staff, successfully managing a branch that generated over ₦10,000,000 in revenue.",
      "Managed escalated customer interactions and implemented robust complaint resolution strategies, ensuring high customer satisfaction and retention.",
      "Maintained comprehensive sales databases and monitored complex inventory levels to guarantee optimal branch performance."
    ]
  },
  {
    role: "Salesperson",
    company: "Topguide Electrical Company | Lagos",
    date: "May 2017 – Jan 2018",
    responsibilities: [
      "Assisted customers in selecting products and provided expert support during purchase decisions.",
      "Handled customer inquiries professionally and ensured positive service experiences, contributing directly to targeted branch sales."
    ]
  }
];

// Technical & Academic Projects
export const PROJECTS = [
  {
    title: "Science Tech Summit (STS) Media Lead",
    role: "Media Team Lead / Coordinator",
    period: "2023 – 2026 (1st - 4th Editions)",
    description: "Developed and executed cross-channel media strategies that successfully drove event growth, scaling audience engagement from 500+ participants in the inaugural edition to over 1,500+ attendees by the fourth consecutive technology summit."
  },
  {
    title: "Digital Tax Workflow Automation",
    role: "Lead Workflow Designer",
    period: "Academic / Certification",
    description: "Created a comprehensive digital tax workflow with an assigned team as part of a rigorous group assignment for a Business Analytics certification."
  },
  {
    title: '"Life After School" Program',
    role: "Organizing Team Member",
    period: "June 2026",
    description: "Served on the organizing team to design, coordinate, and execute a high-impact university-wide career preparation program."
  },
  {
    title: "Educational Planning in Tertiary Institutions",
    role: "Statistical Researcher",
    period: "Academic",
    description: "Developed a statistical framework applying Moving Average methods for accurate student enrollment forecasting."
  }
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    quote: "Alozie's strategic approach to AI needs assessment significantly optimized our departmental workflows. His dedication to training coordination and digital efficiency is unmatched.",
    name: "Senior Management",
    title: "Hommaston Limited"
  },
  {
     quote: "A visionary digital strategist with a unique ability to blend media strategy with community engagement. His work scaling our Science Tech Summit audience was phenomenal.",
     name: "Executive Committee",
     title: "NASS LASUED"
  },
  {
     quote: "Henry delivered a flawless professional portfolio. He took my executive background and translated it into a compelling, highly optimized digital presence.",
     name: "Freelance Client",
     title: "Executive Portfolio Optimization"
  }
];

// Leadership / Community Engagement Additional
export const LEADERSHIP = [
  {
    role: "Special Adviser — Media & Publicity",
    organization: "Nigerian Association of Science Students (NASS), LASUED",
    date: "2024 – 2026",
    details: "Oversaw comprehensive digital communication strategies, coordinating high-impact publicity efforts and digital engagement for association initiatives through the completion of the administrative term."
  },
  {
    role: "Public Relations Officer (PRO)",
    organization: "Nigerian Association of Science Students (NASS), LASUED",
    date: "2022 – 2024",
    details: "Managed critical communication channels between the association and its members, building and maintaining professional relationships with external stakeholders and partners."
  }
];

// Education
export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science (B.Sc.) – Business Administration",
    institution: "University of the People (Online)",
    date: "In Progress"
  },
  {
    degree: "Bachelor of Science (B.Sc.) – Statistics",
    institution: "Lagos State University of Education (LASUED)",
    date: ""
  }
];

// Certifications Sorted
export const CERTIFICATIONS = [
  "Business Analyst — TechCrunch ACTD Certified",
  "Front-End Web Development",
  "Financial Literacy & Digital Skills",
  "Google Digital Marketing Certification",
  "ALX AI Career Essentials",
  "Data Literacy — DataCamp"
];

// Awards (Horizontal Banner displayed below Hero with gold icons)
export const BADGES: Badge[] = [
  {
    title: "Most Outstanding Intern",
    year: "2025",
    organization: "Hommaston Limited",
    icon: "🏆"
  },
  {
    title: "Man of the Year",
    year: "2023",
    organization: "NASS LASUED",
    icon: "⭐"
  }
];

// Socials
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

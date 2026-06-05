import { Headphones, Calendar, MessageSquare, ClipboardList, MonitorSmartphone, Mail, BookOpen, Presentation, Linkedin } from "lucide-react";
import { Service, Project, Experience, Education, Badge, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "ALOZIE ONYEDIKACHI HENRY",
  headline: "Customer Support Representative | Virtual Support Specialist | Administrative Coordinator",
  subHeadline: "Customer-focused support with extensive experience handling inquiries, resolving issues, and managing communication across digital platforms. Organized, responsive, and committed to delivering smooth and positive customer experiences while supporting business operations.",
  email: "henalodigital@gmail.com",
  phone: "+234 808 145 2065",
  copyright: "© 2026 Henalo Digital Enterprise. All rights reserved."
};

export const SERVICES: Service[] = [
  {
    title: "Customer Support (WhatsApp, Phone, Email)",
    description: "Responding to user inquiries via digital platforms, ensuring timely and professional communication.",
    icon: Headphones
  },
  {
    title: "Complaint Resolution & Escalation",
    description: "Assisting users with onboarding, account access, and comprehensive issue resolution.",
    icon: MessageSquare
  },
  {
    title: "Administrative Coordination",
    description: "Maintaining accurate records, coordinating processes, and tracking information for program effectiveness.",
    icon: ClipboardList
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "TRAINING SUPPORT STAFF",
    company: "Hommaston Limited | Lagos",
    date: "Jan 2026 – Present",
    responsibilities: [
      "Respond to user inquiries via WhatsApp, email, and digital platforms, ensuring timely and professional communication",
      "Assist users with onboarding, account access, and comprehensive issue resolution",
      "Maintain accurate records of interactions and system updates for quality assurance",
      "Coordinate communication between teams and users to ensure smooth service delivery"
    ]
  },
  {
    role: "TRAINING INTERN (PROJECT SUPPORT)",
    company: "Hommaston Limited | Lagos",
    date: "Aug 2025 – Dec 2025",
    responsibilities: [
      "Supported participants by addressing inquiries and providing assistance during training sessions",
      "Assisted in coordinating schedules and ensuring effective communication between stakeholders",
      "Maintained organized records and tracked participant information for program effectiveness"
    ]
  },
  {
    role: "SPECIAL ADVISER – MEDIA & PUBLICITY",
    company: "NASS, LASUED",
    date: "2024 – Present",
    responsibilities: [
      "Oversee digital communication strategies and ensure timely dissemination of information",
      "Support engagement and communication across student platforms and social media channels"
    ]
  },
  {
    role: "SALES BRANCH MANAGER",
    company: "Great Lots Nigeria Limited",
    date: "Sept 2019 – June 2021",
    responsibilities: [
      "Managed customer interactions, resolved complaints, and ensured customer satisfaction",
      "Supervised sales operations and coordinated staff to meet targets and objectives",
      "Maintained comprehensive sales records and monitored inventory for optimal performance"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Statistics",
    institution: "LAGOS STATE UNIVERSITY OF EDUCATION (LASUED)",
    date: "In Progress"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "UNIVERSITY OF THE PEOPLE (ONLINE)",
    date: "In Progress"
  }
];

export const CERTIFICATIONS = [
  "Google Digital Marketing Certification",
  "ALX AI Career Essentials",
  "Data Literacy — DataCamp"
];

export const SKILLS = [
  "Customer Support",
  "Order Processing & Follow-Up",
  "Complaint Resolution",
  "Communication & Active Listening",
  "Data Entry & Record Keeping",
  "Microsoft Office & Google Workspace",
  "Time Management & Multitasking",
  "Remote Work & Team Collaboration",
  "Digital Communication"
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
    organization: "NASS LASUED",
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
import { 
  BarChart3, 
  Workflow, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  FileSpreadsheet, 
  Users, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Award, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Sparkles,
  Compass,
  Laptop,
  FileText,
  Clock,
  ShieldCheck,
  Building2,
  Calendar,
  Phone,
  Send,
  ArrowRight
} from "lucide-react";
import { 
  CaseStudy, 
  ExperienceItem, 
  SkillCategory, 
  HenaloService, 
  ProcessStep, 
  EducationItem, 
  CertificationItem, 
  AwardItem 
} from "./types";

export const PERSONAL_INFO = {
  name: "Alozie Onyedikachi Henry",
  positioning: "Business Operations | Programme Coordination | Data & Digital Solutions",
  heroHeadline: "Turning business challenges, data and digital tools into practical solutions.",
  heroIntro: "I work across business operations, programme coordination, data analysis and digital solutions, helping teams organise processes, make informed decisions and deliver better outcomes.",
  summaryNarrative: [
    "I combine a background in Statistics with experience in training operations, programme coordination, stakeholder engagement, business administration, data analysis, website development, digital consulting, and AI-enabled productivity.",
    "My experience includes full-time training support at Hommaston Limited, an AI needs assessment across a 23-member workforce, programme coordination, digital consulting through Henalo Digital Enterprise, and leadership in student communications and events.",
    "My work focuses on solving practical problems through structured processes, data, digital tools, and effective communication."
  ],
  email: "henalodigital@gmail.com",
  phone: "+234 808 145 2065",
  whatsappNumber: "2348081452065",
  location: "Lagos, Nigeria",
  linkedin: "https://linkedin.com/in/henryalozie",
  liveUrl: "https://alozie-onyedikachi-henry.vercel.app/",
  cvUrl: "/Alozie_Onyedikachi_Henry_CV.pdf",
  profileImage: "Confident Black Suit Studio Portrait.png",
  profileImageFallback: "/profile.jpg",
  copyright: "© 2026 Alozie Onyedikachi Henry · Henalo Digital Enterprise"
};

export const KEY_METRICS = [
  {
    value: "100+",
    label: "Training Sessions Supported",
    context: "Participant onboarding, LMS updates, assessments & operational coordination at Hommaston Limited"
  },
  {
    value: "23",
    label: "Workforce AI Assessment",
    context: "Conducted department-level needs audit & designed 90-day productivity adoption roadmap"
  },
  {
    value: "3,000+",
    label: "Student Community Reached",
    context: "Public relations, constitution development & communications governance at NASS LASUED"
  },
  {
    value: "3x",
    label: "Summit Audience Scaled",
    context: "Grew Science Tech Summit attendance from 500+ to 1,500+ across four annual editions"
  },
  {
    value: "5+",
    label: "Websites Deployed",
    context: "Designed, developed and deployed responsive digital presences via Henalo Digital"
  },
  {
    value: "2025",
    label: "Most Outstanding Intern",
    context: "Honoured by Hommaston Limited before transitioning into full-time Training Support Staff"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "enrolment-forecasting",
    title: "Educational Planning & Enrolment Forecasting",
    subtitle: "Statistical Analysis & Time-Series Projections for Tertiary Resource Allocation",
    category: "Data & Analytics",
    organization: "Statistics Research Project · LASUED",
    period: "Academic Research Project",
    featured: true,
    evidenceType: "Data Model & Forecast",
    overview: "Statistical investigation of historical tertiary institution student enrolment data to model admission patterns and project future matriculation cohorts for evidence-based capacity planning.",
    problem: "Educational administrators faced difficulty anticipating annual department-level admission quotas, risking lecture hall congestion, skewed faculty-to-student ratios, and budgeting misalignments.",
    role: "Lead Statistical Researcher & Data Analyst",
    approach: [
      "Gathered and cleaned historical multi-year enrolment registers across academic sessions.",
      "Conducted exploratory data analysis (EDA) and computed descriptive indicators using Microsoft Excel and SPSS.",
      "Applied the Simple Moving Average (SMA) method to smooth seasonal volatility and model long-term enrolment trajectory.",
      "Calculated mean absolute deviations (MAD) to evaluate forecast stability across projection intervals.",
      "Prepared clear comparative charts and summary briefing tables for academic decision-makers."
    ],
    toolsAndMethods: [
      "Microsoft Excel",
      "SPSS",
      "Simple Moving Average (SMA)",
      "Time-Series Trend Analysis",
      "Descriptive & Inferential Statistics",
      "Data Visualisation & Reporting"
    ],
    deliverables: [
      "Cleaned institutional enrolment dataset and time-series model.",
      "Dynamic Excel forecasting model with configurable moving average windows.",
      "Visual trend distribution charts and residual deviation analysis.",
      "Formal statistical research paper with recommendations for quota planning."
    ],
    verifiedOutcome: "Demonstrated that an SMA framework reliably models enrollment trends, providing educational planners with an objective, data-backed forecasting tool for lecture room capacity and resource planning.",
    keyMetrics: [
      { label: "Forecasting Technique", value: "Simple Moving Average (SMA)" },
      { label: "Data Scope", value: "Multi-Year Enrolment Records" },
      { label: "Analysis Platform", value: "Excel & SPSS" }
    ]
  },
  {
    id: "ai-needs-assessment",
    title: "AI Needs Assessment & 90-Day Adoption Roadmap",
    subtitle: "Internal Productivity Audit Across a 23-Member Workforce at Hommaston Limited",
    category: "AI & Workflow",
    organization: "Hommaston Limited",
    period: "2026",
    featured: true,
    evidenceType: "Roadmap & Audit Matrix",
    overview: "Conducted an internal workplace technology audit across 23 staff members at Hommaston Limited to identify repetitive operational bottlenecks and build a phased 90-day AI enablement roadmap.",
    problem: "Staff spent substantial manual hours each week on routine tasks such as formatting training schedules, drafting participant correspondence, consolidating learner scorecards, and preparing status briefs.",
    role: "AI Implementation Strategist & Training Support Staff",
    approach: [
      "Designed a structured questionnaire and conducted interviews across corporate departments to catalog recurring friction points.",
      "Categorised tasks by automation feasibility, risk profile, and potential time savings.",
      "Distinguished four core phases: Needs Assessment, Recommendations, Pilot Implementation, and Review.",
      "Evaluated approved enterprise tools including ChatGPT, Google Gemini, and Microsoft Copilot.",
      "Synthesised findings into a 90-day adoption roadmap with role-specific prompt templates and data governance guidelines."
    ],
    toolsAndMethods: [
      "Workflow Process Mapping",
      "Needs Assessment Surveys",
      "ChatGPT & Google Gemini",
      "Microsoft Copilot",
      "M365 & Google Workspace",
      "Prompt Engineering Architecture"
    ],
    deliverables: [
      "Comprehensive 23-member departmental workflow audit matrix.",
      "90-day phased AI implementation roadmap (30-day pilot, 60-day expansion, 90-day review).",
      "Standard operating guidance on prompt construction and verification of AI outputs.",
      "Executive presentation delivered to senior leadership outlining recommended tools."
    ],
    verifiedOutcome: "Completed the formal needs assessment across all 23 team members, established baseline productivity friction points, and contributed a structured 90-day roadmap adopted by management for ongoing digital modernisation.",
    keyMetrics: [
      { label: "Audited Workforce", value: "23 Staff Members" },
      { label: "Rollout Horizon", value: "90-Day Phased Plan" },
      { label: "Scope", value: "Cross-Departmental" }
    ]
  },
  {
    id: "training-operations-coordination",
    title: "Training Operations & Programme Coordination",
    subtitle: "End-to-End Delivery of NCDMB Project 350 & 100+ Professional Training Cohorts",
    category: "Training Operations",
    organization: "Hommaston Limited",
    period: "2024 – Present",
    featured: true,
    evidenceType: "Operational Tracker & LMS",
    overview: "Comprehensive coordination of corporate technical training programmes, managing participant onboarding, daily attendance tracking, LMS administration, assessment delivery, and reporting.",
    problem: "High-stakes technical and regulatory programmes (including national capacity development initiatives) require strict compliance tracking, flawless participant communication, and timely attendance reporting without administrative gaps.",
    role: "Training Support Staff (Present) · Lagos Training Coordinator (Project 350)",
    approach: [
      "Established robust daily attendance logs and participant verification rosters across training centers.",
      "Configured and administered LMS platforms and Testmoz testing environments for seamless pre- and post-assessments.",
      "Coordinated daily logistics with facilitators, venue managers, and corporate stakeholders in Lagos and partner states.",
      "Drafted professional status reports, certificates of completion rosters, and participant evaluation summaries.",
      "Introduced the Jobberman-hosted Mastercard Foundation Associates Programme opportunity to management, securing Hommaston's participation and Associate allocation."
    ],
    toolsAndMethods: [
      "LMS Administration",
      "Testmoz Assessment Platform",
      "Microsoft 365 (Excel, Word, PowerPoint)",
      "Google Workspace (Docs, Sheets, Drive)",
      "Stakeholder Communications",
      "Operational Tracker Design"
    ],
    deliverables: [
      "Standardised onboarding checklist and communication templates.",
      "Centralised attendance and assessment tracking spreadsheets.",
      "End-of-cohort performance analytics and management briefing reports.",
      "Coordinated 3–5 intensive training cohorts for NCDMB Project 350."
    ],
    verifiedOutcome: "Successfully supported the smooth execution of 100+ training sessions and programmes. Honoured with the 'Most Outstanding Intern (2025)' award before transitioning into full-time Training Support Staff.",
    keyMetrics: [
      { label: "Sessions Supported", value: "100+ Sessions" },
      { label: "Key Flagship Project", value: "NCDMB Project 350" },
      { label: "Recognition", value: "Most Outstanding Intern" }
    ]
  },
  {
    id: "henalo-website-development",
    title: "Website Development & Digital Platforms",
    subtitle: "Design, Development and Deployment of 5+ Modern Web Solutions for SMEs",
    category: "Web Development",
    organization: "Henalo Digital Enterprise",
    period: "2025 – Present",
    featured: true,
    evidenceType: "Live Web Architecture",
    overview: "End-to-end conception, wireframing, frontend engineering, and deployment of modern, responsive websites for individual professionals, consulting businesses, and growing SMEs.",
    problem: "SMEs and emerging professionals often struggle with outdated, unresponsive websites or cookie-cutter templates that fail to convey credibility, lack clear calls to action, and load slowly on mobile networks.",
    role: "Founder & Lead Digital Developer",
    approach: [
      "Conducted discovery sessions to extract client objectives, brand personality, and core target audiences.",
      "Created information architectures and content wireframes in Figma to align visual hierarchy with business conversion goals.",
      "Built responsive, mobile-first frontend interfaces using modern web technologies with clean typographic rhythm and fast loading times.",
      "Configured custom domains, SSL certificates, search metadata, and contact inquiry routing.",
      "Trained clients on basic content updating and digital maintenance."
    ],
    toolsAndMethods: [
      "React & TypeScript",
      "Tailwind CSS",
      "Figma & Canva",
      "HTML5 / Semantic Web",
      "Git & GitHub",
      "DNS & Cloud Deployment"
    ],
    deliverables: [
      "5+ live, fully responsive websites with sub-second page performance.",
      "Custom brand typography systems and curated visual assets.",
      "Accessible inquiry forms with direct email and WhatsApp conversion pipelines.",
      "Responsive portfolio and corporate profile templates."
    ],
    verifiedOutcome: "Successfully launched 5+ production web presences from scratch, establishing credible digital footprints that allow clients to receive client inquiries and showcase their services.",
    keyMetrics: [
      { label: "Websites Deployed", value: "5+ Live Sites" },
      { label: "Design Approach", value: "Mobile-First & Responsive" },
      { label: "Turnaround", value: "Concept to Live Hosting" }
    ]
  },
  {
    id: "feedcore-business-digitisation",
    title: "Business Digitisation & Operational Setup",
    subtitle: "Establishing Operational Foundations, Brand Identity & Spreadsheets for FeedCore Agro Limited",
    category: "Business Digitisation",
    organization: "FeedCore Agro Limited",
    period: "2026 – Present",
    featured: true,
    evidenceType: "Brand & Ops Framework",
    overview: "Structured the initial business documentation, brand identity assets, and operational inventory/sales recording systems to launch and digitise operations for FeedCore Agro Limited.",
    problem: "As an emerging agribusiness, FeedCore required official documentation for CAC incorporation, brand collateral for market visibility, and structured recordkeeping systems to track purchases, sales, and inventory without expensive proprietary software.",
    role: "Business Operations & Digital Development Specialist",
    approach: [
      "Supported official CAC incorporation processes and structured foundational business documents.",
      "Designed complete brand identity assets: primary logos, flyers, banners, company signboards, and promotional graphics.",
      "Configured and verified the company's Google Business Profile to capture local search visibility.",
      "Structured lightweight, custom spreadsheet models for daily inventory logging, purchasing audits, and customer transaction records.",
      "Created customer-facing invoice templates and order requisition forms."
    ],
    toolsAndMethods: [
      "Corporate Documentation & CAC Filing Support",
      "Brand Identity Design (Canva & Graphic Tools)",
      "Google Business Profile Setup",
      "Microsoft Excel Spreadsheet Modeling",
      "Inventory & Sales Tracker Architecture"
    ],
    deliverables: [
      "Corporate filing documentation package and business templates.",
      "Full brand asset kit (logo variants, flyers, signage, social banners).",
      "Operational spreadsheet models for inventory, purchasing, and sales reconciliation.",
      "Published Google Business Profile and online presence."
    ],
    verifiedOutcome: "Enabled an orderly, friction-free business launch with documented operational processes, active local search discovery, and structured financial/inventory recording from day one.",
    keyMetrics: [
      { label: "Foundational Setup", value: "CAC & Documentation" },
      { label: "Search Presence", value: "Google Business Profile" },
      { label: "Operations Model", value: "Spreadsheet Accounting" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Training Support Staff — Full-Time",
    organization: "Hommaston Limited",
    period: "January 2026 – Present",
    location: "Lagos, Nigeria",
    category: "Corporate Experience",
    responsibilities: [
      "Coordinate training operations, including participant onboarding, scheduling, LMS administration, assessments, attendance, documentation, reporting and post-training support.",
      "Contribute to the delivery of more than 100 training sessions or programmes through participant onboarding, learning-platform administration, assessments and operational coordination.",
      "Prepare programme trackers, reports, presentations, learning materials and business documents using Microsoft 365 and Google Workspace.",
      "Deliver Microsoft Office and digital productivity training; facilitate introductory UI/UX sessions covering design principles, user experience concepts, research basics and digital design tools.",
      "Conducted an AI needs assessment across a 23-member workforce and contributed to a 90-day AI and productivity adoption roadmap.",
      "Support AI adoption and workflow improvement through practical use of ChatGPT, Google Gemini, Microsoft Copilot, and related productivity tools.",
      "Introduced the Jobberman-hosted Mastercard Foundation Associates Programme opportunity to management, contributing to Hommaston's participation and Associate allocation."
    ],
    verifiedHighlight: "Awarded 'Most Outstanding Intern (2025)' before transitioning into full-time employment."
  },
  {
    role: "Project Support Intern / Lagos Training Coordinator — NCDMB Project 350",
    organization: "Hommaston Limited",
    period: "August 2025 – December 2025",
    location: "Lagos, Nigeria",
    category: "Corporate Experience",
    responsibilities: [
      "Coordinated approximately 3–5 training programmes, managing participant and facilitator communication, logistics, attendance, schedules and daily training activities.",
      "Maintained programme trackers, records, documentation and reports to support project monitoring and accountability.",
      "Provided training coordination support for programmes delivered in Lagos and other states, helping resolve operational issues and keep activities on schedule."
    ],
    verifiedHighlight: "Coordinated 3–5 training programmes under the Nigerian Content Development and Monitoring Board (NCDMB) Project 350."
  },
  {
    role: "Training Intern",
    organization: "Hommaston Limited",
    period: "September 2024 – December 2024",
    location: "Lagos, Nigeria",
    category: "Corporate Experience",
    responsibilities: [
      "Administered learner onboarding, participant communication, attendance records, assessments, LMS updates and training logistics.",
      "Prepared digital documentation and supported facilitators and senior training staff in day-to-day programme delivery."
    ]
  },
  {
    role: "Founder & Freelance Digital Consultant",
    organization: "Henalo Digital Enterprise",
    period: "2025 – Present",
    location: "Lagos, Nigeria",
    category: "Henalo & Consulting",
    responsibilities: [
      "Designed and deployed 5+ websites for individuals and businesses, translating client requirements into digital solutions from concept through implementation.",
      "Created ATS-focused CVs, professional profiles, portfolios and career documents for clients.",
      "Produced brand identities and marketing assets — including logos, flyers, banners and business documents — for SMEs.",
      "Provide digital consulting across website development, branding, AI productivity, business documentation and workflow improvement.",
      "Build AI-assisted productivity workflows using ChatGPT, Google Gemini, Microsoft Copilot and Google Workspace."
    ],
    verifiedHighlight: "5+ deployed client websites and end-to-end digital branding deliverables."
  },
  {
    role: "Business Operations & Digital Development",
    organization: "FeedCore Agro Limited",
    period: "2026 – Present",
    location: "Lagos, Nigeria",
    category: "Henalo & Consulting",
    responsibilities: [
      "Supported CAC incorporation and business documentation, helping establish the company's operational and digital foundations.",
      "Developed brand identity and marketing materials, including logos, flyers, banners, signboards and promotional content.",
      "Set up the company's Google Business Profile and online business presence; created customer-facing materials and digital templates.",
      "Maintain and organise inventory, purchasing, sales and administrative records using spreadsheets and business documents."
    ]
  },
  {
    role: "Branch Sales Manager",
    organization: "Great Lots Nigeria Limited",
    period: "September 2019 – June 2021",
    location: "Lagos, Nigeria",
    category: "Corporate Experience",
    responsibilities: [
      "Managed day-to-day branch sales activities, customer enquiries and complaints, and customer relationship follow-up.",
      "Coordinated branch operations, monitored inventory and maintained sales and operational records.",
      "Worked with staff to support sales objectives and resolve customer and business issues."
    ]
  },
  {
    role: "Salesperson",
    organization: "Topguide Electrical Company",
    period: "May 2017 – January 2018",
    location: "Lagos, Nigeria",
    category: "Corporate Experience",
    responsibilities: [
      "Guided customers in selecting electrical products based on requirements and budget, explaining product features and specifications.",
      "Handled customer enquiries, supported purchasing decisions and maintained positive customer relationships."
    ]
  },
  {
    role: "Special Adviser — Publicity & Media",
    organization: "NASS LASUED (Nigerian Association of Science Students)",
    period: "2025 – 2026",
    location: "Lagos, Nigeria",
    category: "Leadership & Community",
    responsibilities: [
      "Advised executive leadership on publicity, branding, media and communication strategy for association programmes and partnerships."
    ]
  },
  {
    role: "Pioneer Public Relations Officer (PRO)",
    organization: "NASS LASUED",
    period: "2023 – 2025",
    location: "Lagos, Nigeria",
    category: "Leadership & Community",
    responsibilities: [
      "Helped develop NASS LASUED's first constitution and managed communications for a community of 3,000+ students.",
      "Coordinated publicity campaigns, social media communication and stakeholder-facing information."
    ],
    verifiedHighlight: "Served a student community of 3,000+ members and co-authored foundational constitution."
  },
  {
    role: "Media Team Lead",
    organization: "Science Tech Summit (STS), LASUED",
    period: "2023 – 2026 (1st – 4th Edition)",
    location: "Lagos, Nigeria",
    category: "Leadership & Community",
    responsibilities: [
      "Led content creation, event publicity, social media communication and media coverage across four consecutive summit editions.",
      "Contributed to audience growth from 500+ participants to 1,500+ attendees across summit editions."
    ],
    verifiedHighlight: "Grew summit audience from 500+ to 1,500+ attendees across 4 editions."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Statistics & Analytics",
    description: "Statistical modeling, time-series projections, exploratory analysis, and institutional reporting.",
    skills: [
      { name: "Microsoft Excel", level: "Core Strength", context: "Advanced formulas, pivot tables, moving averages, forecasting models, and executive dashboards." },
      { name: "SPSS & R", level: "Working Knowledge", context: "Descriptive & inferential statistical analysis, hypothesis testing, survey dataset processing." },
      { name: "Statistical Forecasting (SMA)", level: "Core Strength", context: "Time-series trend smoothing, Simple Moving Average projection, error metrics." },
      { name: "Descriptive & Inferential Statistics", level: "Core Strength", context: "Distribution analysis, sample evaluation, correlation, statistical significance." },
      { name: "Survey Analysis & Research Methodology", level: "Core Strength", context: "Instrument design, survey administration, data cleaning, empirical findings reporting." },
      { name: "Data Visualisation & Power BI", level: "Foundational / Basic", context: "Visual reporting, chart design, KPI dashboarding, data storytelling basics." }
    ]
  },
  {
    name: "Business & Operations",
    description: "Structured programme delivery, training logistics, administrative governance, and stakeholder alignment.",
    skills: [
      { name: "Programme & Project Coordination", level: "Core Strength", context: "Multi-cohort schedules, facilitator coordination, participant tracking, milestone governance." },
      { name: "Training Operations & Logistics", level: "Core Strength", context: "End-to-end training delivery across 100+ sessions, venue arrangements, resource distribution." },
      { name: "Stakeholder Engagement & Communication", level: "Core Strength", context: "Executive correspondence, participant advisory, cross-departmental coordination." },
      { name: "LMS Platforms & Testmoz", level: "Core Strength", context: "Learner onboarding, course administration, pre/post-assessment scoring, attendance logs." },
      { name: "Administrative & Process Documentation", level: "Core Strength", context: "Standard operating procedures (SOPs), meeting documentation, progress tracking." },
      { name: "Customer Service & Conflict Resolution", level: "Core Strength", context: "Participant query triage, customer relationship maintenance, complaint escalation management." }
    ]
  },
  {
    name: "Digital & Productivity",
    description: "Enterprise software, cloud productivity ecosystems, and modern AI enablement.",
    skills: [
      { name: "Microsoft 365 (Word, Excel, PowerPoint)", level: "Core Strength", context: "Executive report formatting, presentation decks, data spreadsheets, collaborative work." },
      { name: "Google Workspace (Docs, Sheets, Drive, Forms)", level: "Core Strength", context: "Cloud documentation, survey forms, centralized filing repositories, multi-user tracking." },
      { name: "ChatGPT, Google Gemini & Copilot", level: "Core Strength", context: "Prompt engineering, workflow friction elimination, research synthesis, template drafting." },
      { name: "AI Needs Assessment & Roadmapping", level: "Working Knowledge", context: "Workforce readiness audits, 90-day phased tool adoption plans, productivity metrics." },
      { name: "Digital Record Management", level: "Core Strength", context: "Structured digital archives, naming taxonomy, audit-ready administrative records." }
    ]
  },
  {
    name: "Design & Development",
    description: "Web development, brand identity design, wireframing, and digital marketing collateral.",
    skills: [
      { name: "Website Design & Deployment", level: "Core Strength", context: "5+ deployed responsive websites, modern frontend markup, custom domain configuration." },
      { name: "Figma & Canva", level: "Working Knowledge", context: "Wireframes, UI layouts, brand identities, marketing flyers, presentation assets." },
      { name: "UI/UX Fundamentals", level: "Working Knowledge", context: "Information architecture, visual hierarchy, user journey mapping, accessible design." },
      { name: "Branding & Marketing Collateral", level: "Core Strength", context: "Logos, brand stationery, social media banners, event posters, signage." },
      { name: "HTML5, Tailwind CSS & Modern Web", level: "Working Knowledge", context: "Clean semantic markup, utility-first responsive styling, component architecture." }
    ]
  }
];

export const HENALO_SERVICES: HenaloService[] = [
  {
    id: "web-development",
    title: "Website Design & Deployment",
    tagline: "Modern, responsive, fast-loading websites built to convert visitors into clients.",
    description: "End-to-end design and deployment of custom websites for independent consultants, professional practices, and SMEs. Clean visual hierarchy, mobile optimization, domain configuration, and clear calls to action.",
    deliverables: [
      "Custom responsive website layout",
      "Mobile and tablet optimisation",
      "Domain and SSL setup assistance",
      "Contact forms & WhatsApp direct routing",
      "Search engine metadata & social share tags"
    ],
    sampleWorkSummary: "5+ live websites deployed with sub-second performance and mobile-first responsive architecture."
  },
  {
    id: "business-digitisation",
    title: "Business Digitisation & Operational Setup",
    tagline: "Helping traditional businesses establish digital foundations and orderly systems.",
    description: "Structuring the digital presence and operational templates for new and growing companies. From Google Business Profile verification to digital invoice formats, filing structures, and CAC documentation support.",
    deliverables: [
      "Google Business Profile setup & verification",
      "Digital customer invoice & order templates",
      "Centralised cloud drive folder architecture",
      "CAC documentation & incorporation support",
      "Digital operational baseline guidance"
    ],
    sampleWorkSummary: "Supported FeedCore Agro Limited with corporate documentation, operational spreadsheets, and Google presence."
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Marketing Collateral",
    tagline: "Cohesive visual branding that establishes immediate professional credibility.",
    description: "Design of memorable brand assets including primary logos, social media banners, promotional flyers, presentation decks, and physical signage formatted for print and digital distribution.",
    deliverables: [
      "Logo suite (primary, monochrome, icon marks)",
      "Typography and color palette guideline",
      "Promotional flyers and social media banners",
      "Business cards, letterheads, and signage files",
      "Custom presentation pitch deck templates"
    ],
    sampleWorkSummary: "Crafted brand identity suites for agricultural ventures, event summits, and independent consulting practices."
  },
  {
    id: "ai-productivity",
    title: "AI Productivity & Workflow Improvement",
    tagline: "Empowering teams to leverage practical AI tools to eliminate repetitive administrative friction.",
    description: "Custom assessments and hands-on guidance on deploying tools like ChatGPT, Google Gemini, and Microsoft Copilot to automate drafting, summarise dense materials, format spreadsheets, and accelerate research.",
    deliverables: [
      "Departmental workflow friction audit",
      "Curated, role-specific prompt templates",
      "Recommended tool selection & safety guidance",
      "Hands-on team training & productivity walkthroughs",
      "30/60/90-day incremental adoption milestones"
    ],
    sampleWorkSummary: "Conducted 23-person workforce AI needs assessment and authored a 90-day roadmap at Hommaston Limited."
  },
  {
    id: "career-documentation",
    title: "Career & Business Documentation",
    tagline: "High-impact ATS-optimized CVs, executive bios, and digital portfolio profiles.",
    description: "Comprehensive refinement of professional profiles, modern resume formatting optimized for Applicant Tracking Systems (ATS), executive biographies, and portfolio architecture that articulates real achievements.",
    deliverables: [
      "ATS-compliant keyword-structured CV / Resume",
      "Executive LinkedIn profile optimization",
      "Professional biographical narrative",
      "Portfolio case study structuring",
      "Cover letter and inquiry email templates"
    ],
    sampleWorkSummary: "Successfully authored and structured career profiles for corporate professionals, interns, and executives."
  }
];

export const HENALO_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Needs Diagnostic",
    description: "We review your current challenges, target audience, brand assets, and project requirements to define clear, measurable deliverables."
  },
  {
    number: "02",
    title: "Architecture & Visual Prototype",
    description: "We map the content structure, design wireframes, and establish the visual direction before writing code or producing final collateral."
  },
  {
    number: "03",
    title: "Implementation & Refinement",
    description: "We develop the solution—whether building the website, configuring spreadsheets, or designing brand kits—with iterative reviews."
  },
  {
    number: "04",
    title: "Deployment & Operational Handoff",
    description: "We launch your project, verify all links and forms, configure domains, and hand over complete assets with clear user guidance."
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Science (B.Sc.) in Statistics",
    institution: "Lagos State University of Education (LASUED)",
    date: "Completed",
    status: "Graduated",
    details: "Specialised in statistical research methodology, time-series forecasting, probability theory, data analysis, and survey sampling."
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Business Administration",
    institution: "University of the People (Online)",
    date: "In Progress",
    status: "Currently Enrolled",
    details: "Focusing on organizational management, operational strategy, business ethics, accounting principles, and managerial economics."
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Certified Business Analyst (ACTD)",
    issuer: "TechCrush",
    credentialNote: "Professional accreditation in business analysis, requirements elicitation, workflow mapping, and process modeling."
  },
  {
    title: "AI Career Essentials (AICE)",
    issuer: "ALX Africa",
    credentialNote: "Practical artificial intelligence enablement, advanced prompt engineering, and digital workplace productivity."
  },
  {
    title: "Google AI Prompting Essentials",
    issuer: "Google",
    credentialNote: "Structured prompting techniques, iterative context refinement, and enterprise productivity with Google AI models."
  },
  {
    title: "Google Digital Marketing Certification",
    issuer: "Google",
    credentialNote: "Foundations of search engine optimization, content strategy, email marketing, analytics, and digital engagement."
  },
  {
    title: "Data Literacy Certification",
    issuer: "DataCamp",
    credentialNote: "Data interpretation, descriptive statistics, visual communication, and data-driven business decision making."
  }
];

export const AWARDS_LIST: AwardItem[] = [
  {
    title: "Most Outstanding Intern",
    organization: "Hommaston Limited",
    year: "2025",
    context: "Awarded for exceptional performance in training operations coordination, participant support, and accountability prior to transition into full-time staff."
  },
  {
    title: "Man of the Year Award",
    organization: "Nigerian Association of Science Students (NASS), LASUED",
    year: "2023",
    context: "Honoured by the student body for pioneering leadership, student community communications, and association constitutional development."
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Henry has demonstrated exceptional dedication and structured execution in our training operations. His leadership in conducting our 23-member workforce AI needs assessment and coordinating multiple training cohorts has consistently maintained high standards.",
    author: "Senior Management",
    role: "Hommaston Limited",
    context: "Training Operations & Enterprise Modernisation"
  },
  {
    quote: "As our Media Team Lead across four editions of the Science Tech Summit, Henry was instrumental in scaling our attendance from 500 participants to over 1,500. His ability to organise communications and rally communities is exemplary.",
    author: "Organizing Committee",
    role: "Science Tech Summit (STS), LASUED",
    context: "Summit Media & Communications Leadership"
  },
  {
    quote: "Working with Henalo Digital gave our business an immediate, credible digital presence. The website is clean, loads rapidly, and our clients have commented on how professional and easy to navigate it is.",
    author: "Business Client",
    role: "Henalo Digital Enterprise",
    context: "Website Design & Digital Setup"
  }
];

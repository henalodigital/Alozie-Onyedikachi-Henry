const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 40 });
doc.pipe(fs.createWriteStream('public/Alozie_Onyedikachi_Henry_CV.pdf'));

// Header Area
doc.fontSize(20).font('Helvetica-Bold').text('ALOZIE ONYEDIKACHI HENRY', { align: 'center' });
doc.fontSize(11).font('Helvetica-Bold').text('Business Operations • Programme Coordination • Data & Digital Solutions', { align: 'center' });
doc.moveDown(0.4);
doc.fontSize(9).font('Helvetica').text('Lagos, Nigeria | +234 808 145 2065 | henalodigital@gmail.com | https://linkedin.com/in/henryalozie', { align: 'center' });
doc.fontSize(8.5).font('Helvetica-Oblique').text('alozie-onyedikachi-henry.vercel.app', { align: 'center' });
doc.moveDown();

// Professional Summary
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9).font('Helvetica').text(
  'Business operations and programme coordination professional with experience in training delivery, stakeholder engagement, customer service, business administration, data analysis and digital consulting. Has contributed to more than 100 training sessions or programmes, with experience in participant onboarding, LMS administration, assessments, logistics, reporting and operational documentation.\n\nCombines a Statistics background with hands-on skills in Microsoft Excel, Google Workspace, Microsoft 365, SPSS, R, Power BI (basic), AI productivity tools and website deployment. Recognised as Most Outstanding Intern in 2025 before transitioning to full-time employment.',
  { align: 'justify', lineGap: 2 }
);
doc.moveDown();

// Core Competencies
doc.fontSize(12).font('Helvetica-Bold').text('CORE COMPETENCIES', { underline: true });
doc.moveDown(0.3);
const competencies = [
  '• Business Operations',
  '• Programme & Project Coordination',
  '• Training Operations',
  '• Stakeholder Engagement',
  '• Customer Service',
  '• Administrative Coordination',
  '• Statistical Analysis',
  '• Data Reporting & Visualisation',
  '• Research & Survey Analysis',
  '• LMS Administration',
  '• AI Productivity & Workflow Improvement',
  '• Digital Consulting',
  '• Social Media & Community Management',
  '• Website Design & Deployment'
];
doc.fontSize(8.5).font('Helvetica');
for (let i = 0; i < competencies.length; i += 2) {
  const comp1 = (competencies[i] || '').padEnd(46, ' ');
  const comp2 = competencies[i + 1] || '';
  doc.text(`${comp1}   ${comp2}`);
}
doc.moveDown();

// Professional Experience
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE', { underline: true });
doc.moveDown(0.5);

// Hommaston 1
doc.fontSize(10).font('Helvetica-Bold').text('Training Support Staff — Full-Time', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Jan 2026 – Present)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Coordinate training operations, including participant onboarding, scheduling, LMS administration, assessments, attendance, documentation, reporting and post-training support.\n' +
  '• Contribute to the delivery of more than 100 training sessions or programmes through participant onboarding, learning-platform administration, assessments and operational coordination.\n' +
  '• Prepare programme trackers, reports, presentations, learning materials and business documents using Microsoft 365 and Google Workspace.\n' +
  '• Deliver Microsoft Office and digital productivity training; facilitate introductory UI/UX sessions covering design principles, user experience concepts, research basics and digital design tools.\n' +
  '• Conducted an AI needs assessment across a 23-member workforce and contributed to a 90-day AI and productivity adoption roadmap.\n' +
  '• Support AI adoption and workflow improvement through practical use of ChatGPT, Google Gemini, Microsoft Copilot, and related productivity tools.\n' +
  '• Introduced the Jobberman-hosted Mastercard Foundation Associates Programme opportunity to management, contributing to Hommaston\'s participation and Associate allocation.\n' +
  '• Awarded "Most Outstanding Intern (2025)" — Hommaston Limited, before transitioning into full-time employment.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// Hommaston 2
doc.fontSize(10).font('Helvetica-Bold').text('Project Support Intern / Lagos Training Coordinator — NCDMB Project 350', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Aug 2025 – Dec 2025)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Coordinated approximately 3–5 training programmes, managing participant and facilitator communication, logistics, attendance, schedules and daily training activities.\n' +
  '• Maintained programme trackers, records, documentation and reports to support project monitoring and accountability.\n' +
  '• Provided training coordination support for programmes delivered in Lagos and other states, helping resolve operational issues and keep activities on schedule.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// Hommaston 3
doc.fontSize(10).font('Helvetica-Bold').text('Training Intern', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Sep 2024 – Dec 2024)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Administered learner onboarding, participant communication, attendance records, assessments, LMS updates and training logistics.\n' +
  '• Prepared digital documentation and supported facilitators and senior training staff in day-to-day programme delivery.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// Henalo
doc.fontSize(10).font('Helvetica-Bold').text('Founder & Freelance Digital Consultant', { continued: true });
doc.font('Helvetica').text(' | Henalo Digital Enterprise, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (2025 – Present)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Designed and deployed 5+ websites for individuals and businesses, translating client requirements into digital solutions from concept through implementation.\n' +
  '• Created ATS-focused CVs, professional profiles, portfolios and career documents for clients.\n' +
  '• Produced brand identities and marketing assets — including logos, flyers, banners and business documents — for SMEs.\n' +
  '• Provide digital consulting across website development, branding, AI productivity, business documentation and workflow improvement.\n' +
  '• Build AI-assisted productivity workflows using ChatGPT, Google Gemini, Microsoft Copilot and Google Workspace.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// FeedCore
doc.fontSize(10).font('Helvetica-Bold').text('Business Operations & Digital Development', { continued: true });
doc.font('Helvetica').text(' | FeedCore Agro Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (2026 – Present)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Supported CAC incorporation and business documentation, helping establish the company\'s operational and digital foundations.\n' +
  '• Developed brand identity and marketing materials, including logos, flyers, banners, signboards and promotional content.\n' +
  '• Set up the company\'s Google Business Profile and online business presence; created customer-facing materials and digital templates.\n' +
  '• Maintain and organise inventory, purchasing, sales and administrative records using spreadsheets and business documents.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// Great Lots
doc.fontSize(10).font('Helvetica-Bold').text('Branch Sales Manager', { continued: true });
doc.font('Helvetica').text(' | Great Lots Nigeria Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Sep 2019 – Jun 2021)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Managed day-to-day branch sales activities, customer enquiries and complaints, and customer relationship follow-up.\n' +
  '• Coordinated branch operations, monitored inventory and maintained sales and operational records.\n' +
  '• Worked with staff to support sales objectives and resolve customer and business issues.',
  { lineGap: 1.5 }
);
doc.moveDown(0.5);

// Topguide
doc.fontSize(10).font('Helvetica-Bold').text('Salesperson', { continued: true });
doc.font('Helvetica').text(' | Topguide Electrical Company, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (May 2017 – Jan 2018)');
doc.fontSize(8.5).font('Helvetica').text(
  '• Guided customers in selecting electrical products based on requirements and budget, explaining product features and specifications.\n' +
  '• Handled customer enquiries, supported purchasing decisions and maintained positive customer relationships.',
  { lineGap: 1.5 }
);
doc.moveDown();

// Leadership
doc.fontSize(12).font('Helvetica-Bold').text('LEADERSHIP & COMMUNITY EXPERIENCE', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica-Bold').text('Special Adviser — Publicity & Media', { continued: true });
doc.font('Helvetica').text(' | NASS LASUED (2025 – 2026)');
doc.fontSize(8.5).font('Helvetica').text('• Advised executive leadership on publicity, branding, media and communication strategy for association programmes and partnerships.');
doc.fontSize(9.5).font('Helvetica-Bold').text('Pioneer Public Relations Officer (PRO)', { continued: true });
doc.font('Helvetica').text(' | NASS LASUED (2023 – 2025)');
doc.fontSize(8.5).font('Helvetica').text('• Helped develop NASS LASUED\'s first constitution and managed communications for a community of 3,000+ students.\n• Coordinated publicity campaigns, social media communication and stakeholder-facing information.');
doc.fontSize(9.5).font('Helvetica-Bold').text('Media Team Lead', { continued: true });
doc.font('Helvetica').text(' | Science Tech Summit (STS), LASUED (2023 – 2026, 1st – 4th Edition)');
doc.fontSize(8.5).font('Helvetica').text('• Led content creation, event publicity, social media communication and media coverage across four summit editions.\n• Contributed to audience growth from 500+ participants to 1,500+ attendees across summit editions.');
doc.moveDown();

// Education
doc.fontSize(12).font('Helvetica-Bold').text('EDUCATION', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9).text('• Bachelor of Science (B.Sc.) – Statistics | Lagos State University of Education (LASUED) | Completed');
doc.text('• Bachelor of Science (B.Sc.) – Business Administration | University of the People (Online) | In Progress');
doc.moveDown();

// Professional Certifications
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL CERTIFICATIONS', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9).text('• Certified Business Analyst (ACTD) — TechCrush');
doc.text('• AI Career Essentials (AICE) — ALX Africa');
doc.text('• Google AI Prompting Essentials — Google');
doc.text('• Google Digital Marketing Certification — Google');
doc.text('• Data Literacy — DataCamp');

doc.end();

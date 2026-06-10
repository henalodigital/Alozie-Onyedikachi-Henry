const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 40 });
doc.pipe(fs.createWriteStream('public/Alozie_Onyedikachi_Henry_CV.pdf'));

// Header Area
doc.fontSize(22).font('Helvetica-Bold').text('ALOZIE, ONYEDIKACHI HENRY', { align: 'center' });
doc.fontSize(11).font('Helvetica-Oblique').text('Digital Operations Specialist | AI Implementation Strategist | Project Coordinator', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(9).font('Helvetica').text('Lagos, Nigeria | +234 808 145 2065, +234 902 645 0406 | henalodigital@gmail.com | linkedin.com/in/henalodigital', { align: 'center' });
doc.moveDown();

// Professional Profile
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL PROFILE', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica').text(
  'Innovative Digital Operations Specialist and AI Implementation Strategist with a strong foundation in digital skills, front-end development, and business analysis. Highly proficient in leveraging versatile artificial intelligence tools and advanced prompt engineering to automate complex workflows, design dynamic web environments, and scale office productivity. Experienced in coordinating technical training programs, managing complex stakeholder communications, and leading high-profile technology summits. Recognized for a hands-on approach to problem-solving, utilizing AI-assisted technologies to maneuver operational challenges, optimize executive profiles, and deliver rapid, end-to-end digital solutions — from initial UI/UX design to live deployment.',
  { align: 'justify', lineGap: 2 }
);
doc.moveDown();

// Core Competencies
doc.fontSize(12).font('Helvetica-Bold').text('CORE COMPETENCIES', { underline: true });
doc.moveDown(0.3);
const competencies = [
  '• AI-Assisted Operations & Workflow Automation',
  '• Front-End Web Development & Deployment',
  '• Advanced Prompt Engineering & Digital Design',
  '• Executive CV & Portfolio Optimization',
  '• Project Management & Training Coordination',
  '• Business Analysis & Digital Workflows',
  '• Digital Communication Strategies',
  '• Complaint Resolution & Escalation',
  '• Remote Work & Team Collaboration',
  '• Time Management & Multitasking'
];
doc.fontSize(9.5).font('Helvetica');
for (let i = 0; i < competencies.length; i += 2) {
  const comp1 = competencies[i].padEnd(50, ' ');
  const comp2 = competencies[i + 1] || '';
  doc.text(`${comp1}   ${comp2}`);
}
doc.moveDown();

// Professional Experience
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE', { underline: true });
doc.moveDown(0.5);

// Job 1
doc.fontSize(10.5).font('Helvetica-Bold').text('Freelance Digital Consultant / Founder', { continued: true });
doc.font('Helvetica').text(' | Henalo Digital Enterprise', { continued: true });
doc.font('Helvetica-Bold').text(' (Nov 2025 – Present)');
doc.fontSize(9).font('Helvetica').text(
  '• Develop and deploy professional portfolio websites for industry clients and executives, managing the full development lifecycle from AI-assisted design to live online hosting.\n' +
  '• Optimize executive CVs, branding documents, and professional portfolios, successfully helping clients secure actionable career results and improve market visibility.\n' +
  '• Leverage diverse AI toolsets and advanced prompting techniques for rapid administrative scaling, high-quality content generation, and seamless digital project execution.',
  { lineGap: 1.5 }
);
doc.moveDown(0.8);

// Job 2
doc.fontSize(10.5).font('Helvetica-Bold').text('Training Support Staff', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Jan 2026 – Present)');
doc.fontSize(9).font('Helvetica').text(
  '• Conducted a comprehensive department-by-department AI needs assessment for a team of 23 staff members to develop a 90-day strategic rollout plan for digital efficiency.\n' +
  '• Coordinate complex communication between cross-functional teams and users to ensure smooth service delivery and seamless onboarding processes.\n' +
  '• Respond to and resolve technical and administrative inquiries via digital platforms, maintaining high-quality responsiveness and strict user satisfaction standards.\n' +
  '• Maintain accurate operational records and system updates, ensuring complete quality assurance and data integrity.',
  { lineGap: 1.5 }
);
doc.moveDown(0.8);

// Job 3
doc.fontSize(10.5).font('Helvetica-Bold').text('Project Support Intern — NCDMB Project 350 Lead', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Aug 2025 – Dec 2025)');
doc.fontSize(9).font('Helvetica').text(
  '• Served as the program lead in Lagos for the "NCDMB Project 350," ensuring seamless execution, logistical coordination, and stakeholder alignment.\n' +
  '• Assisted in managing complex schedules and ensuring highly effective communication between key executives and program participants.\n' +
  '• Maintained organized, data-driven records and tracked participant information to measure and report on program effectiveness.\n' +
  '• Awarded "Most Outstanding Intern" for exceptional operational support and issue resolution.',
  { lineGap: 1.5 }
);
doc.moveDown(0.8);

// Job 4
doc.fontSize(10.5).font('Helvetica-Bold').text('Training Intern', { continued: true });
doc.font('Helvetica').text(' | Hommaston Limited, Lagos', { continued: true });
doc.font('Helvetica-Bold').text(' (Sept 2024 – Dec 2024)');
doc.fontSize(9).font('Helvetica').text(
  '• Supported daily administrative operations and provided rapid response to participant inquiries during early training cohorts.\n' +
  '• Assisted senior training staff with digital documentation and the smooth delivery of organizational learning objectives.',
  { lineGap: 1.5 }
);
doc.moveDown(0.8);

// Job 5
doc.fontSize(10.5).font('Helvetica-Bold').text('Sales Branch Manager', { continued: true });
doc.font('Helvetica').text(' | Great Lots Nigeria Limited', { continued: true });
doc.font('Helvetica-Bold').text(' (Sept 2019 – June 2021)');
doc.fontSize(9).font('Helvetica').text(
  '• Supervised full-cycle sales operations and coordinated branch staff, successfully managing a branch that generated over NGN 10,000,000 in revenue.\n' +
  '• Managed escalated customer interactions and implemented robust complaint resolution strategies, ensuring high customer satisfaction and retention.\n' +
  '• Maintained comprehensive sales databases and monitored complex inventory levels to guarantee optimal branch performance.',
  { lineGap: 1.5 }
);
doc.moveDown(0.8);

// Job 6
doc.fontSize(10.5).font('Helvetica-Bold').text('Salesperson', { continued: true });
doc.font('Helvetica').text(' | Topguide Electrical Company', { continued: true });
doc.font('Helvetica-Bold').text(' (May 2017 – Jan 2018)');
doc.fontSize(9).font('Helvetica').text(
  '• Assisted customers in selecting products and provided expert support during purchase decisions.\n' +
  '• Handled customer inquiries professionally and ensured positive service experiences, contributing directly to targeted branch sales.',
  { lineGap: 1.5 }
);
doc.moveDown();

// Key Projects
doc.fontSize(12).font('Helvetica-Bold').text('KEY TECHNICAL & ACADEMIC PROJECTS', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica-Bold').text('Digital Tax Workflow Automation');
doc.fontSize(9).font('Helvetica').text('• Created a comprehensive digital tax workflow with an assigned team as part of a rigorous group assignment for a Business Analytics certification.');
doc.fontSize(9.5).font('Helvetica-Bold').text('"Life After School" Program');
doc.fontSize(9).font('Helvetica').text('• Served on the organizing team to design, coordinate, and execute a high-impact university-wide career preparation program (June 2026).');
doc.fontSize(9.5).font('Helvetica-Bold').text('Educational Planning in Tertiary Institutions');
doc.fontSize(9).font('Helvetica').text('• Developed a statistical framework applying Moving Average methods for accurate student enrollment forecasting.');
doc.moveDown();

// Leadership & Community Engagement
doc.fontSize(12).font('Helvetica-Bold').text('LEADERSHIP & COMMUNITY ENGAGEMENT', { underline: true });
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica-Bold').text('Special Adviser — Media & Publicity', { continued: true });
doc.font('Helvetica').text(' | NASS, LASUED (2024 – 2026)');
doc.fontSize(9).font('Helvetica').text('• Oversaw comprehensive digital communication strategies, coordinating high-impact publicity efforts and digital engagement for association initiatives through the completion of the administrative term.');
doc.fontSize(10).font('Helvetica-Bold').text('Media Team Lead', { continued: true });
doc.font('Helvetica').text(' | Science Tech Summit (STS), LASUED (2023 – 2026)');
doc.fontSize(9).font('Helvetica').text('• Developed and executed cross-channel media strategies that successfully drove event growth, scaling audience engagement from 500+ participants in the inaugural edition to over 1,500+ attendees by the fourth consecutive technology summit (1st – 4th Editions).');
doc.fontSize(10).font('Helvetica-Bold').text('Public Relations Officer (PRO)', { continued: true });
doc.font('Helvetica').text(' | NASS, LASUED (2022 – 2024)');
doc.fontSize(9).font('Helvetica').text('• Managed critical communication channels between the association and its members, building and maintaining professional relationships with external stakeholders and partners.');
doc.moveDown();

// Education
doc.fontSize(12).font('Helvetica-Bold').text('EDUCATION', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9.5).text('• Bachelor of Science (B.Sc.) – Computer Science | University of the People (Online) | In Progress');
doc.text('• Bachelor of Science (B.Sc.) – Statistics | Lagos State University of Education (LASUED) | In Progress');
doc.moveDown();

// Certifications & Awards
doc.fontSize(12).font('Helvetica-Bold').text('CERTIFICATIONS & AWARDS', { underline: true });
doc.moveDown(0.3);
doc.fontSize(9.5).text('• Business Analyst — TechCrunch ACTD Certified');
doc.text('• Front-End Web Development');
doc.text('• Financial Literacy & Digital Skills');
doc.text('• Google Digital Marketing Certification');
doc.text('• ALX AI Career Essentials');
doc.text('• Data Literacy — DataCamp');
doc.moveDown(0.3);
doc.fontSize(9.5).font('Helvetica-Bold').text('Awards:');
doc.font('Helvetica').text('• Most Outstanding Intern (2025) — Hommaston Limited');
doc.text('• Man of the Year (2023) — Nigerian Association of Science Students (LASUED)');

doc.end();

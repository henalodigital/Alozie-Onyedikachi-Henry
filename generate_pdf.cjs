const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('public/cv.pdf'));

doc.fontSize(20).text('ALOZIE ONYEDIKACHI HENRY', { align: 'center' });
doc.fontSize(12).text('Customer Support Representative | Virtual Support Specialist | Administrative Coordinator', { align: 'center' });
doc.moveDown();
doc.text('Lagos, Nigeria | +234 808 145 2065 | henalodigital@gmail.com', { align: 'center' });
doc.moveDown();

doc.fontSize(14).text('PROFESSIONAL SUMMARY', { underline: true });
doc.fontSize(10).text('Customer-focused support with extensive experience handling inquiries, resolving issues, and managing communication across digital platforms including WhatsApp, email, and online systems. Skilled in maintaining accurate records, coordinating processes, and ensuring timely responses in fast-paced environments. Organized, responsive, and committed to delivering smooth and positive customer experiences while supporting business operations and team collaboration.');
doc.moveDown();

doc.fontSize(14).text('CORE SKILLS', { underline: true });
doc.fontSize(10).text('• Customer Support (WhatsApp, Phone, Email)\n• Order Processing & Follow-Up\n• Complaint Resolution & Escalation\n• Communication & Active Listening\n• Data Entry & Record Keeping\n• Microsoft Office & Google Workspace\n• Time Management & Multitasking\n• Remote Work & Team Collaboration\n• Digital Communication Strategies\n• Administrative Coordination');
doc.moveDown();

doc.fontSize(14).text('PROFESSIONAL EXPERIENCE', { underline: true });

doc.fontSize(12).text('TRAINING SUPPORT STAFF | Hommaston Limited');
doc.fontSize(10).text('Jan 2026 – Present');
doc.text('• Respond to user inquiries via WhatsApp, email, and digital platforms, ensuring timely and professional communication\n• Assist users with onboarding, account access, and comprehensive issue resolution\n• Maintain accurate records of interactions and system updates for quality assurance\n• Coordinate communication between teams and users to ensure smooth service delivery');
doc.moveDown();

doc.fontSize(12).text('TRAINING INTERN (PROJECT SUPPORT) | Hommaston Limited');
doc.fontSize(10).text('Aug 2025 – Dec 2025');
doc.text('• Supported participants by addressing inquiries and providing assistance during training sessions\n• Assisted in coordinating schedules and ensuring effective communication between stakeholders\n• Maintained organized records and tracked participant information for program effectiveness');
doc.moveDown();

doc.fontSize(12).text('SPECIAL ADVISER – MEDIA & PUBLICITY | NASS, LASUED');
doc.fontSize(10).text('2024 – Present');
doc.text('• Oversee digital communication strategies and ensure timely dissemination of information\n• Support engagement and communication across student platforms and social media channels');
doc.moveDown();

doc.fontSize(12).text('SALES BRANCH MANAGER | Great Lots Nigeria Limited');
doc.fontSize(10).text('Sept 2019 – June 2021');
doc.text('• Managed customer interactions, resolved complaints, and ensured customer satisfaction\n• Supervised sales operations and coordinated staff to meet targets and objectives\n• Maintained comprehensive sales records and monitored inventory for optimal performance');
doc.moveDown();

doc.fontSize(14).text('EDUCATION', { underline: true });
doc.fontSize(10).text('B.Sc. Statistics | LAGOS STATE UNIVERSITY OF EDUCATION (LASUED) | Expected: July 2026');
doc.text('B.Sc. Computer Science | UNIVERSITY OF THE PEOPLE (ONLINE) | In Progress');
doc.moveDown();

doc.fontSize(14).text('CERTIFICATIONS', { underline: true });
doc.fontSize(10).text('• Google Digital Marketing Certification\n• ALX AI Career Essentials\n• Data Literacy — DataCamp');

doc.end();

export interface ExperienceItem {
  id: string;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  tags?: string[];
  certificatePdf?: string;  // path relative to /public/, e.g. '/certificates/nod.pdf'
  certificateUrl?: string;  // link to digital credential (Coursera, LinkedIn, etc.)
}

export const experience: ExperienceItem[] = [
  // ── Work ──────────────────────────────────────────────────────
  {
    id: 'visa-tink',
    type: 'work',
    title: 'Data Analyst (Consultant via Coody)',
    organization: 'Visa',
    location: 'Stockholm, Sweden',
    startDate: 'Oct 2024',
    endDate: 'Present',
    description: [
      'Supporting machine learning and data products through large-scale data annotation and quality assurance for financial transaction datasets.',
      'Designing and applying structured, AI-assisted workflows to improve scalability and consistency of annotation processes.',
      'Monitoring data quality across markets using dashboards, ensuring alignment with data standards.',
      'Mentored a team of labelers, facilitating standups and workshops to maintain quality and efficiency.',
      'Contributing to merchant data validation, ensuring accuracy of predicted attributes used in downstream ML models.',
    ],
    tags: ['Python', 'SQL', 'NLP', 'Data Quality', 'Looker Studio'],
  },

  // ── Education ─────────────────────────────────────────────────
  {
    id: 'claude-bootcamp',
    type: 'education',
    title: 'Claude Code Bootcamp',
    organization: 'Nod Coding Bootcamp',
    location: 'Stockholm, Sweden',
    startDate: 'Mar 2026',
    endDate: 'Mar 2026',
    description: [
      'Weekend bootcamp focused on building practical projects with Claude Code, including agent-based workflows, MCP integration, and effective AI-assisted development practices.',
    ],
    tags: ['Claude Code', 'MCP', 'Spec-Driven Development', 'Context Engineering'],
    certificatePdf: '/public/Claude.pdf',
    certificateUrl: 'https://nodcoding.trueoriginal.com/en/program-certificate-artur-mistiuk-323924-5036/',
  },
  {
    id: 'yandex-math',
    type: 'education',
    title: 'Mathematics for Data Analysis and Data Science',
    organization: 'Yandex Practicum',
    location: 'Online',
    startDate: 'Aug 2025',
    endDate: 'Dec 2025',
    description: [
      '240-hour professional training course covering Linear Algebra (50h), Calculus (50h), Probability Theory (40h), Statistics (50h), and Applications of Linear Algebra in Data Analysis (30h).',
    ],
    tags: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'],
    certificatePdf: '/public/Math_for_DA_DS.pdf',
    // certificateUrl: 'https://...',
  },
  {
    id: 'nod-bootcamp',
    type: 'education',
    title: 'Data Analytics Bootcamp',
    organization: 'Nod Coding Bootcamp',
    location: 'Stockholm, Sweden',
    startDate: 'Apr 2024',
    endDate: 'Jun 2024',
    description: [
      '10-week intensive bootcamp covering the full data analytics stack: Python, SQL, machine learning, data visualization and presentation storytelling.',
    ],
    tags: ['Python', 'SQL', 'Machine Learning', 'Data Visualizations', 'Storytelling'],
    certificatePdf: '/public/nodcoding-bootcamp.pdf',
    certificateUrl: 'https://nodcoding.trueoriginal.com/nodcoding-artur-mistiuk-161070-10-week-data-analytics-coding-bootcamp/?badge=qrcode-raw&ref=qrcode&zone=truecrt&lang=en',
  },
  {
    id: 'goit-python',
    type: 'education',
    title: 'Python Developer',
    organization: 'GoIT Global',
    location: 'Online',
    startDate: '2022',
    endDate: '2023',
    description: [
      'Comprehensive Python Developer course covering Python fundamentals, backend development, and Data Science. The program included data analysis, EDA, statistics, machine learning, deep learning, NLP, as well as web development with FastAPI, Django, PostgreSQL, and MongoDB.',
    ],
    tags: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Machine Learning', 'NLP'],
    certificatePdf: '/public/Python_Developer_Course.pdf',
    // certificateUrl: 'https://...',
  },
  {
    id: 'znu-degree',
    type: 'education',
    title: "Bachelor's Degree — Software Engineering",
    organization: 'Zaporizhzhia National University',
    location: 'Zaporizhzhia, Ukraine',
    startDate: '2021',
    endDate: '2022',
    description: [
      'Bachelor-level studies in Software Engineering covering algorithms and data structures, databases, operating systems, web programming, software architecture and design, system analysis, software quality assurance, and human-computer interaction.',
      'The programme also included Java, PHP, mobile programming, artificial intelligence systems, and professional software engineering practice.',
    ],
    tags: ['Software Engineering', 'Algorithms & Data Structures', 'Databases', 'Web Development', 'System Analysis', 'Software Architecture'],
    // certificatePdf: '/certificates/diploma.pdf',
  },
  {
    id: 'epk-degree',
    type: 'education',
    title: 'Associate Degree — Software Engineering',
    organization: 'Economics and Law Professional College of Zaporizhzhia National University',
    location: 'Zaporizhzhia, Ukraine',
    startDate: '2017',
    endDate: '2021',
    description: [
      'Associate degree in Software Engineering focused on software development fundamentals, databases, operating systems, computer networks, software architecture, software testing, project-based development, and software security.',
      'The programme also covered discrete structures, project management, and applied programming topics, with qualification in software engineering.',
    ],
    tags: ['Software Engineering', 'Databases', 'Operating Systems', 'Computer Networks', 'Software Testing', 'Software Architecture'],
    certificatePdf: '/public/Diploma.pdf',
  },
];

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  featured: boolean;
  technologies: string[];
  objective: string;
  approach: string;
  results: string;
  githubUrl: string;
  liveUrl: string;
  accent: "indigo" | "cyan" | "emerald";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  type: string;
}

export interface Achievement {
  title: string;
  context: string;
  year: string;
  description: string;
}

export interface Hackathon {
  number: string;
  title: string;
  status: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  status: string;
  location: string;
  grade: string;
  courseworkLabel?: string;
  courseworkHighlights?: string[];
}

export const personalInfo = {
  name: "Tanishq Jindal",
  role: "Full Stack Developer | AI/ML Enthusiast",
  status: "Open to Internships & Opportunities",
  headline:
    "Building full-stack applications and AI-powered software while strengthening fundamentals in AI/ML and Data Structures & Algorithms.",
  about: [
    "I am a 3rd-year Computer Science student at Bennett University (2024–2028) focused on full-stack development and applied AI/ML systems. I enjoy building software that combines robust backend architectures with practical AI workflows.",
    "My recent projects include an autonomous code-generation sandbox platform, a real-time trading and market intelligence dashboard, and a civic incident tracking system. I am currently deepening my knowledge in AI/ML engineering alongside regular practice in Data Structures & Algorithms, looking for software engineering and AI/ML internship opportunities.",
  ],
  university: "Bennett University",
  degree: "B.Tech in Computer Science",
  currentYear: "3rd Year",
  duration: "2024 – 2028",
  location: "Greater Noida, India",
  email: "jindaltanishq96@gmail.com",
  links: {
    github: "https://github.com/Tanishq-Jindal",
    linkedin: "https://www.linkedin.com/in/tanishq-jindal-117096325/",
    leetcode: "https://leetcode.com/u/tanishqjindal10/",
    instagram: "https://www.instagram.com/tanishq_017/",
    resume: "/resume.pdf",
  },
  targetRoles: [
    "Full Stack Developer",
    "Software Developer",
    "AI/ML Engineer",
    "MLOps",
  ],
  currentFocus: {
    title: "AI/ML + Data Structures & Algorithms",
    description:
      "Actively learning AI/ML concepts and agent architectures while strengthening core algorithmic problem-solving in C++ and Python.",
    areas: [
      {
        topic: "Applied AI & Agent Workflows",
        detail:
          "Designing multi-step tool execution loops, prompt workflows, and sandboxed execution environments.",
      },
      {
        topic: "Data Structures & Algorithms",
        detail:
          "Practicing problem solving across graphs, dynamic programming, and systems design fundamentals.",
      },
      {
        topic: "Full-Stack Web Systems",
        detail:
          "Type-safe APIs (tRPC, REST), relational databases (PostgreSQL, Prisma), and resilient background task orchestration.",
      },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: "nexus-ai",
    name: "Nexus-AI",
    subtitle: "AI-Powered Full-Stack Builder",
    tagline: "Autonomous multi-agent cloud development platform",
    featured: true,
    accent: "indigo",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Inngest",
      "E2B",
      "Gemini",
    ],
    objective:
      "Conversational platform that autonomously architects, codes, and refines full-stack web applications.",
    approach:
      "Built with Next.js, tRPC, Prisma, and Clerk; orchestrates Gemini agent loops and E2B microVMs via Inngest.",
    results:
      "Executes shell commands in isolated sandboxes, manages code changes, and streams real-time live previews.",
    githubUrl: "https://github.com/Tanishq-Jindal/Nexus-Ai",
    liveUrl: "https://nexus-ai-rust-kappa.vercel.app/",
  },
  {
    id: "tradevision",
    name: "TradeVision",
    subtitle: "AI Trading Platform",
    tagline: "Real-time market analytics & ML-assisted insights",
    featured: false,
    accent: "cyan",
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "JavaScript",
      "HTML",
      "TypeScript",
      "Gemini",
    ],
    objective:
      "Full-stack trading intelligence platform combining live market charts with automated AI analysis.",
    approach:
      "FastAPI and Next.js architecture integrating Gemini to analyze technical indicators and financial sentiment.",
    results:
      "Delivers real-time simulated trade execution, portfolio tracking, and low-latency market intelligence.",
    githubUrl: "https://github.com/Tanishq-Jindal/TradeVision",
    liveUrl: "https://trade-vision-nu.vercel.app/",
  },
  {
    id: "samaadhan",
    name: "Samaadhan",
    subtitle: "Civic Issue Tracker",
    tagline: "Crowdsourced municipal incident reporting & dispatch",
    featured: false,
    accent: "emerald",
    technologies: ["Python", "HTML", "JavaScript"],
    objective:
      "Crowdsourced municipal incident reporting portal connecting citizens directly with public departments.",
    approach:
      "Engineered with Python, JavaScript, and HTML featuring GPS geolocation, photo verification, and interactive maps.",
    results:
      "Automates department ticket routing and provides administrators with a triage resolution dashboard.",
    githubUrl: "https://github.com/Tanishq-Jindal/Samaadhan",
    liveUrl: "https://civic-issue-tracker-red.vercel.app/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for systems, scripting, and backend",
    skills: [
      { name: "C++", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java", highlight: false },
      { name: "TypeScript", highlight: true },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server architecture and API design",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
    ],
  },
  {
    title: "Core Computer Science",
    description: "Foundational computer science principles",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming", highlight: true },
      { name: "Operating Systems", highlight: false },
      { name: "Computer Networks", highlight: false },
    ],
  },
  {
    title: "Technologies & Tools",
    description: "Frameworks, databases, cloud, and agent runtimes",
    skills: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript", highlight: false },
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "tRPC", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Prisma", highlight: true },
      { name: "Clerk", highlight: false },
      { name: "Inngest", highlight: true },
      { name: "E2B", highlight: true },
      { name: "Gemini", highlight: true },
      { name: "HTML", highlight: false },
    ],
  },
];

export const certificationsData: Certification[] = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    year: "2026",
    type: "Cloud Architecture",
  },
  {
    title: "AWS Academy Graduate – Cloud Security Foundations",
    issuer: "AWS Academy",
    year: "2026",
    type: "Cloud Security",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "WINGSPAN",
    year: "2025",
    type: "Algorithms & Problem Solving",
  },
];

export const hackathonsData: Hackathon[] = [
  {
    number: "01",
    title: "SIH Hackathon",
    status: "PARTICIPATED",
  },
  {
    number: "02",
    title: "Hackachino",
    status: "PARTICIPATED",
  },
  {
    number: "03",
    title: "HCLTech AI Hackathon",
    status: "PARTICIPATED",
  },
];

export const achievementsData = hackathonsData;

export const educationData = {
  degree: "B.Tech in Computer Science",
  institution: "Bennett University",
  period: "2024 – 2028",
  status: "3rd Year",
  location: "Greater Noida, India",
  cgpa: "8.3 / 10",
  courseworkHighlights: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
  ],
};

export const educationList: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Bennett University",
    period: "2024 – 2028",
    status: "3rd Year",
    location: "Greater Noida, India",
    grade: "CGPA: 8.3 / 10",
    courseworkLabel: "Relevant Coursework",
    courseworkHighlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
    ],
  },
  {
    degree: "Class 12 — 82.5%",
    institution: "KCM WORLD SCHOOL",
    status: "Senior Secondary",
    location: "Palwal, Haryana",
    grade: "82.5%",
    courseworkLabel: "Academic Stream & Focus",
    courseworkHighlights: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English Core",
    ],
  },
];


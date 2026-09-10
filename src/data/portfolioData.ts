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
      "Build an AI-powered platform for generating and iteratively refining full-stack software projects through conversational agent workflows.",
    approach:
      "Architected with Next.js, tRPC, Prisma, and Clerk, using Inngest and E2B to orchestrate a multi-stage Gemini agent workflow that generates project files and executes terminal commands inside isolated cloud sandboxes.",
    results:
      "Users can create authenticated projects, run multi-iteration AI workflows, safely execute commands in cloud microVMs, and inspect live application previews in real time.",
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
      "Create a full-stack trading and portfolio intelligence platform combining live market data with AI-driven market analysis.",
    approach:
      "Built a responsive Next.js frontend backed by FastAPI services, integrating real-time price charts, simulated trade execution, and Gemini to synthesize technical indicators and financial news sentiment.",
    results:
      "Provides responsive trade history tracking, portfolio valuation, and contextual AI market summaries with paginated execution logs and low-latency updates.",
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
      "Provide a crowdsourced civic platform for citizens to report local infrastructure issues and track their municipal resolution.",
    approach:
      "Developed a web platform using Python, JavaScript, and HTML with GPS location detection, photo verification, interactive map overlays, and automated department routing.",
    results:
      "Equips communities with direct issue reporting and provides municipal administrators with an analytics dashboard for triage, priority management, and resolution tracking.",
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


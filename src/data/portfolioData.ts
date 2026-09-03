export interface Project {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  featured: boolean;
  technologies: string[];
  keyFeatures: string[];
  technicalHighlights: string[];
  githubUrl: string;
  liveUrl: string;
  statsLabel?: string;
  accent: "indigo" | "cyan" | "emerald";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
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

export const personalInfo = {
  name: "Tanishq Jindal",
  role: "Full Stack Developer | AI/ML Enthusiast",
  headline:
    "I build full-stack applications and AI-powered software while continuously strengthening my skills in AI/ML and Data Structures & Algorithms.",
  about: [
    "I am a 3rd-year Computer Science student at Bennett University with a strong passion for building production-oriented full-stack software and exploring intelligent AI-powered architectures.",
    "My engineering journey is driven by hands-on execution: architecting autonomous agent pipelines, building low-latency trading interfaces, and creating impactful community platforms. Rather than merely experimenting with prompt wrappers, I focus on systems-level integration—combining durable workflow orchestrations, type-safe APIs, and containerized execution sandboxes.",
    "Currently, I am actively expanding my knowledge in AI/ML engineering alongside disciplined practice in Data Structures & Algorithms, preparing myself to engineer robust, high-impact software systems.",
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
    "MLOps-related roles",
  ],
  currentFocus: {
    title: "AI/ML + Data Structures & Algorithms",
    description:
      "Actively expanding applied AI/ML knowledge and workflow systems while strengthening foundational algorithmic problem-solving in C++ and Python.",
    areas: [
      {
        topic: "Applied AI Workflows & LLM Systems",
        detail:
          "Designing agentic state machines, tool iteration loops, and sandboxed code execution environments.",
      },
      {
        topic: "Data Structures & Algorithms",
        detail:
          "Daily practice in graph algorithms, dynamic programming, and optimal space/time complexity patterns.",
      },
      {
        topic: "Modern Full-Stack Systems",
        detail:
          "Type-safe APIs (tRPC, REST), relational data modeling (PostgreSQL, Prisma), and distributed background workflows (Inngest).",
      },
    ],
  },
};

export const projectsData: Project[] = [
  {
    id: "nexus-ai",
    name: "Nexus-AI",
    subtitle: "Full-Stack AI Builder",
    tagline: "Autonomous multi-agent cloud development sandbox",
    description:
      "A full-stack AI code-generation platform that allows authenticated users to create, persist, and iteratively refine software projects through AI-powered workflows.",
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
    keyFeatures: [
      "Full-stack AI code generation",
      "Authenticated user projects via Clerk",
      "Type-safe end-to-end APIs with tRPC",
      "Persistent project management with Prisma & PostgreSQL",
      "Autonomous AI agent workflow execution",
      "Cloud sandbox execution with isolated E2B containers",
      "Live application previews in real-time",
      "Dynamic file system generation & command execution",
    ],
    technicalHighlights: [
      "Architected a full-stack AI code-generation platform using Next.js, tRPC, Prisma, PostgreSQL, and Clerk.",
      "Built a durable 3-stage Gemini agent workflow orchestrated via Inngest and E2B cloud sandboxes.",
      "Engineered autonomous execution loop capable of running up to 15 multi-tool agent iterations per job.",
      "Enabled AI agents to safely generate files, execute terminal commands in isolated microVMs, and render live preview frames.",
    ],
    githubUrl: "https://github.com/Tanishq-Jindal/Nexus-Ai",
    liveUrl: "https://nexus-ai-rust-kappa.vercel.app/",
  },
  {
    id: "tradevision",
    name: "TradeVision",
    subtitle: "AI Trading Platform",
    tagline: "Real-time market intelligence & ML-driven portfolio analysis",
    description:
      "A full-stack stock trading platform combining real-time market data, portfolio tracking, trading functionality, interactive charts, and AI-powered market analysis.",
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
    keyFeatures: [
      "Real-time market streaming data",
      "Dynamic portfolio tracking & valuation",
      "Real-time simulated trade execution",
      "Interactive financial charts & price history",
      "AI-powered market analysis powered by Gemini",
      "Technical indicators & quantitative ML signals",
      "Financial news sentiment extraction",
      "Portfolio-aware personalized risk insights",
      "Paginated execution logs & full trade history",
      "High-density responsive financial dashboard",
    ],
    technicalHighlights: [
      "Built a full-stack stock trading platform with real-time market feeds, portfolio tracking, trade execution, and interactive price charts.",
      "Integrated Gemini-driven AI market analysis synthesizing technical indicators, ML signals, and news sentiment alongside portfolio context.",
      "Implemented secure, performant trade history management with paginated execution logs in FastAPI.",
      "Engineered responsive high-frequency dashboard components with live data hydration and low-latency state updates.",
    ],
    githubUrl: "https://github.com/Tanishq-Jindal/TradeVision",
    liveUrl: "https://trade-vision-nu.vercel.app/",
  },
  {
    id: "samaadhan",
    name: "Samaadhan",
    subtitle: "Civic Issue Tracker",
    tagline: "Crowdsourced geo-tagged citizen incident resolution portal",
    description:
      "A crowdsourced civic issue reporting platform that enables citizens to report, track, and monitor problems in their local communities.",
    featured: false,
    accent: "emerald",
    technologies: ["Python", "HTML", "JavaScript"],
    keyFeatures: [
      "Direct civic issue reporting with media upload",
      "GPS-based automated location detection",
      "Photo documentation & verification",
      "Interactive community map overlays",
      "Automated municipal department routing",
      "Category-based automated priority assignment",
      "End-to-end incident lifecycle tracking",
      "Administrative triage & dispatch dashboard",
      "Issue analytics & civic resolution statistics",
      "Advanced status, priority, and department filtering",
      "Real-time resolution timeline tracking",
    ],
    technicalHighlights: [
      "Developed a crowdsourced civic issue reporting platform addressing real municipal challenges: potholes, streetlights, waste, and water infrastructure.",
      "Implemented GPS-based location detection, photo documentation, interactive maps, automated department routing, and category-based priority assignment.",
      "Built an administrative triage dashboard complete with incident analytics, multi-criteria filtering, priority controls, and resolution auditing.",
    ],
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
    description: "Server architecture and interface protocols",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
    ],
  },
  {
    title: "Core Computer Science",
    description: "Foundational CS theory and computer systems",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming", highlight: true },
      { name: "Operating Systems", highlight: false },
      { name: "Computer Networks", highlight: false },
    ],
  },
  {
    title: "Technologies Used in Projects",
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

export const achievementsData: Achievement[] = [
  {
    title: "Smart India Hackathon 2025",
    context: "Bennett University Selection Round",
    year: "2025",
    description:
      "Participated at University Level, collaborating to architect and pitch technology solutions tackling civic and organizational problem statements.",
  },
];

export const educationData = {
  degree: "B.Tech in Computer Science",
  institution: "Bennett University",
  period: "2024 – 2028",
  status: "3rd Year",
  location: "Greater Noida, India",
  courseworkHighlights: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
  ],
};

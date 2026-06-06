/** Single source of truth for résumé copy — replace `linkedin` with your vanity URL when ready. */
export const SITE = {
  linkedin: "https://www.linkedin.com/in/anurag-ranjan-9309761ba/",
  resumePath: "/resume.pdf",
} as const;

/** Add your PDF to `public/resume.pdf` for the download button to work. */
export const TYPING_ROLES = [
  "Frontend Developer",
  "Angular Engineer",
  "React Developer",
  "SaaS UI Specialist",
  "AI-Powered Applications",
] as const;

export const FLOATING_TECH = [
  "Angular",
  "React",
  "TypeScript",
  "NgRx",
  "Redux",
  "RxJS",
  "WebSockets",
  "Tailwind",
] as const;

export type RecruiterMetric = {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export const RECRUITER_METRICS: readonly RecruiterMetric[] = [
  { value: 150, suffix: "+", label: "REST API integrations" },
  { value: 40, suffix: "%", label: "Dashboard load improvement" },
  { value: 2, suffix: "+", label: "Years shipping production UI" },
];

export const SKILL_PROFICIENCY = [
  { name: "Angular & TypeScript", level: 92 },
  { name: "React & Redux", level: 88 },
  { name: "AI & LLM integrations", level: 90 },
  { name: "State management (NgRx / RxJS)", level: 90 },
  { name: "REST & streaming APIs (SSE)", level: 88 },
  { name: "Performance & WCAG accessibility", level: 86 },
] as const;

/** Free Lottie JSON URLs (LottieFiles) — see README for swap suggestions. */
export const LOTTIE = {
  hero: "https://assets2.lottiefiles.com/packages/lf20_fcfjwiyb.json",
  loading: "https://assets10.lottiefiles.com/packages/lf20_poqmycwz.json",
  ai: "https://assets9.lottiefiles.com/packages/lf20_myejiggj.json",
} as const;

export const PROFILE = {
  name: "Anurag Ranjan",
  role: "Frontend Developer",
  tagline: "AI-Powered Applications",
  email: "trojan.anurag07@gmail.com",
  phoneE164: "+919166791183",
  phoneDisplay: "9166791183",
  yearsExperience: "2+",
  locations: {
    current: "Noida, Uttar Pradesh",
    previous: "Gurugram, India",
  },
  heroBlurb:
    "Building scalable web applications with Angular, React, and TypeScript — from SaaS EdTech dashboards and CRM platforms to enterprise AI assistants with real-time LLM streaming.",
  summary:
    "Frontend Developer with 2+ years of experience building AI-powered web applications using Angular, ReactJS, TypeScript, and JavaScript. Hands-on experience integrating LLM APIs (Claude, OpenAI, Gemini), implementing real-time SSE streaming interfaces, and developing enterprise AI assistants with multi-turn conversation state. Proficient in NgRx/Redux/RxJS state management, WebSocket-based real-time systems, RESTful API integration, WCAG accessibility, and performance optimization across SaaS, CRM, EdTech, and AI-driven enterprise platforms.",
  domains: [
    "SaaS & EdTech platforms",
    "CRM & enterprise dashboards",
    "AI assistants with LLM streaming",
    "Real-time WebSocket systems",
  ],
} as const;

export const SKILL_GROUPS = [
  {
    title: "AI & Integrations",
    items: [
      "LLM APIs (Claude / OpenAI / Gemini)",
      "Prompt engineering",
      "Streaming APIs (SSE)",
      "AI chat UI development",
      "Real-time AI response rendering",
      "WebSocket-based AI streaming",
      "Dynamic UI updates",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Angular", "ReactJS", "RxJS", "Redux", "NgRx", "Angular Material", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Frontend Concepts",
    items: [
      "Component architecture",
      "Lazy loading",
      "State management",
      "Responsive design",
      "API integration",
      "WCAG",
      "Jest / unit testing",
    ],
  },
  {
    title: "Architecture & Concepts",
    items: [
      "Micro frontend architecture",
      "Real-time systems (WebSockets)",
      "OOP",
      "Performance optimization",
      "DSA",
    ],
  },
  {
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "C++", "HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Postman", "VS Code", "Agile", "Scrum"],
  },
] as const;

export const ACHIEVEMENTS = [
  "Shipped enterprise AI assistant interface with real-time LLM streaming for a production SaaS platform — reduced manual workflow effort for enterprise users.",
  "Improved dashboard performance by 40% and cut API calls by 35–50% through advanced RxJS caching and lazy loading strategies.",
  "Collaborated with cross-functional teams in Agile/Scrum environments to deliver production-ready features across SaaS, EdTech, and AI-powered platforms.",
] as const;

export const EDUCATION = {
  degree: "Bachelor of Technology · Computer Science Engineering",
  school: "Lovely Professional University",
  location: "Phagwara, Punjab",
  period: "2020 – 2024",
  result: "7.5 CGPA",
} as const;

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  product?: string;
  environment?: string;
  highlights: readonly string[];
};

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    company: "Drabito Technologies",
    role: "Software Developer",
    period: "Aug 2025 – May 2026",
    location: "Noida, India",
    highlights: [
      "Led frontend development of WorkED (SaaS EdTech platform) and AI Assistant (EA Portal).",
      "Integrated 150+ REST APIs, implemented LLM streaming, and improved dashboard performance by 40%.",
    ],
  },
  {
    company: "Emminence Innovation",
    role: "Frontend Developer",
    period: "Aug 2024 – Aug 2025",
    location: "Gurugram, India",
    highlights: [
      "Built scalable Angular and ReactJS applications for enterprise clients.",
      "Contributed to real-time Money gaming and CRM platforms with real-time features, responsive design, and cross-functional Agile delivery.",
    ],
  },
] as const;

export type ProjectEntry = {
  title: string;
  subtitle?: string;
  period: string;
  environment: string;
  bullets: readonly string[];
  featured?: boolean;
};

export const PROJECTS: readonly ProjectEntry[] = [
  {
    title: "AI Assistant — EA Portal",
    subtitle: "Enterprise AI assistant with LLM streaming",
    period: "Feb 2026 – Mar 2026",
    environment: "Angular, Redux, Streaming APIs, LLM APIs (Claude / OpenAI)",
    featured: true,
    bullets: [
      "Built enterprise AI assistant with LLM API integration (Claude/OpenAI), real-time SSE token streaming, typewriter UI rendering, and multi-turn conversation state management using Redux/NgRx.",
      "Implemented prompt engineering layer to constrain AI responses to enterprise workflows; added JWT-based auth and role-based access control for secure portal access.",
    ],
  },
  {
    title: "WorkED",
    subtitle: "SaaS-based EdTech & workforce platform",
    period: "Aug 2025 – May 2026",
    environment: "Angular, TypeScript, RxJS, NgRx, REST APIs",
    featured: true,
    bullets: [
      "Integrated 150+ REST APIs with AG Grid, pagination, and real-time data visualization; improved dashboard load time by 40% and reduced redundant API calls by 35–50% via lazy loading and RxJS caching.",
      "Built responsive UI with Angular Material and Bootstrap; implemented NgRx for scalable, maintainable frontend state management.",
    ],
  },
  {
    title: "Team Chat Application",
    subtitle: "Real-time communication platform",
    period: "Aug 2025 – Jan 2026",
    environment: "Angular, TypeScript, WebSockets",
    featured: true,
    bullets: [
      "Developed real-time team chat using Angular and WebSockets with group chat, mentions, typing indicators, and file/image messaging.",
      "WebSocket architecture directly applied to AI streaming interfaces for low-latency, event-driven UI updates.",
    ],
  },
  {
    title: "Zep 360",
    subtitle: "All-in-one OS for solar & EPC businesses",
    period: "Feb 2026 – May 2026",
    environment: "ReactJS, Redux, Tailwind CSS",
    bullets: [
      "Built scalable ReactJS modules with reusable component architecture, dynamic UI workflows, and REST API integration.",
      "Optimized Redux state handling and responsive Tailwind layouts for enterprise solar & EPC operations.",
    ],
  },
] as const;

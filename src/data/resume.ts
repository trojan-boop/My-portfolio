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
  "AI Interface Builder",
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
  { value: 50, suffix: "+", label: "REST API integrations" },
  { value: 40, suffix: "%", label: "Dashboard load improvement" },
  { value: 2, label: "Years shipping production UI" },
];

export const SKILL_PROFICIENCY = [
  { name: "Angular & TypeScript", level: 92 },
  { name: "React & Redux", level: 88 },
  { name: "State management (NgRx / RxJS)", level: 90 },
  { name: "REST & streaming APIs", level: 88 },
  { name: "Performance & architecture", level: 85 },
  { name: "Responsive UI & accessibility", level: 86 },
] as const;

/** Free Lottie JSON URLs (LottieFiles) — see README for swap suggestions. */
export const LOTTIE = {
  hero: "https://assets2.lottiefiles.com/packages/lf20_fcfjwiyb.json",
  loading: "https://assets10.lottiefiles.com/packages/lf20_poqmycwz.json",
  ai: "https://assets9.lottiefiles.com/packages/lf20_myejiggj.json",
} as const;

export const PROFILE = {
  name: "Anurag Ranjan",
  role: "Software Developer",
  focus: "Frontend · SaaS · EdTech · Enterprise dashboards",
  email: "trojan.anurag07@gmail.com",
  phoneE164: "+919166791183",
  phoneDisplay: "+91 91667 91183",
  yearsExperience: "2",
  locations: {
    current: "Noida, India",
    previous: "Gurugram, India",
  },
  summary:
    "Frontend Software Developer with 2 years of experience building scalable and responsive web applications using Angular, ReactJS, TypeScript, JavaScript, and modern frontend technologies. Skilled in RESTful API integration, state management with NgRx and Redux, RxJS, performance optimization, reusable component architecture, and responsive UI development. Hands-on experience in SaaS, CRM, EdTech, and AI-powered applications with real-time streaming responses, WebSockets, authentication systems, and enterprise-level dashboards.",
  objective:
    "To work as a Frontend Software Developer in an organization where I can utilize my existing skills and knowledge, continuously learn new technologies, and contribute toward building scalable, high-performance, and user-centric applications.",
} as const;

export const SKILL_GROUPS = [
  {
    title: "Programming languages",
    items: ["TypeScript", "JavaScript", "C++", "HTML", "CSS" , "Python"],
  },
  {
    title: "Frameworks & libraries",
    items: ["Angular", "ReactJS", "RxJS", "Redux", "NgRx", "Angular Material", "Bootstrap", "Tailwind CSS" ],
  },
  {
    title: "Frontend concepts",
    items: [
      "Component architecture",
      "Lazy loading",
      "State management",
      "Responsive design",
      "API integration",
    ],
  },
  {
    title: "Architecture & concepts",
    items: [
      "Micro frontend architecture",
      "Real-time systems (WebSockets)",
      "OOP",
      "Performance optimization",
      "Monorepos",
    ],
  },
  {
    title: "AI & integrations",
    items: ["AI integration", "Streaming APIs", "Dynamic UI updates" ,"Chunked data handling"],
  },
  {
    title: "Tools & platforms",
    items: ["Git", "Postman", "VS Code" ,"Jira", "Agile methodologies", "Scrum"],
  },
  {
    title: "Other",
    items: ["WCAG", "DSA", "Authentication & authorization" ,"Role-based access control", "Testing & debugging"],
  },
] as const;

export const ACHIEVEMENTS = [
  "Contributed to enterprise-level SaaS and CRM applications serving large-scale business workflows.",
  "Collaborated with cross-functional teams in Agile and Scrum environments to deliver production-ready features.",
  "Worked on AI-powered assistant interfaces with real-time response streaming and interactive frontend experiences.",
  "Developed scalable and reusable frontend modules to improve maintainability and faster feature delivery.",
] as const;

export const EDUCATION = {
  degree: "Bachelor of Technology · Computer Science Engineering",
  school: "Lovely Professional University",
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
    period: "Aug 2025 – Mar 2026",
    location: "Noida, India",
    product: "WorkED — SaaS-based EdTech & workforce platform",
    environment: "Angular, TypeScript, RxJS, NgRx, REST APIs ,ReactJS, Redux, Tailwind CSS, WebSockets,Angular Material",
    highlights: [
      "Developed dynamic dashboards using Angular with reusable components, reactive forms, and real-time data visualization.",
      "Integrated 50+ REST APIs with authentication, pagination, AG Grid, and error handling to improve data reliability and performance.",
      "Built responsive UI with Angular Material, HTML, CSS, Bootstrap, and TypeScript for a seamless cross-device experience.",
      "Improved enterprise SaaS and CRM dashboard load time by about 40% using lazy loading, optimized API calls, and efficient state management.",
      "Reduced redundant API calls by roughly 35–50% using Angular lifecycle hooks and RxJS caching strategies.",
      "Implemented Redux and NgRx for scalable, maintainable frontend state management.",
    ],
  },
  {
    company: "Emminence Innovation",
    role: "Frontend Developer · Angular & UI",
    period: "Aug 2024 – Aug 2025",
    location: "Gurugram, India",
    product: "Sports betting & wagering client (regulated operator-facing product)",
    environment: "Angular, TypeScript, Bootstrap, REST APIs",
    highlights: [
      "Owned end-to-end UI delivery for a high-traffic betting application: markets, bet slip, wallet, and account journeys using Angular modules and shared component libraries.",
      "Built responsive, Bootstrap-backed layouts and reusable Angular components so new betting markets and promotions could ship without one-off markup.",
      "Integrated REST APIs for odds, wallets, transactions, and user state with explicit loading, empty, and error handling so live data updates stayed understandable under load.",
      "Worked closely with design and backend in Agile cadence to turn specs and wireframes into accessible, production-ready screens with consistent validation and guardrails.",
      "Improved perceived performance via lazy-loaded feature areas, lean change detection patterns where appropriate, and careful template structure for list-heavy views.",
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
    title: "Sports betting client",
    subtitle: "Angular UI for wagering flows · Emminence Innovation",
    period: "Aug 2024 – Aug 2025",
    environment: "Angular, TypeScript, Bootstrap, REST APIs",
    featured: true,
    bullets: [
      "Feature modules for browsing markets, building slips, and confirming stakes with form validation aligned to backend rules.",
      "Wallet and transaction history views with paginated REST data, stable list rendering, and defensive handling of partial failures.",
      "Shared UI kit (buttons, modals, banners) so product and compliance copy could roll out consistently across the app.",
    ],
  },
  {
    title: "Team chat application",
    subtitle: "Real-time communication platform",
    period: "—",
    environment: "Angular, TypeScript, WebSockets",
    featured: true,
    bullets: [
      "Real-time messaging with group chat, invites, mentions, typing indicators, and online status.",
      "Text, image, and file messaging with live updates and tuned event handling for scale.",
    ],
  },
  {
    title: "AI assistant — EA portal",
    subtitle: "Enterprise assistant with streaming UX",
    period: "Aug 2025 – Mar 2026",
    environment: "Angular, Redux, streaming APIs",
    featured: true,
    bullets: [
      "AI-powered assistant integrated with enterprise workflows and typewriter-style streaming responses.",
      "Mic animation and dynamic assistant interactions with Redux and NgRx for predictable state.",
      "Authentication, authorization, and role-based access control for secure portal usage.",
    ],
  },
] as const;

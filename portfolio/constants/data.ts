// All portfolio content lives here so components stay purely presentational.

export const PERSONAL = {
  name: "Aayushi Soni",
  initials: "AS",
  roles: [
    "Data Analyst",
    "AI Developer",
    "Software Developer",
  ],
  location: "Uttar Pradesh, India",
  email: "aayushisoni514@gmail.com",
  phone: "+91-8707749326",
  tagline:
    "I turn raw, messy data into dashboards and decisions — and I build AI-driven tools on the side.",
  about:
    "I'm a Computer Science (AI) undergraduate at Lucknow University and a Data Analyst Intern at Blackcoffer, where I work hands-on with data extraction and analysis every day. I like the moment a spreadsheet of numbers turns into a dashboard someone can actually act on — that's the work I chase, whether it's a Power BI report tracking ₹769M in sales or a SQL query that surfaces a trend nobody had noticed yet.",
  resumeUrl: "/resume/Aayushi_Soni_Resume.pdf",
  socials: {
    github: "https://github.com/Aayushi014",
    linkedin: "https://www.linkedin.com/in/aayushi-soni14/",
    leetcode: "https://leetcode.com/u/aayushi_soni_/",
    hackerrank: "https://www.hackerrank.com/profile/aayushisoni14031",
    email: "mailto:aayushisoni514@gmail.com",
  },
};

export const STATS = [
  { label: "SGPA", value: "9.31", suffix: "" },
  { label: "LeetCode Problems Solved", value: "200", suffix: "+" },
  { label: "Sales Tracked in Dashboard", value: "769", suffix: "M" },
  { label: "Hackathon Teams Outranked", value: "100", suffix: "+" },
];

export const EDUCATION = [
  {
    school: "Lucknow University",
    degree: "B.Tech in Computer Science (AI)",
    location: "Lucknow, Uttar Pradesh",
    period: "Aug 2024 — Aug 2028",
    detail: "SGPA: 9.31",
  },
  {
    school: "Rani Murar Kumari Girls Inter College",
    degree: "Senior Secondary (Class XII) — Physics, Chemistry & Mathematics",
    location: "Varanasi, Uttar Pradesh",
    period: "Jun 2022 — Jun 2024",
    detail: "Secured 89%",
  },
];

export type SkillCategory = {
  name: string;
  skills: { name: string; level: number }[];
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Graphic/UI Tools", level: 65 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", level: 88 },
      { name: "Java", level: 75 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQL (Joins, CTEs, Window Fns)", level: 88 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 85 },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "NumPy / Pandas", level: 85 },
      { name: "Matplotlib / Seaborn", level: 80 },
      { name: "Prompt Engineering", level: 82 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Sales Performance Analytics Dashboard",
    description:
      "An interactive Power BI dashboard built for Motorola, tracking KPIs across ₹769M in total sales — transactions, quantities sold, customer ratings, and payment trends — for real-time executive reporting.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    image: "/images/project-sales-dashboard.svg",
    github: "https://github.com/Aayushi014/PowerBI-projects",
    demo: undefined,
    highlights: [
      "Advanced charts, geo-maps, and slicers",
      "Brand-wise and month-wise breakdowns",
      "Actionable, decision-ready reporting",
    ],
  },
  {
    title: "Retail Inventory Dashboard",
    description:
      "A SQL-driven analysis of retail inventory data, surfacing turnover trends, pricing patterns, and availability issues to support smarter stocking decisions.",
    tech: ["SQL", "PostgreSQL", "MySQL"],
    image: "/images/project-inventory-dashboard.svg",
    github: "https://github.com/Aayushi014",
    demo: undefined,
    highlights: [
      "Complex JOINs, CTEs, and window functions",
      "Inventory turnover trend detection",
      "Pricing pattern and availability insights",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "Blackcoffer",
    period: "18 Jun 2025 — Present",
    points: [
      "Working directly with data — extraction, cleaning, and analysis — to support client-facing insights.",
    ],
  },
  {
    role: "Member, Coding Connoisseurs",
    org: "Lucknow University",
    period: "2024 — 2025",
    points: [
      "Designed promotional templates for club events using graphic design tools, keeping visual branding consistent across announcements and social media.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "Secured 2nd place in Integral Prompt War — a competitive AI/prompt engineering challenge.",
  "Solved 175+ problems on LeetCode, demonstrating consistent algorithmic problem-solving ability.",
  "Cleared internal rounds of Smart India Hackathon (SIH) 2025, competing against 100+ teams.",
];

export const CERTIFICATIONS = [
  {
    title: "Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    year: "2025",
    url: "#",
  },
  {
    title: "Power BI — Skill Course",
    issuer: "Microsoft",
    year: "2026",
    url: "#",
  },
];

export const GITHUB_USERNAME = "aayushisoni514";

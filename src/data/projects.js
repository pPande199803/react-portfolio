export const projectTabs = {
  projects: [
    {
      id: 1,
      title: "AI-Powered E-Commerce Chatbot",
      role: "Full Stack Developer",

      image: "/e-comm.png",

      description:
        "AI-powered e-commerce search chatbot using Jev for intent detection and decision-based product filtering.",

      features: [
        "Jev-Based Intent Detection",
        "Category & Budget Filtering",
        "Deterministic Product Search",
        "Interactive Chatbot UI",
      ],

      tech: [
        "React.js",
        "Node.js",
        "Jev",
        "OpenRouter",
        "JavaScript",
        "REST API",
      ],

      github: "https://github.com/pPande199803/jev-modal-chatbot",
      live: "",
    },
    {
      id: 2,
      title: "Personal Developer Portfolio",
      role: "Frontend Developer",

      image: "/portfolio.png",

      description:
        "Modern responsive developer portfolio built with React.js to showcase skills, experience, projects, and professional profile.",

      features: [
        "Responsive Design",
        "Project Showcase",
        "Skills & Experience Sections",
        "Interactive UI",
        "GitHub & Social Links",
      ],

      tech: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"],

      github: "https://github.com/pPande199803/react-portfolio",
      live: "https://react-portfolio-dist.vercel.app",
    },

    {
      id: 3,
      title: "Medical Store",
      role: "Full Stack Developer",
      image: "/medical-store.png",

      description:
        "A full-stack medical store management application for managing medicines, inventory, and medicine records.",

      features: [
        "Medicine inventory and management",
        "Add, update, delete, and search medicines",
        "REST API integration for medicine data",
        "MongoDB database integration",
      ],

      tech: [
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/pPande199803/medical-store",
      live: "https://medi-life-mu.vercel.app/login",
    },

    {
      id: 4,
      title: "Database Backup Manager",
      role: "Full Stack Developer",

      image: "/database-backup.png",

      description:
        "A secure database backup application supporting PostgreSQL, MySQL, and MongoDB through connection strings, with encrypted backups and automated scheduling.",

      features: [
        "Multi-database connection using connection strings",
        "Database backup and recovery",
        "AES-256-GCM backup encryption",
        "Automated backup scheduling",
      ],

      tech: [
        "Angular",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "AES-256-GCM",
      ],

      github: "https://github.com/pPande199803/Database-backup",
      live: "",
    },
  ],

  work: [
    {
      id: 1,

      title: "C4Pulse",

      role: "Frontend Developer",

      company: "Current Organization",

      description: "AI-powered social media marketing platform.",

      tasks: [
        "Built responsive Angular dashboards.",
        "Integrated FastAPI REST APIs.",
        "Implemented image upload & scheduling.",
        "Integrated LinkedIn, Facebook and Instagram APIs.",
        "Developed analytics dashboards.",
      ],

      tech: ["Angular", "FastAPI", "PostgreSQL", "Bootstrap"],
    },

    {
      id: 2,

      title: "AI Resume Optimizer",

      role: "Frontend Developer",

      company: "Current Organization",

      description:
        "Recruitment and hiring platform. Resume optimization platform using AI to improve ATS score based on job descriptions.",

      tasks: [
        "Developed reusable Angular components.",
        "Integrated authentication.",
        "Created candidate dashboard.",
        "Built responsive UI.",
      ],

      tech: ["React", "FastAPI", "PostgreSQL", "Bootstrap", "Tailwind CSS"],
    },
  ],
};

export const projectTabs = {
  projects: [
    {
      id: 1,
      title: "Advance Notes Application",
      role: "Full Stack Developer",
      image: "/projects/notes.png",

      description:
        "A secure notes management platform with authentication, password reset and email verification.",

      features: [
        "Secure notes CRUD operations",
        "OTP-based email verification",
        "Password reset using Nodemailer",
        "JWT authentication",
      ],

      tech: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/pPande199803/Advance-Notes-Appliction",
      live: "#",
    },

    {
      id: 2,
      title: "Doctor Appointment Application",
      role: "Full Stack Developer",

      image: "/projects/doctor.png",

      description:
        "Doctor and patient appointment management system with secure authentication.",

      features: [
        "Doctor & Patient Login",
        "Appointment Scheduling",
        "JWT Authentication",
        "REST API Integration",
      ],

      tech: [
       "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/pPande199803/dCare-Appoientment",
      live: "#",
    },
  ],

  work: [
    {
      id: 1,

      title: "C4Pulse",

      role: "Frontend Developer",

      company: "Current Organization",

      description:
        "AI-powered social media marketing platform.",

      tasks: [
        "Built responsive Angular dashboards.",
        "Integrated FastAPI REST APIs.",
        "Implemented image upload & scheduling.",
        "Integrated LinkedIn, Facebook and Instagram APIs.",
        "Developed analytics dashboards.",
      ],

      tech: [
        "Angular",
        "FastAPI",
        "PostgreSQL",
        "Bootstrap",
      ],
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

      tech: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Bootstrap",
        'Tailwind CSS'
      ],
    },
  ],
};
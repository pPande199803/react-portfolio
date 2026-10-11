import {
  SiAngular,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialdesignicons,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiRender,
  SiVercel,
} from "react-icons/si";
import {
  FaKey,
  FaCodeBranch,
  FaTachometerAlt,
  FaMobileAlt,
  FaGlobe,
  FaShieldAlt,
  FaBug,
  FaClipboardCheck,
  FaSyncAlt,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";
import { FiCode, FiServer } from "react-icons/fi";

export const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "Angular 20", Icon: SiAngular },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript (ES6+)", Icon: SiJavascript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss },
      { name: "SCSS", Icon: SiSass },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Angular Material", Icon: SiMaterialdesignicons },
    ],
  },

  // {
  //   title: "Angular Ecosystem",
  //   items: [
  //     "RxJS",
  //     "NgRx",
  //     "Reactive Forms",
  //     "Standalone Components",
  //     "Routing",
  //     "Lazy Loading",
  //     "Dependency Injection",
  //     "Component-Based Architecture",
  //     "Single Page Applications (SPA)",
  //     "Reusable Components",
  //   ],
  // },

  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "FastAPI (Python)", Icon: SiFastapi },
      { name: "REST APIs", Icon: FiServer },
      { name: "JWT Authentication", Icon: FaKey },
      { name: "JSON", Icon: FiCode },
    ],
  },

  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "Redis", Icon: SiRedis },
    ],
  },

  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Docker", Icon: SiDocker },
      { name: "Postman", Icon: SiPostman },
      { name: "CI/CD", Icon: FaCodeBranch },
      { name: "Render", Icon: SiRender },
      { name: "Vercel", Icon: SiVercel },
    ],
  },

  {
    title: "Professional Skills",
    items: [
      { name: "Performance Optimization", Icon: FaTachometerAlt },
      { name: "Responsive Web Design", Icon: FaMobileAlt },
      { name: "Cross-Browser Compatibility", Icon: FaGlobe },
      { name: "Error Handling", Icon: FaShieldAlt },
      { name: "Debugging", Icon: FaBug },
      { name: "Code Review", Icon: FaClipboardCheck },
      { name: "Agile", Icon: FaSyncAlt },
      { name: "Scrum", Icon: FaUsers },
      { name: "SDLC", Icon: FaLayerGroup },
    ],
  },

];
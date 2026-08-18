import {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
  ShieldCheck,
} from "lucide-react";

import {
  FaJava,
  FaJs,
  FaPython,
  FaC,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaNpm,
} from "react-icons/fa6";

import {
  SiTypescript,
  SiHtml5,
//   SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiJest,
  SiCypress,
  SiPostman,
  SiJsonwebtokens,
  SiWebpack,
  SiBabel,
  SiGithubactions,
  SiKubernetes,
  SiTerraform,
//   SiOracle,
  SiSpringboot,
  SiSpring,
  SiSocketdotio,
  SiPrisma,
  SiMongoose,
  SiSass,
} from "react-icons/si";

import "../styles/TechStack.css";


/* =========================================================
   TECHNOLOGY DATA

   Keep all technologies here.

   If you DON'T know a technology:
   → Keep it commented.

   When you learn it:
   → Remove the // before that technology.

   This makes the Tech Stack very easy to maintain.
========================================================= */

const categories = [

  /* =======================================================
     PROGRAMMING LANGUAGES
  ======================================================= */

  {
    icon: Code2,
    title: "Programming Languages",
    description: "Languages I use for development and problem solving",

    technologies: [

      // CURRENT SKILLS

      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "C", icon: FaC },

      // FUTURE SKILLS
      // { name: "Python", icon: FaPython },
      // { name: "TypeScript", icon: SiTypescript },
      // { name: "C++", icon: Code2 },
      // { name: "Kotlin", icon: Code2 },
      // { name: "Go", icon: Code2 },
      // { name: "PHP", icon: Code2 },
      // { name: "C#", icon: Code2 },
    ],
  },


  /* =======================================================
     FRONTEND
  ======================================================= */

  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",

    technologies: [

      // CURRENT SKILLS

      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: SiHtml5 },
    //   { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },

      // FUTURE SKILLS

      // { name: "TypeScript", icon: SiTypescript },
      // { name: "Next.js", icon: SiNextdotjs },
      // { name: "Redux", icon: SiRedux },
      // { name: "Redux Toolkit", icon: SiRedux },
      // { name: "Bootstrap", icon: SiBootstrap },
      // { name: "SASS / SCSS", icon: SiSass },
      // { name: "Material UI", icon: Code2 },
      // { name: "Angular", icon: Code2 },
      // { name: "Vue.js", icon: Code2 },
      // { name: "jQuery", icon: Code2 },
      // { name: "Webpack", icon: SiWebpack },
      // { name: "Babel", icon: SiBabel },
    ],
  },


  /* =======================================================
     BACKEND
  ======================================================= */

  {
    icon: Server,
    title: "Backend Development",
    description: "Developing APIs and server-side applications",

    technologies: [

      // CURRENT SKILLS

      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },

      // FUTURE SKILLS

      // { name: "Java Spring", icon: SiSpring },
      // { name: "Spring Boot", icon: SiSpringboot },
      // { name: "REST API", icon: Code2 },
      // { name: "GraphQL", icon: SiGraphql },
      // { name: "Socket.io", icon: SiSocketdotio },
      // { name: "JWT", icon: SiJsonwebtokens },
      // { name: "OAuth", icon: ShieldCheck },
      // { name: "Prisma", icon: SiPrisma },
      // { name: "Mongoose", icon: SiMongoose },
    ],
  },


  /* =======================================================
     DATABASE
  ======================================================= */

  {
    icon: Database,
    title: "Database & Storage",
    description: "Working with databases and data management",

    technologies: [

      // CURRENT SKILLS

      { name: "MongoDB", icon: SiMongodb },

      // FUTURE SKILLS

      // { name: "MySQL", icon: SiMysql },
      // { name: "PostgreSQL", icon: SiPostgresql },
      // { name: "Oracle", icon: SiOracle },
      // { name: "Redis", icon: SiRedis },
      // { name: "Firebase", icon: SiFirebase },
      // { name: "SQL", icon: Database },
      // { name: "NoSQL", icon: Database },
    ],
  },


  /* =======================================================
     DEVOPS & CLOUD
  ======================================================= */

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment, infrastructure and development operations",

    technologies: [

      // CURRENT / FAMILIAR TOOLS

      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "NPM", icon: FaNpm },

      // FUTURE SKILLS

      // { name: "Docker", icon: FaDocker },
      // { name: "AWS", icon: FaAws },
      // { name: "Azure", icon: Cloud },
      // { name: "Google Cloud", icon: Cloud },
      // { name: "Linux", icon: FaLinux },
      // { name: "Kubernetes", icon: SiKubernetes },
      // { name: "GitHub Actions", icon: SiGithubactions },
      // { name: "Terraform", icon: SiTerraform },
      // { name: "CI/CD", icon: Cloud },
      // { name: "Nginx", icon: Server },
    ],
  },


  /* =======================================================
     DEVELOPMENT TOOLS
  ======================================================= */

  {
    icon: Wrench,
    title: "Development Tools",
    description: "Tools used throughout the software development workflow",

    technologies: [

      // CURRENT SKILLS

      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vite", icon: SiVite },

      // FUTURE SKILLS

      // { name: "IntelliJ IDEA", icon: Code2 },
      // { name: "Eclipse", icon: Code2 },
      // { name: "Docker Desktop", icon: FaDocker },
      // { name: "Figma", icon: Code2 },
      // { name: "Jira", icon: Code2 },
      // { name: "Notion", icon: Code2 },
    ],
  },


  /* =======================================================
     TESTING
  ======================================================= */

  {
    icon: ShieldCheck,
    title: "Testing",
    description: "Software testing and quality assurance",

    technologies: [

      // FUTURE SKILLS

      // { name: "Jest", icon: SiJest },
      // { name: "Cypress", icon: SiCypress },
      // { name: "React Testing Library", icon: FaReact },
      // { name: "JUnit", icon: FaJava },
      // { name: "Selenium", icon: Code2 },
      // { name: "Postman Testing", icon: SiPostman },
    ],
  },


  /* =======================================================
     COMPUTER SCIENCE & DSA
  ======================================================= */

  {
    icon: Brain,
    title: "Computer Science",
    description: "Core concepts and problem-solving skills",

    technologies: [

      // CURRENT SKILLS

      { name: "Data Structures", icon: Brain },
      { name: "Algorithms", icon: Brain },
      { name: "Problem Solving", icon: Brain },

      // FUTURE / ADVANCED SKILLS

      // { name: "OOP", icon: Code2 },
      // { name: "DBMS", icon: Database },
      // { name: "Operating Systems", icon: Monitor },
      // { name: "Computer Networks", icon: Server },
      // { name: "System Design", icon: Server },
      // { name: "Design Patterns", icon: Code2 },
      // { name: "Low Level Design", icon: Code2 },
      // { name: "High Level Design", icon: Server },
      // { name: "Multithreading", icon: Code2 },
    ],
  },


  /* =======================================================
     OTHER / FUTURE TECHNOLOGIES
  ======================================================= */

  {
    icon: Code2,
    title: "Other Technologies",
    description: "Additional technologies I may explore",

    technologies: [

      // FUTURE SKILLS

      // { name: "Machine Learning", icon: Brain },
      // { name: "Artificial Intelligence", icon: Brain },
      // { name: "Generative AI", icon: Brain },
      // { name: "OpenAI API", icon: Brain },
      // { name: "Cyber Security", icon: ShieldCheck },
      // { name: "Blockchain", icon: Code2 },
      // { name: "WebSockets", icon: Server },
      // { name: "Microservices", icon: Server },
      // { name: "Serverless", icon: Cloud },
      // { name: "Web3", icon: Code2 },
    ],
  },
];


function TechStack() {

  return (
    <section className="tech-stack" id="skills">

      <div className="tech-stack-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="tech-stack-header">

          <span className="section-eyebrow">
            TECHNOLOGIES
          </span>

          <h2>
            Tools I use to
            <span> build & create.</span>
          </h2>

          <p>
            Technologies, programming languages and tools
            I use to build modern software applications.
          </p>

        </div>


        {/* =========================
            TECHNOLOGY CATEGORIES
        ========================= */}

        <div className="tech-stack-grid">

          {categories.map((category, index) => {

            const CategoryIcon = category.icon;

            return (
              <div
                className="tech-category"
                key={index}
              >

                {/* Category Header */}

                <div className="tech-category-header">

                  <div className="tech-category-icon">

                    <CategoryIcon
                      size={21}
                      strokeWidth={1.8}
                    />

                  </div>

                  <div>

                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.description}
                    </p>

                  </div>

                </div>


                {/* Technologies */}

                <div className="tech-list">

                  {category.technologies.map(
                    (technology, techIndex) => {

                      const TechIcon = technology.icon;

                      return (
                        <div
                          className="tech-item"
                          key={techIndex}
                        >

                          <TechIcon
                            className="tech-item-icon"
                            size={19}
                          />

                          <span>
                            {technology.name}
                          </span>

                        </div>
                      );

                    }
                  )}

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default TechStack;
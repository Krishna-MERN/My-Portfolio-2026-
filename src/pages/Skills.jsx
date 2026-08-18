import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
  Brain,
  GitBranch,
  Layers3,
  Terminal,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import "../styles/Skills.css";

const Skills = () => {

  /*
   * =========================================================
   * SKILLS DATA
   *
   * Uncomment a skill when you learn it.
   * You can also add new skills easily.
   * =========================================================
   */

  const skillCategories = [

    // =======================================================
    // PROGRAMMING LANGUAGES
    // =======================================================

    {
      title: "Programming Languages",
      description:
        "Languages I use for software development, problem solving and application logic.",

      icon: <Code2 size={21} />,

      skills: [
        {
          name: "Java",
          level: "Learning / Developing",
        },

        {
          name: "JavaScript",
          level: "Working Knowledge",
        },

        // {
        //   name: "TypeScript",
        //   level: "Learning",
        // },

        // {
        //   name: "C",
        //   level: "Working Knowledge",
        // },

        // {
        //   name: "C++",
        //   level: "Learning",
        // },

        // {
        //   name: "Python",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // FRONTEND
    // =======================================================

    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible and interactive user interfaces.",

      icon: <Globe size={21} />,

      skills: [
        {
          name: "HTML5",
          level: "Working Knowledge",
        },

        {
          name: "CSS3",
          level: "Working Knowledge",
        },

        {
          name: "JavaScript",
          level: "Working Knowledge",
        },

        {
          name: "React.js",
          level: "Working Knowledge",
        },

        {
          name: "Responsive Design",
          level: "Working Knowledge",
        },

        {
          name: "Vite",
          level: "Working Knowledge",
        },

        // {
        //   name: "Next.js",
        //   level: "Learning",
        // },

        // {
        //   name: "Redux",
        //   level: "Learning",
        // },

        // {
        //   name: "React Native",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // BACKEND
    // =======================================================

    {
      title: "Backend Development",
      description:
        "Developing server-side applications, APIs and backend functionality.",

      icon: <Server size={21} />,

      skills: [
        {
          name: "Node.js",
          level: "Working Knowledge",
        },

        {
          name: "Express.js",
          level: "Working Knowledge",
        },

        {
          name: "REST APIs",
          level: "Working Knowledge",
        },

        // {
        //   name: "Java Spring Boot",
        //   level: "Learning",
        // },

        // {
        //   name: "Spring MVC",
        //   level: "Learning",
        // },

        // {
        //   name: "JWT Authentication",
        //   level: "Learning",
        // },

        // {
        //   name: "Socket.io",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // DATABASE
    // =======================================================

    {
      title: "Database & Storage",
      description:
        "Working with databases and application data management.",

      icon: <Database size={21} />,

      skills: [
        {
          name: "MongoDB",
          level: "Working Knowledge",
        },

        {
          name: "Mongoose",
          level: "Working Knowledge",
        },

        // {
        //   name: "MySQL",
        //   level: "Learning",
        // },

        // {
        //   name: "PostgreSQL",
        //   level: "Learning",
        // },

        // {
        //   name: "Redis",
        //   level: "Learning",
        // },

        // {
        //   name: "Firebase",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // MERN STACK
    // =======================================================

    {
      title: "MERN Stack",
      description:
        "Full-stack JavaScript development using the MERN ecosystem.",

      icon: <Layers3 size={21} />,

      skills: [
        {
          name: "MongoDB",
          level: "Working Knowledge",
        },

        {
          name: "Express.js",
          level: "Working Knowledge",
        },

        {
          name: "React.js",
          level: "Working Knowledge",
        },

        {
          name: "Node.js",
          level: "Working Knowledge",
        },

        // {
        //   name: "MERN Authentication",
        //   level: "Learning",
        // },

        // {
        //   name: "MERN Deployment",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // DSA
    // =======================================================

    {
      title: "DSA & Problem Solving",
      description:
        "Developing algorithmic thinking and problem-solving skills.",

      icon: <Brain size={21} />,

      skills: [
        {
          name: "Data Structures",
          level: "Learning",
        },

        {
          name: "Algorithms",
          level: "Learning",
        },

        {
          name: "Arrays",
          level: "Working Knowledge",
        },

        {
          name: "Strings",
          level: "Working Knowledge",
        },

        {
          name: "Linked List",
          level: "Learning",
        },

        {
          name: "Stack",
          level: "Learning",
        },

        {
          name: "Queue",
          level: "Learning",
        },

        {
          name: "Recursion",
          level: "Learning",
        },

        // {
        //   name: "Trees",
        //   level: "Learning",
        // },

        // {
        //   name: "Graphs",
        //   level: "Learning",
        // },

        // {
        //   name: "Dynamic Programming",
        //   level: "Learning",
        // },

        // {
        //   name: "Greedy Algorithms",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // VERSION CONTROL
    // =======================================================

    {
      title: "Version Control",
      description:
        "Tools and practices used for source code management.",

      icon: <GitBranch size={21} />,

      skills: [
        {
          name: "Git",
          level: "Working Knowledge",
        },

        {
          name: "GitHub",
          level: "Working Knowledge",
        },

        // {
        //   name: "GitLab",
        //   level: "Learning",
        // },

        // {
        //   name: "GitHub Actions",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // TOOLS
    // =======================================================

    {
      title: "Development Tools",
      description:
        "Tools and environments used during development.",

      icon: <Wrench size={21} />,

      skills: [
        {
          name: "VS Code",
          level: "Working Knowledge",
        },

        {
          name: "Postman",
          level: "Working Knowledge",
        },

        {
          name: "npm",
          level: "Working Knowledge",
        },

        // {
        //   name: "Docker",
        //   level: "Learning",
        // },

        // {
        //   name: "Jenkins",
        //   level: "Learning",
        // },

        // {
        //   name: "Linux",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // UI / CSS
    // =======================================================

    {
      title: "UI & Styling",
      description:
        "Technologies used to create modern and responsive interfaces.",

      icon: <Layers3 size={21} />,

      skills: [
        {
          name: "CSS",
          level: "Working Knowledge",
        },

        {
          name: "Tailwind CSS",
          level: "Working Knowledge",
        },

        {
          name: "Responsive UI",
          level: "Working Knowledge",
        },

        // {
        //   name: "Bootstrap",
        //   level: "Learning",
        // },

        // {
        //   name: "Material UI",
        //   level: "Learning",
        // },

        // {
        //   name: "SASS / SCSS",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // CLOUD / DEPLOYMENT
    // =======================================================

    {
      title: "Deployment & Cloud",
      description:
        "Platforms and technologies for deploying applications.",

      icon: <Cpu size={21} />,

      skills: [

        // {
        //   name: "Vercel",
        //   level: "Learning",
        // },

        // {
        //   name: "Netlify",
        //   level: "Learning",
        // },

        // {
        //   name: "Render",
        //   level: "Learning",
        // },

        // {
        //   name: "AWS",
        //   level: "Learning",
        // },

        // {
        //   name: "Azure",
        //   level: "Learning",
        // },

        // {
        //   name: "Google Cloud",
        //   level: "Learning",
        // },
      ],
    },


    // =======================================================
    // TERMINAL / OTHER
    // =======================================================

    {
      title: "Other Technologies",
      description:
        "Additional technologies and concepts I am exploring.",

      icon: <Terminal size={21} />,

      skills: [

        // {
        //   name: "Linux",
        //   level: "Learning",
        // },

        // {
        //   name: "Shell Scripting",
        //   level: "Learning",
        // },

        // {
        //   name: "WebSockets",
        //   level: "Learning",
        // },

        // {
        //   name: "Microservices",
        //   level: "Learning",
        // },

        // {
        //   name: "System Design",
        //   level: "Learning",
        // },

        // {
        //   name: "Software Architecture",
        //   level: "Learning",
        // },
      ],
    },

  ];


  return (
    <main className="skills-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="skills-hero">

        <div className="skills-container">

          <div className="skills-hero-content">

            <span className="skills-eyebrow">
              SKILLS & TECHNOLOGIES
            </span>

            <h1>
              Technologies I
              <span> build with.</span>
            </h1>

            <p>
              A continuously evolving collection of programming
              languages, frameworks, tools and technologies that I
              use or am currently learning for software development.
            </p>

            <div className="skills-hero-tags">

              <span>
                <CheckCircle2 size={14} />
                Continuously Learning
              </span>

              <span>
                <Code2 size={14} />
                Software Development
              </span>

              <span>
                <Brain size={14} />
                Problem Solving
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS CATEGORIES
      ===================================================== */}

      <section className="skills-section">

        <div className="skills-container">

          <div className="skills-section-heading">

            <span>
              TECHNICAL SKILLS
            </span>

            <h2>
              My technical
              <strong> toolkit.</strong>
            </h2>

            <p>
              Technologies are organized by category to make it
              easier to understand my current technical stack and
              areas of continuous learning.
            </p>

          </div>


          <div className="skills-grid">

            {skillCategories.map((category, index) => (

              <article
                className="skill-category-card"
                key={index}
              >

                <div className="skill-category-header">

                  <div className="skill-category-icon">
                    {category.icon}
                  </div>

                  <div>

                    <h3>
                      {category.title}
                    </h3>

                    <span>
                      {category.skills.length} Skills
                    </span>

                  </div>

                </div>


                <p className="skill-category-description">
                  {category.description}
                </p>


                <div className="skill-list">

                  {category.skills.map((skill, skillIndex) => (

                    <div
                      className="skill-item"
                      key={skillIndex}
                    >

                      <div className="skill-item-name">

                        <span className="skill-dot"></span>

                        <strong>
                          {skill.name}
                        </strong>

                      </div>

                      <span className="skill-level">
                        {skill.level}
                      </span>

                    </div>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CURRENT FOCUS
      ===================================================== */}

      <section className="skills-focus">

        <div className="skills-container">

          <div className="skills-focus-card">

            <div className="skills-focus-icon">
              <Brain size={24} />
            </div>

            <div className="skills-focus-content">

              <span>
                CURRENTLY FOCUSED ON
              </span>

              <h2>
                Improving my development
                <strong> depth.</strong>
              </h2>

              <p>
                My current learning focus is on strengthening
                Java, JavaScript, React, MERN stack development,
                data structures and algorithms while continuing to
                explore modern software development practices.
              </p>

              <div className="skills-focus-tags">

                <span>Java</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>MERN</span>
                <span>DSA</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING MINDSET
      ===================================================== */}

      <section className="skills-mindset">

        <div className="skills-container">

          <div className="skills-mindset-heading">

            <span>
              LEARNING MINDSET
            </span>

            <h2>
              Skills are never
              <strong> finished.</strong>
            </h2>

            <p>
              Technology continuously evolves, and so does my
              skill set. I believe in learning by building,
              practicing and solving real problems.
            </p>

          </div>


          <div className="skills-mindset-grid">

            <div className="skills-mindset-card">

              <Code2 size={20} />

              <h3>
                Learn
              </h3>

              <p>
                Understand new technologies and development
                concepts through structured learning.
              </p>

            </div>


            <div className="skills-mindset-card">

              <Wrench size={20} />

              <h3>
                Build
              </h3>

              <p>
                Convert knowledge into practical projects and
                real-world applications.
              </p>

            </div>


            <div className="skills-mindset-card">

              <Brain size={20} />

              <h3>
                Practice
              </h3>

              <p>
                Strengthen programming and problem-solving skills
                through continuous practice.
              </p>

            </div>


            <div className="skills-mindset-card">

              <ArrowRight size={20} />

              <h3>
                Improve
              </h3>

              <p>
                Review existing knowledge and continuously improve
                development quality and efficiency.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="skills-cta">

        <div className="skills-container">

          <div className="skills-cta-card">

            <span>
              LET'S WORK TOGETHER
            </span>

            <h2>
              Have a project in
              <strong> mind?</strong>
            </h2>

            <p>
              I'm always interested in learning, building and
              contributing to meaningful software projects.
            </p>

            <a href="/contact">
              Get In Touch
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Skills;